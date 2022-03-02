import { ActionFunction, Form, Link, LoaderFunction, redirect, useLoaderData } from 'remix';
import { oAuthStrategy } from '~/auth.server';
import { db } from '~/utils/db.server';
import { Worry } from '~/utils/types';
import { RiDeleteBin6Line, RiEditLine } from 'react-icons/ri';

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await oAuthStrategy.checkSession(request, {
    failureRedirect: '/login',
  });
  const url = new URL(request.url);
  let page_s = url.searchParams.get('page');
  if (!page_s || !+page_s) return redirect('/my-worries?page=1');
  let page = +page_s;
  let worries, pages, arr_pages;
  if (session) {
    const posts_count = await db.posts.count({
      where: {
        authorId: session.user?.id,
      },
    });
    pages = posts_count / 10;
    if (pages === 0) pages = 1;

    let zvysok = posts_count % 10;
    if (zvysok > 0) pages = Math.floor(pages) + 1;

    let skip = 0;
    if (page > 1) skip = (page - 1) * 10;
    if (page > pages) return redirect('/my-worries?page=1');
    arr_pages = Array(pages)
      .fill(0)
      .map((_, i) => i++);
    worries = await db.posts.findMany({
      orderBy: {
        created_at: 'desc',
      },
      skip: skip,
      take: 10,
      where: {
        authorId: session.user?.id,
      },
      include: {
        author: {
          select: {
            user_name: true,
            avatar_url: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });
  }
  return { worries, page, arr_pages };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const worryId = formData.get('worryId');
  if (worryId) {
    if (formData.get('_action') === 'delete') {
      await db.posts.delete({
        where: {
          id: +worryId,
        },
      });
    }
    if (formData.get('_action') === 'edit') {
      return redirect(`/my-worries/${worryId}/edit`);
    }
  }
  return null;
};

function getDate(date: Date) {
  const created = new Date(date);
  const day = created.getDate();
  const month = created.getMonth();
  const year = created.getFullYear();
  return month + 1 + '/' + day + '/' + year;
}

export default function MyWorries() {
  const { worries, page, arr_pages }: { worries: Worry[]; page: number; arr_pages: number[] } = useLoaderData();
  return (
    <>
      <h1 className="flex items-center justify-center w-full text-xl font-semibold">Your worries</h1>
      <div className="mt-5 w-[95%] sm:w-[85%] md:w-[75%] border mx-auto border-gray-500">
        <div className="flex flex-col">
          {worries.length > 0 ? (
            worries.map((item: Worry) => (
              <div key={item.id} className="flex hover:bg-gray-700">
                <Link to={`/${item.id}`} className="flex flex-col flex-grow p-3 cursor-pointer ">
                  <div className="line-clamp-3">
                    <p className="text-sm text-gray-300 first-line:font-semibold first-line:text-base first-line:text-white">
                      {item.post}
                    </p>
                  </div>
                  <div className="flex space-x-2 text-xs text-gray-400">
                    {item.is_anon ? <p>Anonym</p> : <p>{item.author?.user_name}</p>}
                    <div className="border-r border-gray-500" />
                    <p>Comments: {item._count.comments}</p>
                    <div className="border-r border-gray-500" />
                    <p>{getDate(item.created_at)}</p>
                  </div>
                </Link>
                <Form method="post" className="flex items-start justify-center px-2 py-4 space-x-2">
                  <input type="hidden" name="worryId" value={item.id} />
                  <button type="submit" name="_action" value="delete">
                    <RiDeleteBin6Line className="w-4 h-4 text-red-500 transition duration-150 ease-out transform cursor-pointer hover:scale-125" />
                  </button>
                  <button type="submit" name="_action" value="edit">
                    <RiEditLine className="w-4 h-4 text-blue-500 transition duration-150 ease-out transform cursor-pointer hover:scale-125" />
                  </button>
                </Form>
              </div>
            ))
          ) : (
            <p className="flex justify-center py-5 text-sm text-gray-400">Nothing found yet</p>
          )}
        </div>
      </div>
      <div className="flex justify-center mb-5 btn-group">
        {arr_pages.map((item) => (
          <Link
            key={item}
            to={`/my-worries?page=${item + 1}`}
            className={`btn btn-xs ${item + 1 === page && 'btn-active'}`}
          >
            {item + 1}
          </Link>
        ))}
      </div>
    </>
  );
}

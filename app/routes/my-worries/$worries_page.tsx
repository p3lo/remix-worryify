import { Link, LoaderFunction, redirect, useLoaderData } from 'remix';
import { oAuthStrategy } from '~/auth.server';
import { db } from '~/utils/db.server';
import { Worry } from '~/utils/types';

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await oAuthStrategy.checkSession(request, {
    failureRedirect: '/login',
  });
  let page_s = params.worries_page;
  if (!page_s || !+page_s) return redirect('/my-worries/1');
  let page = +page_s;
  let worries, pages, arr_pages;
  if (session) {
    const posts_count = await db.posts.count();
    pages = posts_count / 5;
    if (pages === 0) pages = 1;

    let zvysok = posts_count % 5;
    if (zvysok > 0) pages = Math.floor(pages) + 1;

    let skip = 0;
    if (page > 1) skip = (page - 1) * 5;
    if (page > pages) return redirect('/my-worries/1');
    arr_pages = Array(pages)
      .fill(0)
      .map((_, i) => i++);
    worries = await db.posts.findMany({
      skip: skip,
      take: 5,
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
      },
    });
  }
  return { worries, page, arr_pages };
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
      <div className="mt-5 w-[70%] border mx-auto p-3 border-gray-500">
        <div className="flex flex-col space-y-3">
          {worries.map((item: Worry) => (
            <div key={item.id} className="flex flex-col p-2 cursor-pointer hover:shadow hover:shadow-gray-500">
              <div className="line-clamp-3">
                <p className="text-sm text-gray-300 first-line:font-semibold first-line:text-base first-line:text-white">
                  {item.post}
                </p>
              </div>
              <div className="flex space-x-2 text-xs text-gray-400">
                {item.is_anon ? <p>Anonym</p> : <p>{item.author?.user_name}</p>}
                <div className="border-r border-gray-500" />
                <p>Comments: 0</p>
                <div className="border-r border-gray-500" />
                <p>{getDate(item.created_at)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mb-5 btn-group">
        {arr_pages.map((item) => (
          <Link key={item} to={`/my-worries/${item + 1}`} className={`btn btn-xs ${item + 1 === page && 'btn-active'}`}>
            {item + 1}
          </Link>
        ))}
      </div>
    </>
  );
}

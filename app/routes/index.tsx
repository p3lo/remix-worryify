import { Link, LoaderFunction, redirect, useLoaderData } from 'remix';
import Pagination from '~/components/Pagination';
import { db } from '~/utils/db.server';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  let page = url.searchParams.get('page');
  if (!page || !+page) return redirect('/?page=1');
  let pages;
  const posts_count = await db.posts.count();
  pages = posts_count / 10;
  if (pages === 0) pages = 1;

  let zvysok = posts_count % 10;
  if (zvysok > 0) pages = Math.floor(pages) + 1;

  let skip = 0;
  if (+page > 1) skip = (+page - 1) * 10;
  if (+page > pages) return redirect('/?page=1');
  let arr_pages = Array(pages)
    .fill(0)
    .map((_, i) => i++);
  const all_posts = await db.posts.findMany({
    skip: skip,
    take: 10,
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
  return { all_posts, arr_pages, page };
};

function getDate(date: Date) {
  const created = new Date(date);
  const day = created.getDate();
  const month = created.getMonth();
  const year = created.getFullYear();
  return month + 1 + '/' + day + '/' + year;
}

export default function Index() {
  const { all_posts, arr_pages, page } = useLoaderData();
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl">Welcome to WorryIfy</h1>
        <p>A place to let your worries go.</p>
      </div>
      <div className="mt-10 w-[95%] sm:w-[85%] md:w-[75%] border mx-auto border-gray-500">
        <div className="flex flex-col ">
          {all_posts.map((item: any) => (
            <Link to={`/${item.id}`} key={item.id} className="flex flex-col p-3 cursor-pointer hover:bg-gray-700">
              <div className="line-clamp-3">
                <p className="text-sm text-gray-300 first-line:font-semibold first-line:text-base first-line:text-white">
                  {item.post}
                </p>
              </div>
              <div className="flex space-x-2 text-xs text-gray-400">
                {item.is_anon ? <p>Anonym</p> : <p>{item.author.user_name}</p>}
                <div className="border-r border-gray-500" />
                <p>Comments: {item._count.comments}</p>
                <div className="border-r border-gray-500" />
                <p>{getDate(item.created_at)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Pagination arr_pages={arr_pages} page={page} />
    </div>
  );
}

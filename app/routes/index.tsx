import { Link, LoaderFunction, useLoaderData } from 'remix';
import { db } from '~/utils/db.server';

export const loader: LoaderFunction = async () => {
  const all_posts = await db.posts.findMany({
    include: {
      author: {
        select: {
          user_name: true,
          avatar_url: true,
        },
      },
    },
  });
  return { all_posts };
};

function getDate(date: Date) {
  const created = new Date(date);
  const day = created.getDate();
  const month = created.getMonth();
  const year = created.getFullYear();
  return month + 1 + '/' + day + '/' + year;
}

export default function Index() {
  const { all_posts } = useLoaderData();
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl">Welcome to WorryIfy</h1>
        <p>A place to let your worries go.</p>
      </div>
      <div className="my-10 w-[95%] sm:w-[85%] md:w-[75%] border mx-auto p-3 border-gray-500">
        <div className="flex flex-col space-y-3">
          {all_posts.map((item: any) => (
            <Link
              to={`/${item.id}`}
              key={item.id}
              className="flex flex-col p-2 cursor-pointer hover:shadow hover:shadow-gray-500"
            >
              <div className="line-clamp-3">
                <p className="text-sm text-gray-300 first-line:font-semibold first-line:text-base first-line:text-white">
                  {item.post}
                </p>
              </div>
              <div className="flex space-x-2 text-xs text-gray-400">
                {item.is_anon ? <p>Anonym</p> : <p>{item.author.user_name}</p>}
                <div className="border-r border-gray-500" />
                <p>Comments: 0</p>
                <div className="border-r border-gray-500" />
                <p>{getDate(item.created_at)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

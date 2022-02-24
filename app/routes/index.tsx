import { LoaderFunction, useLoaderData } from 'remix';
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

export default function Index() {
  const { all_posts } = useLoaderData();
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl">Welcome to WorryIfy</h1>
        <p>A place to let your worries go.</p>
      </div>
      <div className="mt-10 w-[70%] border mx-auto p-3 border-gray-500">
        <div className="flex flex-col space-y-3">
          {all_posts.map((item: any) => (
            <div className="flex flex-col cursor-pointer hover:shadow p-2 hover:shadow-gray-500">
              <div className="line-clamp-3">
                <p className="first-line:font-semibold text-sm first-line:text-base text-gray-300 first-line:text-white">
                  {item.post}
                </p>
              </div>
              <div className="flex space-x-2 text-xs text-gray-400">
                {item.is_anon ? <p>Anonym</p> : <p>{item.author.user_name}</p>}
                <div className="border-r border-gray-500" />
                <p>Comments: 0</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

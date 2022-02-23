import type { LoaderFunction } from 'remix';
import { json, useLoaderData } from 'remix';
import { authenticator, oAuthStrategy, sessionStorage } from '~/auth.server';
import { signInWithGithub } from '~/supabase.client';

export const loader: LoaderFunction = async ({ request }) => {
  const session = await oAuthStrategy.checkSession(request, {
    failureRedirect: '/login',
  });

  return session;
};

export default function Profile() {
  const session = useLoaderData();

  return (
    <div className="w-full mt-[20vh]">
      <div className="flex items-center justify-center  space-x-4">
        <div className="avatar">
          <div className="w-44 rounded-full border border-gray-500">
            <img src={session.user.user_metadata.avatar_url} />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-5xl font-bold">{session.user.user_metadata.user_name}</p>
          <p>{session.user.user_metadata.email}</p>
        </div>
      </div>
    </div>
  );
}

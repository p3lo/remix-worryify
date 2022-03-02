import type { LoaderFunction } from 'remix';
import { json, useLoaderData } from 'remix';
import { authenticator, oAuthStrategy, sessionStorage } from '~/auth.server';
import { signInWithGithub, signInWithGoogle } from '~/supabase.client';

type LoaderData = {
  error: { message: string } | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  await oAuthStrategy.checkSession(request, {
    successRedirect: '/',
  });

  const session = await sessionStorage.getSession(request.headers.get('Cookie'));

  const error = session.get(authenticator.sessionErrorKey) as LoaderData['error'];

  return json<LoaderData>({ error });
};

export default function Screen() {
  const { error } = useLoaderData<LoaderData>();

  return (
    <>
      {error && <div>{error.message}</div>}

      <div className="flex flex-col space-y-5 w-full mt-[25vh]">
        <button className="btn mx-auto w-[250px]" onClick={() => signInWithGithub()}>
          Sign in with Github
        </button>
        <button className="btn mx-auto w-[250px]" onClick={() => signInWithGoogle()}>
          Sign in with Google
        </button>
      </div>
    </>
  );
}

import { ActionFunction, Form, LoaderFunction, Outlet } from 'remix';
import { useLoaderData } from 'remix';
import { oAuthStrategy } from '~/auth.server';
import { db } from '~/utils/db.server';
import { Profile, Worry } from '~/utils/types';

export const loader: LoaderFunction = async ({ request }) => {
  const session = await oAuthStrategy.checkSession(request, {
    failureRedirect: '/login',
  });
  let user;
  if (session) {
    user = await db.profiles.findUnique({
      where: {
        id: session.user?.id,
      },
    });
  }
  return { user };
};

export const action: ActionFunction = async ({ request }) => {
  const session = await oAuthStrategy.checkSession(request, {
    failureRedirect: '/login',
  });
  const formData = await request.formData();
  let user_name: string | undefined = formData.get('user_name')?.toString();
  let email: string | undefined = formData.get('email')?.toString();
  if (!user_name || !email) {
    return null;
  }
  const updateUser = await db.profiles.update({
    where: {
      id: session.user?.id,
    },
    data: {
      user_name,
      email,
    },
  });
  return null;
};

export default function Profile() {
  const { user }: { user: Profile } = useLoaderData();

  return (
    <>
      <div className="w-full mt-[10vh]">
        <div className="flex items-center justify-center space-x-4">
          <div className="avatar">
            <div className="border border-gray-500 rounded-full w-44">
              <img src={user.avatar_url} />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-5xl font-bold">{user.user_name}</p>
            <p className="text-gray-400">{user.email}</p>
          </div>
        </div>
      </div>
      <Form method="post" className="flex flex-col items-center justify-center my-[5vh] space-y-3">
        <label className="justify-center w-[50vh] input-group">
          <span className="w-[150px]">Username</span>
          <input
            type="text"
            name="user_name"
            defaultValue={user.user_name}
            placeholder="username"
            className="w-full input input-bordered"
          />
        </label>
        <label className="justify-center w-[50vh] input-group">
          <span className="w-[150px]">Email</span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={user.email}
            className="w-full input input-bordered"
          />
        </label>

        <button type="submit" className="btn w-[200px]">
          Save
        </button>
      </Form>
      <Outlet />
    </>
  );
}

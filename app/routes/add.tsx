import { ActionFunction, Form, LoaderFunction, redirect } from 'remix';
import { oAuthStrategy } from '~/auth.server';
import { db } from '~/utils/db.server';
import { Profile } from '~/utils/types';

export const loader: LoaderFunction = async ({ request }) => {
  await oAuthStrategy.checkSession(request, {
    failureRedirect: '/login',
  });

  return null;
};

export const action: ActionFunction = async ({ request }) => {
  const session = await oAuthStrategy.checkSession(request, {
    failureRedirect: '/login',
  });
  const formData = await request.formData();
  const worry: string | undefined = formData.get('worry')?.toString();
  if (worry && session.user) {
    if (formData.get('anonymously')) {
      await db.posts.create({
        data: {
          post: worry,
          is_anon: true,
          authorId: session.user.id,
        },
      });
    } else {
      await db.posts.create({
        data: {
          post: worry,
          is_anon: false,
          authorId: session.user.id,
        },
      });
    }
  }
  return redirect('/');
};

export default function Profile() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Add your worry</h1>
        <p className="text-sm">and let it go</p>
      </div>
      <Form className="flex flex-col justify-center items-center my-5 space-y-3" method="post">
        <textarea className="textarea textarea-bordered w-1/2" placeholder="Your worry" name="worry"></textarea>
        <label className="cursor-pointer label">
          <span className="label-text mr-2">Post anonymously</span>
          <input type="checkbox" className="checkbox checkbox-sm" name="anonymously" />
        </label>
        <button type="submit" className="btn w-[200px]">
          Post
        </button>
      </Form>
    </div>
  );
}

import { ActionFunction, Form, LoaderFunction, redirect } from 'remix';
import { oAuthStrategy } from '~/auth.server';
import { db } from '~/utils/db.server';

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
    let isAnon;
    if (formData.get('anonymously')) {
      isAnon = true;
    } else {
      isAnon = false;
    }
    await db.posts.create({
      data: {
        post: worry,
        is_anon: isAnon,
        authorId: session.user.id,
      },
    });
  }
  return redirect('/');
};

export default function Add() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Add your worry</h1>
        <p className="text-sm">and let it go</p>
      </div>
      <Form className="flex flex-col items-center justify-center my-5 space-y-3" method="post">
        <textarea className="w-1/2 textarea textarea-bordered" placeholder="Your worry" name="worry"></textarea>
        <label className="cursor-pointer label">
          <span className="mr-2 label-text">Post anonymously</span>
          <input type="checkbox" className="checkbox checkbox-sm" name="anonymously" />
        </label>
        <button type="submit" className="btn w-[200px]">
          Post
        </button>
      </Form>
    </div>
  );
}

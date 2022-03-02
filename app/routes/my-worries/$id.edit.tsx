import { useEffect, useRef, useState } from 'react';
import { ActionFunction, Form, LoaderFunction, redirect, useLoaderData } from 'remix';
import { oAuthStrategy } from '~/auth.server';
import { db } from '~/utils/db.server';
import { Worry } from '~/utils/types';

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = await oAuthStrategy.checkSession(request, {
    failureRedirect: '/login',
  });
  let worry_id = params.id;
  let data;
  if (worry_id) {
    data = await db.posts.findFirst({
      where: {
        id: +worry_id,
        authorId: user.user?.id,
      },
    });
  }
  if (data) {
    return { data };
  } else {
    return redirect('/my-worries?page=1');
  }
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const worry: string | undefined = formData.get('worry')?.toString();
  let worry_id = params.id;
  if (worry && worry_id) {
    let isAnon;
    if (formData.get('anonymously')) {
      isAnon = true;
    } else {
      isAnon = false;
    }
    await db.posts.update({
      where: {
        id: +worry_id,
      },
      data: {
        post: worry,
        is_anon: isAnon,
      },
    });
  }
  return redirect('/my-worries?page=1');
};

function WorryEdit() {
  const { data }: { data: Worry } = useLoaderData();

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Edit your worry</h1>
      </div>
      <Form className="flex flex-col items-center justify-center my-5 space-y-3" method="post">
        <textarea
          className="w-1/2 textarea textarea-bordered"
          placeholder="Your worry"
          name="worry"
          defaultValue={data.post}
        ></textarea>
        <label className="cursor-pointer label">
          <span className="mr-2 label-text">Post anonymously</span>
          <input defaultChecked={data.is_anon} type="checkbox" className="checkbox checkbox-sm" name="anonymously" />
        </label>
        <button type="submit" className="btn w-[200px]">
          Edit
        </button>
      </Form>
    </div>
  );
}

export default WorryEdit;

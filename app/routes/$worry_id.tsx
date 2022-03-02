import { useEffect, useRef } from 'react';
import { ActionFunction, Form, LoaderFunction, redirect, Session, useLoaderData, useTransition } from 'remix';
import { oAuthStrategy } from '~/auth.server';
import { db } from '~/utils/db.server';
import { Worry } from '~/utils/types';

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await oAuthStrategy.checkSession(request);
  let worry_id = params.worry_id;
  let user_id;
  if (session) {
    user_id = session.user?.id;
  }

  let worry;
  if (worry_id) {
    worry = await db.posts.findUnique({
      where: {
        id: +worry_id,
      },
      include: {
        author: {
          select: {
            user_name: true,
          },
        },
        comments: {
          orderBy: {
            created_at: 'desc',
          },
          include: {
            author: {
              select: {
                user_name: true,
                avatar_url: true,
              },
            },
          },
        },
      },
    });
  }
  if (!worry) {
    return redirect('/');
  }
  return { worry, user_id };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const worryId = formData.get('worryId');
  const userId = formData.get('userId');
  const comment = formData.get('comment');
  if (!comment || !worryId || !userId) {
    return null;
  } else {
    await db.comments.create({
      data: {
        comment: comment.toString(),
        authorId: userId.toString(),
        postId: +worryId,
      },
    });
  }
  return null;
};

function getDate(date: Date) {
  const created = new Date(date);
  const day = created.getDate();
  const month = created.getMonth();
  const year = created.getFullYear();
  return month + 1 + '/' + day + '/' + year;
}

function WorryId() {
  const { worry, user_id }: { worry: Worry; user_id: string } = useLoaderData();
  const transition = useTransition();
  let isAdding = transition.state === 'submitting' && true;
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!isAdding) {
      formRef.current?.reset();
    }
  }, [isAdding]);

  return (
    <div className="w-full">
      <div className="my-10 w-[95%] sm:w-[85%] md:w-[75%] mx-auto p-3 border-gray-500">
        <div className="flex flex-col space-y-1">
          <p className="text-sm">{worry.post}</p>
          <div className="flex space-x-2 text-xs text-gray-400">
            {worry.is_anon ? <p>Anonym</p> : <p>{worry.author?.user_name}</p>}
            <div className="border-r border-gray-500" />
            <p>{getDate(worry.created_at)}</p>
          </div>
        </div>
        <div className="mt-3 border-b border-gray-500" />
        {user_id && (
          <Form method="post" className="flex flex-col mt-5 space-y-2" ref={formRef}>
            <input type="hidden" name="worryId" value={worry.id} />
            <input type="hidden" name="userId" value={user_id} />
            <textarea
              className="textarea textarea-bordered w-full sm:w-[75%] md:w-[50%]"
              placeholder="Comment"
              name="comment"
            />
            <button disabled={isAdding} type="submit" className="btn btn-sm w-[200px]">
              {isAdding ? 'Saving...' : 'Comment'}
            </button>
          </Form>
        )}
        <div className="flex flex-col my-5 space-y-4">
          {worry.comments?.map((item) => (
            <div key={item.id} className="flex space-x-3">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={item.author?.avatar_url} />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-sm">{item.comment}</p>
                <div className="flex space-x-2 text-xs text-gray-400">
                  <p className="">{item.author?.user_name}</p>
                  <div className="border-r border-gray-500" />
                  <p className="">{getDate(item.created_at)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorryId;

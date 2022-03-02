import {
  ActionFunction,
  Form,
  Link,
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from 'remix';
import type { MetaFunction } from 'remix';
import { authenticator, oAuthStrategy } from '~/auth.server';
import styles from './tailwind.css';
import { db } from './utils/db.server';
import { RiAddLine } from 'react-icons/ri';

export const loader: LoaderFunction = async ({ request }) => {
  const session = await oAuthStrategy.checkSession(request);
  let user;
  if (session) {
    user = await db.profiles.findUnique({
      where: {
        id: session.user?.id,
      },
    });
  }
  return {
    env: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      PUBLIC_SUPABASE_ANON_KEY: process.env.PUBLIC_SUPABASE_ANON_KEY,
    },
    session,
    user,
  };
};

export const action: ActionFunction = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: '/' });
};

export const meta: MetaFunction = () => {
  return { title: 'WorryIfy' };
};

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <h1>Caught</h1>
      <p>Status: {caught.status}</p>
      <pre>
        <code>{JSON.stringify(caught.data, null, 2)}</code>
      </pre>
    </div>
  );
}
export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
}

export default function App() {
  return (
    <Document title="WorryIfy">
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children, title }: { children: React.ReactNode; title?: string }) {
  const { env } = useLoaderData<Window>();

  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(env)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function Layout({ children }: React.PropsWithChildren<{}>) {
  const { session, user } = useLoaderData();
  return (
    <div className="flex flex-col justify-between h-screen">
      <header className="mb-10 shadow-xl navbar bg-base-100 rounded-box">
        <div className=" navbar-start"></div>
        <div className=" navbar-center">
          <Link to="/">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-xl px-[2px] bg-white text-gray-700 font-semibold select-none">WI</span>
              <p className="text-xl font-bold select-none">WorryIfy</p>
            </div>
          </Link>
        </div>
        <div className="navbar-end">
          {session ? (
            <div className="flex items-center space-x-2">
              <Link to="/add" className="btn btn-circle btn-sm">
                <RiAddLine className="w-8 h-8 fill-current" />
              </Link>

              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.avatar_url} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="p-2 mt-3 shadow-xl menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>

                  <li>
                    <Link to="/my-worries?page=1">My worries</Link>
                  </li>
                  <div className="pt-1 border-b border-gray-500 " />
                  <li className="mt-1">
                    <Form method="post">
                      <button>Logout</button>
                    </Form>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <div className="btn btn-outline btn-sm">Login</div>
            </Link>
          )}
        </div>
      </header>
      <main className="flex-grow">
        <div className="">{children}</div>
      </main>
      <footer className="items-center p-4 footer bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

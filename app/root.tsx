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
import { RiAddLine, RiCloseLine } from 'react-icons/ri';

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
    <div className="">
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
            <div className="flex space-x-2 items-center">
              <Link to="/add" className="btn btn-circle btn-sm">
                <RiAddLine className="h-8 w-8 fill-current" />
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
                    <a>Settings</a>
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
      <main className="">
        <div className="">{children}</div>
      </main>
      <footer className="">
        <div className=""></div>
      </footer>
    </div>
  );
}

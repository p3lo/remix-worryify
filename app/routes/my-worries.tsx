import { LoaderFunction, Outlet, redirect } from 'remix';
import { oAuthStrategy } from '~/auth.server';

export const loader: LoaderFunction = async ({ request }) => {
  await oAuthStrategy.checkSession(request, {
    failureRedirect: '/login',
  });
  return {};
};

const MW = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MW;

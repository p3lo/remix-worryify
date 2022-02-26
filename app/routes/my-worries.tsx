import { LoaderFunction, Outlet, redirect } from 'remix';
import { oAuthStrategy } from '~/auth.server';

export const loader: LoaderFunction = async ({ request, params }) => {
  await oAuthStrategy.checkSession(request, {
    failureRedirect: '/login',
  });
  if (!params.worries_page) {
    return redirect('/my-worries/1');
  } else return {};
};

const MW = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MW;

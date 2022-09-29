import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option routing
const Login = Loadable(lazy(() => import('views/auth/login/Login')));
const Register = Loadable(lazy(() => import('views/auth/register/Register')));
const ForgotPassword = Loadable(lazy(() => import('views/auth/forgot-password/ForgotPassword')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    { path: '/', element: <Login /> },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    }
  ]
};

export default AuthenticationRoutes;

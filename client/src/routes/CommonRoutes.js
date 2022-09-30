import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const FAQ = Loadable(lazy(() => import('views/common/FAQ')));

const CommonRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/faq',
      element: <FAQ />
    }
  ]
};

export default CommonRoutes;

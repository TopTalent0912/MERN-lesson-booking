import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const StudentDashboard = Loadable(lazy(() => import('views/student/Dashbord')));
const StudentProfile = Loadable(lazy(() => import('views/student/Profile')));
const StudentSchedule = Loadable(lazy(() => import('views/student/Schedule')));
const StudentBooking = Loadable(lazy(() => import('views/student/Booking')));
// const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const StudentRoutes = {
  path: '/student',
  element: <MainLayout />,
  children: [
    {
      path: '/student/dashboard',
      element: <StudentDashboard />
    },
    {
      path: '/student/profile',
      element: <StudentProfile />
    },
    {
      path: '/student/schedule',
      element: <StudentSchedule />
    },
    {
      path: '/student/booking',
      element: <StudentBooking />
    }
  ]
};
// const MainRoutes = {
//     path: '/',
//     element: <MainLayout />,
//     children: [
//         {
//             path: '/',
//             element: <DashboardDefault />
//         },
//         {
//             path: 'dashboard',
//             children: [
//                 {
//                     path: 'default',
//                     element: <DashboardDefault />
//                 }
//             ]
//         },
//         {
//             path: 'utils',
//             children: [
//                 {
//                     path: 'util-typography',
//                     element: <UtilsTypography />
//                 }
//             ]
//         },
//         {
//             path: 'utils',
//             children: [
//                 {
//                     path: 'util-color',
//                     element: <UtilsColor />
//                 }
//             ]
//         },
//         {
//             path: 'utils',
//             children: [
//                 {
//                     path: 'util-shadow',
//                     element: <UtilsShadow />
//                 }
//             ]
//         },
//         {
//             path: 'icons',
//             children: [
//                 {
//                     path: 'tabler-icons',
//                     element: <UtilsTablerIcons />
//                 }
//             ]
//         },
//         {
//             path: 'icons',
//             children: [
//                 {
//                     path: 'material-icons',
//                     element: <UtilsMaterialIcons />
//                 }
//             ]
//         },
//         {
//             path: 'sample-page',
//             element: <SamplePage />
//         }
//     ]
// };

export default StudentRoutes;

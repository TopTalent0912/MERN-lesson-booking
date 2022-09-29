import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing

// utilities routing

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/sample',
            element: <SamplePage />
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

export default MainRoutes;

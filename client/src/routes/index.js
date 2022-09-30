import { useRoutes } from 'react-router-dom';

// routes
import StudentRoutes from './StudentRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import CommonRoutes from './CommonRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([AuthenticationRoutes, CommonRoutes, StudentRoutes]);
}

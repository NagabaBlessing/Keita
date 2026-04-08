import { createBrowserRouter } from 'react-router';
import { PublicLayout } from './layouts/PublicLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { ServiceApplication } from './pages/ServiceApplication';
import { ServiceHistory } from './pages/ServiceHistory';
import { Profile } from './pages/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: PublicLayout,
    children: [
      { index: true, Component: Home },
      { path: 'login', Component: Login },
      { path: 'signup', Component: Signup },
    ],
  },
  {
    path: '/dashboard',
    Component: DashboardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: 'apply', Component: ServiceApplication },
      { path: 'history', Component: ServiceHistory },
      { path: 'profile', Component: Profile },
    ],
  },
]);

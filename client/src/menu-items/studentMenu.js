//icon
import {
  IconDashboard,
  IconUserCircle,
  IconLogout,
  IconCalendarEvent,
  IconSettings,
  IconSubscript,
  IconHelp,
  IconScript
} from '@tabler/icons';

// ==============================|| MENU ITEMS ||============================== //

const studentMenuItems = {
  items: [
    {
      id: 'stu-dashboard',
      type: 'group',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/student/dashboard',
          icon: IconDashboard,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'stu-profile',
      type: 'group',
      children: [
        {
          id: 'profile',
          title: 'My Profile',
          type: 'item',
          url: '/student/profile',
          icon: IconUserCircle,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'stu-schedule',
      type: 'group',
      children: [
        {
          id: 'schedule',
          title: 'My Schedule',
          type: 'item',
          url: '/student/schedule',
          icon: IconCalendarEvent,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'stu-booking',
      type: 'group',
      children: [
        {
          id: 'booking',
          title: 'Book Class',
          type: 'item',
          url: '/student/booking',
          icon: IconScript,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'stu-alert',
      type: 'group',
      children: [
        {
          id: 'alert',
          title: 'Alert Settings',
          type: 'item',
          url: '/student/settings',
          icon: IconSettings,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'stu-transactions',
      type: 'group',
      children: [
        {
          id: 'transaction',
          title: 'Subscriptions & Transactions',
          type: 'item',
          url: '/student/transaction',
          icon: IconSubscript,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'stu-faq',
      type: 'group',
      children: [
        {
          id: 'faq',
          title: 'FAQ',
          type: 'item',
          url: '/faq',
          icon: IconHelp,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'stu-logout',
      type: 'group',
      children: [
        {
          id: 'logout',
          title: 'Logout',
          type: 'item',
          url: '/logout',
          icon: IconLogout,
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default studentMenuItems;

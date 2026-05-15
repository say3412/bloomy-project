import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'vision', title: 'Vision', href: paths.dashboard.vision, icon: 'vision' },
  { key: 'myday', title: 'My Day', href: paths.dashboard.myday, icon: 'check' },
  { key: 'calendar', title: 'Calendar', href: paths.dashboard.calendar, icon: 'calendar' },
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'Customers', href: paths.dashboard.customers, icon: 'users' },
  { key: 'integrations', title: 'Integrations', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];

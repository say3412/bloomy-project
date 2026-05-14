export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    vision: '/dashboard/vision',
    myday: '/dashboard/myday',
    calendar: '/dashboard/calendar',
    // overview: '/dashboard/overview',
    // account: '/dashboard/account',
    // customers: '/dashboard/customers',
    // integrations: '/dashboard/integrations',
    // settings: '/dashboard/settings',
  },
  errors: { notFound: '/errors/not-found' },
} as const;

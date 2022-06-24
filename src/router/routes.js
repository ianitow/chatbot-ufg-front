const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Home', path: '', component: () => import('pages/Index.vue') },
      {
        path: '',
        name: 'PersonalInfo',
        component: () => import('pages/PersonalInfo.vue'),
      },
      {
        path: '/terms',
        name: 'TermPrivacy',
        component: () => import('pages/TermPrivacy.vue'),
      },

      {
        path: '/chat',
        name: 'Chat',
        component: () => import('pages/Chat.vue'),
      },
      {
        path: '/report',
        name: 'Report',
        component: () => import('pages/Report.vue'),
      },
      {
        path: '/rating',
        name: 'Rating',
        component: () => import('pages/Rating.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;

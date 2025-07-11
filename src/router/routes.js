const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'product', component: () => import('src/pages/ProductPage.vue') },
    ],
  },
  {
    path: '/login',
    component: () => import('src/components/auth/LoginForm.vue'),
  },
  {
    path: '/register',
    component: () => import('src/components/auth/RegisterForm.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes

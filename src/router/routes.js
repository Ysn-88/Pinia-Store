
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/',name: 'home', component: () => import('pages/HomePage.vue') },
      { path: '/tasks',name: 'tasks', component: () => import('pages/IndexPage.vue') },
      { path: '/shop',name: 'shop', component: () => import('components/ShopComponent.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

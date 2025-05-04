

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',component: () => import('src/pages/IndexPage.vue') },

       { path: 'friends',
        component: () => import('pages/FriendsPage.vue')
      },
       { path: ':friendsListId/friends',
        props:true,
        component: () => import('pages/FriendsPage.vue')
      }
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

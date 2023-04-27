import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/AboutView.vue')
    },
    {
        path: '/posts',
        name: 'Posts',
        component: () => import('./views/PostsView.vue')
      },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: () => import('./views/LoginView.vue')
    // },
    // {
    //   path: '/register',
    //   name: 'Register',
    //   component: () => import('./views/RegisterView.vue'),
    // },
    { 
      path: "/:pathMatch(.*)*", 
      name: 'NotFound',
      component: () => import('./views/NotFound.vue') 
    }
  ]
})
import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        requiresAuth: true,
    },
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue'),
      meta: {
        requiresAuth: true,
    },
    },
    {
        path: '/posts',
        name: 'Posts',
        component: () => import('../views/PostsView.vue'),
        meta: {
          requiresAuth: true,
      },
    },
    {
      path: '/add-post',
      name: 'AddPost',
      component: () => import('../views/AddPostView.vue'),
      meta: {
        requiresAuth: true,
    },
  },
    {
      path: '/account',
      name: 'Account',
      component: () => import('../views/ProfileView.vue'),
      meta: {
        requiresAuth: true,
    },
    },
    {
      path: '/edit',
      name: 'Edit',
      component: () => import('../views/EditProfileView.vue'),
      meta: {
        requiresAuth: true,
    },
    },
    {
      path: '/',
      name: 'Hello',
      component: () => import('../views/HelloView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue')
    },
    { 
      path: "/:pathMatch(.*)*", 
      name: 'NotFound',
      component: () => import('../views/NotFound.vue') 
    }
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
      const removeListener = onAuthStateChanged(
          getAuth(),
          (user) => {
              removeListener();
              resolve(user);
          },
          reject
      );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (await getCurrentUser()) {
          next();
      } else {
          alert("You must be logged in!")
          router.push('/')
      } 
  } else {
      next();
  }
});

export default router;
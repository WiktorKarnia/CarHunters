import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth"

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
      path: '/admin',
      name: 'Admin',
      component: () => import('../views/AdminView.vue'),
      meta: {
        requiresAuth: true,
    },
    },
    {
      path: '/deleted',
      name: 'Deleted',
      component: () => import('../views/DeletedView.vue'),
      meta: {
        requiresAuth: true,
    },
    },
    {
      path: '/liked',
      name: 'Liked',
      component: () => import('../views/LikedView.vue'),
      meta: {
        requiresAuth: true,
    }
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('../views/SearchView.vue'),
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
      path: '/hello',
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
  const user = await getCurrentUser();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (user) {
      next();
    } else {
      alert("You must be logged in!")
      router.push('/hello')
    }
  } else {
    if (user) {
      router.push('/posts');
    } else {
      next();
    }
  }
});

export default router;
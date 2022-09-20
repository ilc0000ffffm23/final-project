import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Calc from '../views/Calc.vue'
import AboutApp from '../views/AboutApp.vue'
import Quiz from '../views/Quiz.vue'
import Signin from '../views/Signin.vue' 
import Register from '../views/Register.vue' 
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/calc',
      name: 'calc',
      component: Calc,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/aboutapp',
      name: 'aboutapp',
      component: AboutApp
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
  ]
})

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
      alert("You must sign-in first!");
      next("/signin");
    }
  } else {
    next();
  }
  
});

export default router

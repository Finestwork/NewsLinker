import { createRouter, createWebHistory } from 'vue-router';
import Home from '../page/Home/Home.vue';
import Category from '../page/Category/Category.vue';
import RateLimitError from '@/page/Errors/RateLimitError.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: Category
    },
    {
      path: '/error/rate-limit-exceeded',
      name: 'RateLimitError',
      component: RateLimitError
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      beforeEnter(to, from, next){
        next({name: 'Home'});
      }
    }
  ]
});

export default router;

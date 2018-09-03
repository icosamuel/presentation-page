import Vue from 'vue';
import Router from 'vue-router';
import presentation from '@/components/presentation';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: presentation,
    },
  ],
});

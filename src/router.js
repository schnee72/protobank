import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import Accounts from './pages/Accounts.vue';
import Tools from './pages/Tools.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';
import Login from './pages/Login.vue';
import NotFound from './pages/NotFound.vue';
import store from './store.js';

Vue.use(Router);

const requireAuth = (to, from, next) => {
  if (!store.state.isAuthenticated)
    next('login');
  else
    next();
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: requireAuth
    },
    {
      path: '/accounts',
      name: 'Accounts',
      component: Accounts,
      beforeEnter: requireAuth
    },
    {
      path: '/tools',
      name: 'Tools',
      component: Tools,
      beforeEnter: requireAuth
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      beforeEnter: requireAuth
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});

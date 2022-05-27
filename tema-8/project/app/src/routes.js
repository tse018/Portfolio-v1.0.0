import Home from './views/Home.vue';
import PageNotFound from './views/PageNotFound.vue';

export default [
      { path: '/home', redirect: { name: 'home' }, component: Home },
      { name: 'home',          path: '/:section?',         component:  Home },
      { name: 'pagenotfound',  path: '/:pathMatch(.*)*',   component: PageNotFound },
]
import Home from './views/Home.vue';
import PageNotFound from './views/PageNotFound.vue';

export default [
      { name: 'home',          path: '/:section?',         component:  Home },
      // this pagenotfound is not doing anything because I have optional route path, but however let it stay
      { name: 'pagenotfound',  path: '/:pathMatch(.*)*',   component: PageNotFound },
]
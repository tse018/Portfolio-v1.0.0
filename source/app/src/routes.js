import Home from './views/Home.vue';
//import PageNotFound from './views/PageNotFound.vue';

export default [
      //{ path: '/*' , redirect: '/'},
      { name: "home",          path: "/",         component:  Home },
      //{ name: "pagenotfound",  path: "/:pathMatch(.*)",    component: PageNotFound },
]
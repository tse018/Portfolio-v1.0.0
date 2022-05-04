import Home from './views/Home.vue';
import TestPage from './views/TestPage.vue';

export default [
      { name: 'testpage',          path: '/test/:test',         component:  TestPage },
      { name: 'home',          path: '/:id?',         component:  Home },
]
<template>
   <header class="header-container">
      <nav class="header-container__navbar">
         <ul class="header-container__navbar-elements">
            <li class="header-container__navbar-element--mobile">
               <MobileMenu />
            </li>

            <li class="header-container__navbar-element">
               <a class="header-container__navbar-link">
                  <RouterLink class="header-container__navbar-link" :to="{ name: 'home', params: {section: 'home' } }">
                     Home
                  </RouterLink>
               </a>

               <a v-for="(data, index) in navbar"  class="header-container__navbar-link" @click="scrollTo(data.id)" :key="data.id">
                  <RouterLink class="header-container__navbar-link" :to="{ name: 'home', params: { section: data.id } }">
                     {{ data.section }}
                  </RouterLink>
               </a>
            </li>
         </ul>
      </nav>
   </header>
</template>

<script>
import MobileMenu from "../components/MobileMenu.vue";

import scrollToSectionMixins from '../mixins/scrollToSectionsMixins.js';

export default {
   mixins: [scrollToSectionMixins],

   components: {
      MobileMenu,
   },
};
</script>

<style scoped>
/* Mobile */
@media screen and (max-width: 1200px) {
   .header-container {
      position: fixed;
      width: 100%;
      z-index: 100;
   }

   .header-container__navbar-element--mobile {
      display: flex;
      justify-content: end;
      margin: -30px 10px 0 0;
   }

   .header-container__navbar-element {
      display: none;
   }
}

/* desktop */
@media screen and (min-width: 1200px) {
   .header-container {
      position: fixed;
      width: 100%;
      height: 100px;
      background-color: var(--background-header);
      opacity: 0.5;
      z-index: 100;
   }

   .header-container__navbar-elements {
      display: flex;
      justify-content: center;
   }

   .header-container__navbar-element {
      display: flex;
      padding: 20px;
   }

   .header-container__navbar-element--mobile {
      display: none;
   }

   .header-container__navbar-link {
      color: var(--font-color-highligth);
      padding: 20px;
      cursor: pointer;
   }

   /* highligthing the active routerlink button */
   .router-link-active {
      text-decoration: 5px underline var(--font-color-highligth);
   }
}
</style>

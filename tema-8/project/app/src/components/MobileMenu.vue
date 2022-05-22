<template>
   <button class="mobile-toggle" @click="displayMenu">
      <Icons v-if="!showNavbar" :icon="'menuOpen'" />
      <Icons v-else :icon="'menuClose'" />
   </button>

   <nav class="mobile-toggle__container" v-if="showNavbar">
      <ul class="mobile-toggle__container-elements">
         <li v-for="(data, index) in navbar" class="mobile-toggle-__navbar-elements">
            <a class="mobile-toggle__navbar-link" @click="scrollTo(data.id)" :key="data.id">
               <RouterLink class="header-container__navbar-link" :to="{ name: 'home', params: { id: data.id } }">
                  {{ data.section }}
               </RouterLink>
            </a>
         </li>
      </ul>
   </nav>
</template>

<script>
import Icons from "../components/Icons.vue";

import scrollToSectionsMixins from '../mixins/scrollToSectionsMixins.js';

export default {
   mixins: [scrollToSectionsMixins], 
   
   components: {
      Icons,
   },

   data() {
      return {
         showNavbar: false,
      };
   },

   methods: {
      displayMenu() {
         this.showNavbar = !this.showNavbar;
      },
   },
};
</script>

<style scoped>
@media screen and (max-width: 980px) {
   .mobile-toggle {
      z-index: 100;
   }

   .mobile-toggle__container {
      position: absolute;
      width: 70%;
      height: 100vh;
      top: 0;
      right: 0;
      margin-top: -50px;
      background-color: blue;
   }

   .mobile-toggle__container-elements {
      width: 100%;
      height: 100%;
      z-index: 100;
      text-align: center;
      padding: 10px 0 0 0;
   }

   .mobile-toggle__container-element {
      margin-top: 50px;
   }
}

@media screen and (min-width: 981px) {
   .mobile-toggle {
      z-index: 100;
      margin: 20px 20px 0 0;
   }

   .mobile-toggle__container {
      position: absolute;
      width: 70%;
      height: 95vh;
      top: 0;
      right: 0;
      background-color: transparent;
   }

   .mobile-toggle__container-elements {
      width: 100%;
      height: 100%;
      z-index: 100;
      text-align: center;
      padding: 10px 0 0 0;
   }

   .mobile-toggle__container-element {
      margin-top: 50px;
   }
}
</style>

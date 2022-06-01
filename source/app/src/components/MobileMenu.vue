<template>
   <button class="mobile-toggle" @click="displayMenu">
      <Icons v-if="!showNavbar" :icon="'menuOpen'" />
      <Icons v-else :icon="'menuClose'" />
   </button>

   <nav class="mobile-toggle__container" v-if="showNavbar">
      <ul class="mobile-toggle__elements">
         <li v-for="(data, index) in navbar" class="mobile-toggle__element">
            <a class="mobile-toggle__navbar" @click="scrollTo(data.path)" :key="data.id">
               <RouterLink class="mobile-toggle__link" :to="{ name: 'home', params: { id: data.path } }" @click="displayMenu">
                  {{ data.id }}
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
.mobile-toggle {
   position: fixed;
   z-index: 1000;
}

.mobile-toggle__container {
   position: absolute;
   background: white;
   width: 50%;
   height: 100%;
   z-index: 100;
}

.mobile-toggle__elements {
   padding: 20px;
   width: 200px;
}

.mobile-toggle__element {
   padding: 5px;
}

.mobile-toggle__navbar {
   padding: 20px;
   width: 200px;
   display: flex;
   justify-content: center;
}

.mobile-toggle__link {
   width: 200px;
   text-align: center;
   text-decoration: underline 2px ;
   color: var(--font-color-effect);
}



</style>

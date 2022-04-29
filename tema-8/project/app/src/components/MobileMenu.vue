<template>
   <button class="mobile-toggle" @click="displayMenu">
      <Icons v-if="!showNavbar" :icon="'menuOpen'" />
      <Icons v-else :icon="'menuClose'" />
   </button>

   <nav class="mobile-toggle__container" v-if="showNavbar">
      <ul class="mobile-toggle__container-elements">
         <li class="mobile-toggle__container-element">
            About
         </li>

         <li class="mobile-toggle__container-element">
            Education
         </li>

         <li class="mobile-toggle__container-element">
            Projects
         </li>

         <li class="mobile-toggle__container-element">
            Contact
         </li>

         <li class="mobile-toggle__container-element">
            Resume
         </li>
      </ul>
   </nav>
</template>

<script>
import Icons from "../components/Icons.vue";

export default {
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

<style>
</style>

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

<style scoped>
@media screen and (max-width: 600px) {
   .mobile-toggle {
      z-index: 100;
   }

   .mobile-toggle__container{
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

@media screen and (min-width: 601px) {
   .mobile-toggle {
      z-index: 100;
      margin: 20px 20px 0 0;
   }

   .mobile-toggle__container{
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

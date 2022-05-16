<template>
   <header class="header-container">
      <nav class="header-container__navbar">
         <ul class="header-container__navbar-elements">
            <RouterLink :to="{ name: 'home' }" class="header-container__navbar--logo">
               <img src="/images/favicon-32x32.png" alt="page logo" class="header-container__logo-image" />
            </RouterLink>

            <li class="header-container__navbar-element--mobile">
               <MobileMenu />
            </li>

            <li class="header-container__navbar-element">
               <a class="header-container__navbar-link" @click="scrollIt('home')">
                  Home
               </a>
            </li>

            <li class="header-container__navbar-element">
               <a class="header-container__navbar-link" @click="scrollIt('about')">
                  About
               </a>
            </li>

            <li class="header-container__navbar-element">
               <a class="header-container__navbar-link" @click="scrollIt('education')">
                  Education
               </a>
            </li>

            <li class="header-container__navbar-element">
               <a class="header-container__navbar-link" @click="scrollIt('tech')">
                  Tech
               </a>
            </li>

            <li class="header-container__navbar-element">
               <a class="header-container__navbar-link" @click="scrollIt('projects')">
                  Projects
               </a>
            </li>

            <li class="header-container__navbar-element">
               <a class="header-container__navbar-link" @click="scrollIt('contact')">
                  Contact
               </a>
            </li>
         </ul>
      </nav>
   </header>
</template>

<script>
import MobileMenu from "../components/MobileMenu.vue";

import sectionParamsMixin from '../mixins/sectionParamsMixin.js';

export default {
   mixins: [sectionParamsMixin],

   data() {
      return {
         path: '/',
      }
   },

   components: {
      MobileMenu,
   },

   methods: {
      scrollIt(routet) {
         const element = document.getElementById(routet);
         element.scrollIntoView({ behavior: "smooth" });
         window.location.element(`#${routet}`);

         this.$router.push(this.path + routet);
         console.log(this.$router.params.id)
      },
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

   .header-container__logo-image {
      margin: 0 0 0 10px;
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
@media screen and (min-width: 1201px ) {
   .header-container {
      position: fixed;
      width: 100%;
      height: 100px;
      background-color: var(--background-header);
      opacity: 0.5;
      z-index: 100;
   }

   .header-container__navbar--logo {
      position: absolute;
      left: 0;
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
}
</style>

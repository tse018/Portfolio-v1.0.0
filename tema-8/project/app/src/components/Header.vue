<template>
   <header class="header-container">
      <nav class="header-container__navbar">
         <ul class="header-container__navbar-elements">
            <li class="header-container__navbar-element--mobile">
               <MobileMenu />
            </li>

            <li v-for="data in navbar" class="header-container__navbar-element">
               <a class="header-container__navbar-link" @click="scrollTo(data.id)">
                  <RouterLink class="header-container__navbar-link" :to="{ name: 'home', params: {id: data.id} }">
                     {{ data.section}}
                  </RouterLink>
               </a>
            </li>
         </ul>
      </nav>
   </header>
</template>

<script>
import MobileMenu from "../components/MobileMenu.vue";

export default {
   data() {
      return {
         navbar: [
            {
               id: '',
               section: 'HOME',
            },
            {
               id: 'about',
               section: 'ABOUT',
            },
            {
               id: 'education',
               section: 'EDUCATION',
            },
            {
               id: 'tech',
               section: 'TECH',
            },
            {
               id: 'projects',
               section: 'PROJECTS',
            },
            {
               id: 'contact',
               section: 'CONTACT',
            },
         ]
      };
   },

   components: {
      MobileMenu,
   },

   methods: {
      scrollTo(anchor) {
         const element = document.getElementById(anchor);
         // scrollIntoView works only for google chrome, not safari
         element.scrollIntoView({ behavior: "smooth" });
         window.location.element(`#${anchor}`);
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
@media screen and (min-width: 1201px) {
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
}
</style>

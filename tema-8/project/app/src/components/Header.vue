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
               About
            </li>

            <li class="header-container__navbar-element">
               Education
            </li>

            <li class="header-container__navbar-element">
               Projects
            </li>

            <li class="header-container__navbar-element">
               Contact
            </li>

            <li class="header-container__navbar-element">
               Resume
            </li>
         </ul>
      </nav>
   </header>
</template>

<script>
import MobileMenu from "../components/MobileMenu.vue";

export default {
   components: {
      MobileMenu,
   },
};
</script>

<style scoped>
/* Mobile */
@media screen and (max-width: 600px) {
   .header-container {
      position: fixed;
      width: 100%;
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

@media screen and (min-width: 601px) {
   .header-container {
      position: fixed;
      width: 100%;
   }

   .header-container__logo-image {
      margin: 25px 0 0 20px;
   }

   .header-container__navbar-element--mobile {
      display: flex;
      justify-content: end;
      margin: -50px 10px 0 0;
   }

   .header-container__navbar-element {
      display: none;
   }
}

@media screen and (min-width: 1200px ) {
   .header-container__navbar-elements {
      border: 2px solid red;
      display: flex;
      justify-content: space-between;
      width: 100vw;
   }

   .header-container__navbar-element {
      display: flex;
      padding: 20px;
   }


   .header-container__navbar-element--mobile {
      display: none;
   }
}
</style>

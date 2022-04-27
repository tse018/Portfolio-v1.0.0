<template>
   <header class="header-container">
      <section class="header-container__logo">
         <RouterLink :to="{name: 'home'}">
            <img src="/images/favicon-32x32.png" alt="page logo"/>
         </RouterLink>
      </section>

      <nav class="header-container__desktop">
         <ul class="header-container__desktop-elements">
            <li class="header-container__desktop-element">
               About 
            </li>

            <li class="header-container__desktop-element">
               Education
            </li>

            <li class="header-container__desktop-element">
               Projects
            </li>

            <li class="header-container__desktop-element">
               Contact
            </li>
      
            <li class="header-container__desktop-element">
               Resume
            </li>
         </ul>
      </nav>

      <nav class="header__container-mobile">
         <MobileMenu :icon="'menuOpen'" />
      </nav>
   </header>
</template>

<script>
import MobileMenu from '../components/MobileMenu.vue';

export default {
   components: {
      MobileMenu,
   }
}
</script>

<style>
.header-container {
   position: relative;
   
   height: 50px;
}

.header-container__desktop-elements {
   display: flex;
   padding: 0 15px 0 15px;
}

@media screen and (max-width: 600px) {
   .header__container-mobile {
      display: block;
   }

   .header-container__desktop {
      display: none;
   }
}

@media screen and (min-width: 601px) {
   .header__container-mobile {
      display: block;
   }

   .header-container__desktop {
      display: none;
   }
}

@media screen and (min-width: 1200px) {
   .header__container-mobile {
      display: none;
   }

   .header-container__desktop {
      display: block;
   }
}
</style>


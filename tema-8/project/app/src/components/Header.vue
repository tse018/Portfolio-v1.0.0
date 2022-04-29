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
   </header>

   <aside class="header__container-mobile">
      <MobileMenu />
   </aside>
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
   border: 2px solid red;
   position: fixed;
   height: 110px;
   width: 100%;
   padding: 20px;
   z-index: 100;
}

.header-container__desktop-elements {
   display: flex;
   width: 100%;
   border: 2px soild red;
   margin: -35px 0 0 30px;
}

.header-container__desktop-element {
   display: flex;
   flex-wrap: wrap;
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


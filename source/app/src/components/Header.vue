<template>
   <header class="header-container" ref="header">
      <nav class="header-container__navbar">
         <ul class="header-container__navbar-elements">
            <li class="header-container__navbar-element--mobile">
               <MobileMenu />
            </li>
            
            <li v-for="(data, index) in navbar" class="header-container__navbar-element">
               <a class="header-container__navbar-link" @click="scrollTo(data.path)" :key="data.id">
                  <RouterLink class="header-container__navbar-link" :to="{ name: 'home', params: { section: data.path } }">
                     {{ data.id }}
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
   
   mounted() {
      this.sleep(3000).then(() => {
         this.$refs["header"].style.display = "block";
      }, 3000);
   },

   watch: {
      $route() {
         // this fixes the bug with when scroll to path: "/",
         // users could click on same button twice and it would go back to front-page
         // with this watch, prevents from doing that and redirect to fullPath /, instead of  showing /home fullPath
         if(this.$route.fullPath === '/home') {
            this.$router.push({ name: 'home'})
         }
      },
   },

   methods: {
      sleep(ms) {
         return new Promise((resolve) => setTimeout(resolve, ms));
      },
   },
};
</script>

<style scoped>
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

@media screen and (min-width: 1200px) {
   .header-container {
      position: fixed;
      width: 100%;
      height: 100px;
      background-color: #141E30;
      opacity: 0.5;
      z-index: 100;
      /* during animation this header will not show */
      display: none;
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

   .header-container__navbar-link:hover {
      text-decoration: 5px underline var(--font-color-highligth);
   }

   .header-container__navbar--0 {
      text-decoration: 5px underline var(--font-color-highligth);
   }

   .router-link-active {
      text-decoration: 5px underline var(--font-color-highligth);
   }

   .active {
      text-decoration: 5px underline var(--font-color-highligth);
   }
}
</style>
<template>
   <Loader v-if="loading" />
   
   <div v-else>
<!--
      <div ref="intro">
         <div class="container">
            <h1 class="hi">
               WELCOME
            </h1>
         </div>
      </div>
-->
      <main class="main-container" ref="main-container" @mousewheel="horizontalScrolling">
         <section class="main-container__section">
            <div id="home">
               <LandingPage />
            </div>
         </section>

         <section class="main-container__section">
            <div id="about">
               <About />
            </div>
         </section>

         <section class="main-container__section">
            <div id="education">
               <Education />
            </div>
         </section>

         <section class="main-container__section">
            <div id="tech">
            
            </div>
         </section>

         <section class="main-container__section">
            <div id="projects">
          
            </div>
         </section>

         <section class="main-container__section">
            <div id="contact">
       
            </div>
         </section>
      </main>
   </div>
</template>

<script>
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Education from "../components/Education.vue";
import LandingPage from "../components/landingPage.vue";
import Projects from "../components/Projects.vue";
import Icons from "../components/Icons.vue";
import Tech from "../components/TechSection.vue";
import Loader from "../components/Loader.vue";
import Github from "../components/Github.vue";

import sanityMixin from "../mixins/sanityMixin.js";

export default {
   mixins: [sanityMixin],

   components: {
      LandingPage,
      About,
      Education,
      Projects,
      Contact,
      Icons,
      Tech,
      Loader,
      Github,
   },

   async created() {
      this.fetchSanity();
/*
      this.sleep(2000).then(() => {
         this.$refs["intro"].style.display = "none";
      }, 2000);
*/
   },

   computed: {
      horizontalScrolling() {
         const scrollContainer = this.$refs["main-container"];

         if (window.innerWidth > 1200) {
            scrollContainer.addEventListener("wheel", (evt) => {
               evt.preventDefault();
               scrollContainer.scrollLeft += evt.deltaY;
            });
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

<style>
/* Mobile */
@media screen and (max-width: 1200px) {
   .main-container {
      min-width: 100vw;
      min-height: 100vh;
      overflow-x: hidden;
   }

   .main-container__section {
      width: 100%;
      height: 100%;
   }
}

/* Desktop */
@media screen and (min-width: 1200px) {
   .main-container {
      height: 100vh;
      width: 100vw;
      display: flex;
      overflow-y: hidden;
   }

   .main-container__section {
      height: 100%;
      width: 100%;
   }
}
</style>

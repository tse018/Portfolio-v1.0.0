<template>
   <main class="main-container" ref="main">
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
            <Tech />
         </div>
      </section>

      <section class="main-container__section">
         <div id="projects">
            <Projects />
         </div>
      </section>

      <section class="main-container__section">
         <div id="contact">
            <Contact />
         </div>
      </section>
   </main>
</template>

<script>
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Education from "../components/Education.vue";
import LandingPage from "../components/landingPage.vue";
import Projects from "../components/Projects.vue";
import Icons from "../components/Icons.vue";
import Tech from "../components/TechSection.vue";

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
   },

   async created() {
      this.fetchSanity();
   },

   watch: {
      $route() {
         // this fixes the bug with when scroll to path: "/",
         // users could click on header nav buttons and click back and forth
         // this prevents and redirect to fullPath /, instead of  showing /home fullPath
         if(this.$route.fullPath === '/home') {
            this.$router.push({ name: 'home'})
         }
      },
   }
};
</script>

<style>
/* Mobile */
@media screen and (max-width: 600px) {
   .main-container {
      min-height: 100vh;
      min-width: 100vw;
      overflow-x: hidden;
   }

   .main-container__section {
      min-width: 100vw;
      min-height: 100vh;
   }
}

/* Tablet */
@media screen and (min-width: 601px) {
   .main-container {
      height: 100vh;
      width: 100vw;
      overflow-x: hidden;
   }

   .main-container__section {
      width: 100vw;
      height: 100vh;
   }
}

/* Desktop */
@media screen and (min-width: 1200px) {
   .main-container {
      height: 100%;
      width: 600%;
      display: flex;
      overflow-y: hidden;
   }

   .main-container__section {
      height: 100%;
      width: 100%;
      overflow: auto;
   }
}
</style>

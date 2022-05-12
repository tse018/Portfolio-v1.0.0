<template>
   <main class="main-container">
      <section class="main-container__section">
         <div id="#">
            <LandingPage />
         </div>
      </section>

      <section class="main-container__section">
         <div id="about">
            <About />
         </div>
      </section>

      <section class="main-container__section--tech">
         <div id="tech">
            <Tech />
         </div>
      </section>

      <section class="main-container__section">
         <div id="education">
            <Education/>
         </div>
      </section>

      <section class="main-container__section">
         <div id="projects">
            <Projects />
         </div>
      </section>

      <section class="main-container__section">
         <div id="/contact">
            <Contact />
         </div>
      </section>
   </main>
</template>

<script>
import LandingPage from "../components/landingPage.vue";
import About from "../components/About.vue";
import Education from "../components/Education.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";
import Icons from "../components/Icons.vue";
import Tech from '../components/Tech.vue';


import sectionParamsMixin from '../mixins/sectionParamsMixin.js';

export default {
   //mixins: [sectionParamsMixin],

   components: {
      LandingPage,
      About,
      Education,
      Projects,
      Contact,
      Icons,
      Tech,
   },
};
</script>

<style>
/* Mobile */
@media screen and (max-width: 600px) {
   .main-container {
      height: 100vh;
      width: 100vw;
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
   }

   .main-container__section--tech {
      overflow: scroll;
      width: 100%;
      height: 100%;
   }
}
</style>

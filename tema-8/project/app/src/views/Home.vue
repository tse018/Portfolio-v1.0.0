<template>
   <main class="main-container" ref="scroll_container" @mousewheel="scrollX">
      <section class="main-container__section">
         <LandingPage />
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

      <section class="main-container__section--projects">
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
import LandingPage from "../components/landingPage.vue";
import About from "../components/About.vue";
import Education from "../components/Education.vue";
import Projects from "../components/Projects.vue";
import Contact from "../components/Contact.vue";
import Icons from "../components/Icons.vue";

import scrollMixin from '../mixins/scrollTo.js';

export default {
   mixins: [
      scrollMixin
   ],

   components: {
      LandingPage,
      About,
      Education,
      Projects,
      Contact,
      Icons,
   },
};
</script>

<style>
/* Mobile */
@media screen and (max-width: 600px) {
   .main-container {
      height: 100vh;
      width: 100vw;
      overflow-x: scroll;
      scroll-behavior: smooth;
      scroll-snap-type: y mandatory;
   }

   .main-container__section {
      width: 100vw;
      height: 100vh;
      scroll-snap-align: start;
   }
}

/* Tablet */
@media screen and (min-width: 601px) {
   .main-container {
      height: 100vh;
      width: 100vw;
      overflow-x: scroll;
      scroll-behavior: smooth;
      scroll-snap-type: y mandatory;
   }

   .main-container__section {
      width: 100vw;
      height: 100vh;
      scroll-snap-align: start;
   }
}

/* Desktop */
@media screen and (min-width: 1200px) {
   .main-container {
      height: 100%;
      width: 500%;
      display: flex;
      overflow-x: hidden;
      display: flex;
   }

   .main-container__section {
      height: 100vh;
      width: 100vw;
   }

   .main-container__section--projects {
      min-height: 1000px;
      width: 100vw;
      overflow: auto;
   }
}
</style>

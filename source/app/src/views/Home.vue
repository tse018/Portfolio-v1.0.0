<template>
   <div v-if="loading"> Loading... </div>
   
   <div v-else>
      <main class="main-container" ref="main-container" @mousewheel="horizontalScrolling">
         <section ref="main-animation" class="main-container__section">
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
      Github,
   },

   async created() {
      this.fetchSanity();
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
};
</script>

<style>
.main-container__section {
   width: 100%;
   height: 100%;
}

@media screen and (min-width: 1200px) {
   .main-container {
      height: 100vh;
      width: 100vw;
      display: flex;
      overflow-y: hidden;
   }
}

@media screen and (max-width: 1200px) {
   .main-container {
      width: 100vw;
      height: 100vh;
      overflow-x: hidden;
   }
}
</style>
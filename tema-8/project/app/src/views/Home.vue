<template>
   <main
      class="main-container"
      ref="scroll-container"
      @mousewheel="horizontalScrolling"
   >
      <section class="main-container__section">
         <div id="#">
            <LandingPage />
         </div>
      </section>

      <section class="main-container__section--about">
         <div id="about" ref="scroll-item">
            <About />
         </div>
      </section>

      <section class="main-container__section">
         <div id="education" ref="scroll-item">
            <Education />
         </div>
      </section>

      <section class="main-container__section">
         <div id="tech" ref="scroll-item">
            <Tech />
         </div>
      </section>

      <section class="main-container__section">
         <div id="projects" ref="scroll-item">
            <Projects />
         </div>
      </section>

      <section class="main-container__section">
         <div id="contact" ref="scroll-item">
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
import HorizontalScrolling from "../components/HorizontalScrolling.vue";

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
      HorizontalScrolling,
   },

   async created() {
      this.fetchSanity();
   },

   /*
      window.addEventListener("scroll", function (event) {
         let left = this.scrollX;

         if (left > window.innerWidth) {
            alert(this.$router.params.section);
         }
      }); */
   computed: {
      horizontalScrolling() {
         const scrollContainer = this.$refs["scroll-container"];

         if (window.innerWidth > 600) {
            scrollContainer.addEventListener("wheel", (evt) => {
               evt.preventDefault();
               scrollContainer.scrollLeft += evt.deltaY;

               const rect = scrollContainer.getBoundingClientRect();

               rect.left; // (relative to viewport)
               rect.top; // (relative to viewport)
               rect.left + window.scrollX; // (relative to document)
               rect.top + window.scrollY;
               
               console.log(rect.top + window.scrollY);
            })
         }
      },
   },
};
</script>

<style scoped>
/* Desktop */
@media screen and (min-width: 1200px) {
   .main-container {
      max-height: 100vh;
      display: flex;
      overflow-y: hidden;
   }

   .main-container__section {
      height: 100%;
      width: 100%;
   }
}
</style>

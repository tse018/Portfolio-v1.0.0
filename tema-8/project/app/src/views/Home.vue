<template>
   <main class="main-container" ref="scroll-container" @mousewheel="horizontalScrolling">
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

         scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
         }); 
         
/*
         const scrollContainer = this.$refs["scroll-container"];
         const scrollItem = this.$refs["scroll-item"];

         scrollContainer.addEventListener("wheel", (e) => {
            e.preventDefault();
            e.stopPropagation();

            const delta = e.deltaY;

            const maxScrollY = (scrollItem.offsetHeigth = scrollContainer.offsetHeigth);
            const maxScrollX = scrollItem.offsetHeigth - scrollContainer.offsetWidth;

            let scrollY = scrollContainer.scrollTop;
            let scrollX = scrollContainer.scrollLeft;

            if (scrollX > 0) {
               scrollX += delta;

               if (scrollX < 0) {
                  scrollY -= scrollX;
                  scrollX = 0;
               }
            } else {
               scrollY += delta;

               const overflow = scrollY - maxScrollY;
               if (overflow > 0) {
                  scrollX += overflow;
                  scrollY = maxScrollY;
               } else {
                  scrollX = 0;
               }
            }

            scrollContainer.scrollTo(scrollX, scrollY);
         });
*/
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

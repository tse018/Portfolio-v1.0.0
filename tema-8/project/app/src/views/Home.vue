<template>
   <Loader v-if="loading" />
   
   <div v-else>
      <h2 ref="intro">
         <div class="container">
            <div class="hi">
               Welcome!
            </div>
         </div>
      </h2>

      <main style="display: none" class="main-container" ref="main-container" @mousewheel="horizontalScrolling">
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
   },

   async created() {
      this.fetchSanity();

      this.sleep(1000).then(() => {
         this.$refs["main-container"].style.display = "block";
      });
      this.sleep(6000).then(() => {
         this.$refs["intro"].style.display = "none";
      });
   },

   computed: {
      horizontalScrolling() {
         const scrollContainer = this.$refs["main-container"];

         if (window.innerWidth > 600) {
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
@media screen and (max-width: 600px) {
   .main-container {
      width: 100vw;
      height: 100vh;
   }

   .main-container__section {
      min-width: 100vw;
      min-height: 100vh;
   }
}

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

.container {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   overflow: hidden;
}
.hi {
   font-size: 100px;
   color: #3CDBC0;
   animation-duration: 5s;
   animation-name: intro;
   animation-iteration-count: 1;
   animation-timing-function: linear;
}

@keyframes intro {
   from {
      transform: scale(10) rotate(-150deg);
      opacity: 0;
      color: white;
   }

   to {
      transform: scale(1);
      opacity: 1;
   }
}
</style>

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

      this.sleep(2000).then(() => {
         this.$refs["intro"].style.display = "none";
      }, 2000);
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
@media screen and (max-width: 600px) {
   .main-container {
      min-width: 100vw;
      min-height: 100vh;
      overflow-x: hidden;
   }

   .main-container__section {
      min-width: 100%;
      min-height: 100%;
   }
}

/* Desktop */
@media screen and (min-width: 1200px) {
   .main-container {
      height: 100vh;
      width: 600vw;
      display: flex;
      overflow-y: hidden;
   }

   .main-container__section {
      height: 100%;
      min-width: 100%;

   }
}

.intro {
   display: block;
}

.container {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   overflow: hidden;
   background-color: black;
}

   .hi {
      font-size: 6vw;
      color: var(--font-color-highligth);
      animation-duration: 2s;
      animation-name: intro;
   }


@keyframes intro {
   from {
      transform: scale(0);
      opacity: 0;
   }

   to {
      transform: scale(1) rotate(0);
      opacity: 1;
   }
}
</style>

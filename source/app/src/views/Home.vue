<template>
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

   computed: {
      horizontalScrolling() {
         const scrollContainer = this.$refs["scroll-container"];
         
         if (window.innerWidth > 600) {
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
</style>

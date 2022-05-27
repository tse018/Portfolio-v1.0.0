<template>
   <main class="main-container">
      <component v-for="component in components" :is="component.name" :id="component.path" ref="components" />
   </main>
</template>

<script>
import sanityMixin from "../mixins/sanityMixin.js";
import changeParamsOnScroll from "../mixins/changeParamsOnScroll.js";

export default {
   mixins: [sanityMixin, changeParamsOnScroll],

   async created() {
      this.fetchSanity();
   },

   mounted() {
      console.log(this.$refs.components)
   }

/*
   mounted() {
      const box = this.$refs['viewPort'];
      const message = this.$refs['about'];

      document.addEventListener('scroll', function() {
         //return this.$route.params.section
         console.log(this.$route.params.section)
   }, {
      passive: true,
   });
   },
*/
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

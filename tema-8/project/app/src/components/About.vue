<template>
<div v-if="loading"> Loading...</div>
   <div v-else>
      <section class="about-container">
         <div v-for="content in about">
            <h2 class="about-container__title">
               {{ content }}
            </h2>
         </div>
      </section>
   </div>
</template>

<script>
import query from '../groq/about.groq?raw';
import viewMixin from '../mixins/viewMixin.js';

export default {
   mixins: [ viewMixin ],
   
   async created() {
      await this.sanityFetchAbout(query);
   },

   computed: {
      about() {
         return this.$store.getters.getAboutContent;
      },
   }
};
</script>

<style scoped>
@media screen and (min-width: 1200px) {
   .about-container {
      margin: 100px 0 0 0;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 20px;
      border: 2px solid red;
   }

   .about-container__title {
      border: 2px solid red;
      grid-column: 5;
   }

}
</style>

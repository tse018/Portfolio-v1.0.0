<template>
   <div v-if="loading"> Loading...</div>
   <div v-else>
      {{ about }}
   </div>
</template>

<script>
import viewMixin from '../mixins/sanityMixin.js';

export default {
   mixins: [
      viewMixin,
   ],

   computed: {
      about() {
         return this.$store.getters.getAboutContent;
      }
   },
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

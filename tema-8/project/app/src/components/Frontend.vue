<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
      <section class="frontend-container">
         <ul class="frontend-container__elements">
            <li class="frontend-container__element" v-for="stack in frontend">
               {{ stack.technology }}
            </li>
         </ul>
      </section>
   </div>
</template>

<script>
import sanityMixin from '../mixins/sanityMixin';

export default {
   mixins: [sanityMixin],

   computed: {
      frontend() {
         return this.$store.getters.getFrontend.sort((a, b) => {
            return (a.technology < b.technology ? 1: -1)
         });
      },
   },
};
</script>

<style scoped>
.frontend-container {
   border: 2px solid var(--font-color-highligth);
   width: 500px;
   padding-top: 10px;
}

.frontend-container__elements {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 20px;
}

.frontend-container__element {
   text-align: center;
   padding: 10px;
}

@media screen and (max-width: 1200px) {
   .frontend-container {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-top: 30px;
   }

   .frontend-container__elements {
      grid-template-columns: repeat(1, 1fr);
   }
}
</style>

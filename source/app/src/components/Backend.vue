<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
      <section class="backend-container">
         <ul class="backend-container__elements">
            <li class="backend-container__element" v-for="stack in backend">
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
      backend() {
         return this.$store.getters.getBackend.sort((a, b) => {
            return a.technology > b.technology ? 1 : -1;
         });
      },
   },
};
</script>

<style scoped>
.backend-container {
   border: 2px solid var(--font-color-highligth);
   width: 500px;
   margin: -20px 0 0 -20px;
}

.backend-container__elements {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 20px;
}

.backend-container__element {
   text-align: center;
   padding: 10px;
}

@media screen and (max-width: 1200px) {
   .backend-container {
      width: 300px;
   }

   .backend-container__elements{
      grid-template-columns: repeat(1, 1fr);
   }
}
</style>
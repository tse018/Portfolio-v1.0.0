<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
      <section class="semantic-container">
         <ul class="semantic-container__elements">
            <li class="semantic-container__element" v-for="stack in semanticTechnology">
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
      semanticTechnology() {
         return this.$store.getters.getSemanticTechnology.sort((a, b) => {
            return (a.technology < b.technology ? 1: -1);
         });
      },
   },
};
</script>

<style scoped>
.semantic-container {
   border: 2px solid var(--font-color-highligth);
   width: 500px;
   padding-top: 10px;
      margin-bottom: 100px;
}
.semantic-container__elements {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 20px;
}
.semantic-container__element {
   text-align: center;
   padding: 10px;
}
@media screen and (max-width: 1200px) {
   .semantic-container {
      width: 300px;
   }
   .semantic-container-container__elements{
      grid-template-columns: repeat(1, 1fr);
   }
}
</style>
<template>
   <div v-if="loading"> Loading... </div>
   
   <div v-else>
      <section class="interaction-container">
         <ul class="interaction-container__elements">
            <li class="interaction-container__element" v-for="tools in interactionDesign">
               {{ tools.technique }}
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
      interactionDesign() {
         return this.$store.getters.getInteractionDesign.sort((a, b) => {
            return (a.technique > b.technique ? 1: -1)
         });
      },
   },
};
</script>

<style scoped>
.interaction-container {
   border: 2px solid var(--font-color-highligth);
   width: 500px;
   margin: -20px 0 0 -20px;
}

.interaction-container__elements {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 20px;
}

.interaction-container__element {
   text-align: center;
   padding: 10px;
}

@media screen and (max-width: 1200px) {
   .interaction-container {
      width: 300px;
   }

   .interaction-container__elements{
      grid-template-columns: repeat(1, 1fr);
   }
}
</style>
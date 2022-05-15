<template>
   <section class="interaction-container">
      <ul class="interaction-container__elements">
         <li class="interaction-container__element" v-for="tools in interactionDesign">
            {{ tools.technique }}
         </li>
      </ul>
   </section>
</template>

<script>
export default {
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
   padding-top: 10px;
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
</style>

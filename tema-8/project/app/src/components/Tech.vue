<template>
   <section class="tech-container">
      <h2 class="tech-container__title">
         Here are a my technologies I’ve been working with
      </h2>

      <ul class="tech-container__list-elements">
         <li class="tech-container__list-element" v-for="stack in tech">
            {{ stack.name }}
         </li>
      </ul>
   </section>
</template>

<script>
export default {
   computed: {
      tech() {
         // getting tech data from VUEX and sorting by ASC
         return this.$store.getters.getTech.sort((a, b) => {
            return (a.name < b.name ? 1 : -1);
         });
      },
   },
};
</script>

<style>
.tech-container {
   padding: 100px;
   display: flex;
   flex-wrap: wrap;
}

.tech-container__title {
   height: max-content;
   width: max-content;
   margin: auto;
}

.tech-container__list-elements {
   width: 100%;
   padding: 50px;
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   gap: 30px;
}

.tech-container__list-element {
   padding: 20px;
   grid-column: span 3;
   list-style-type: "👉";
   min-width: 100px;
}
</style>

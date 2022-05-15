<template>
   <section class="backend-container">
      <ul class="backend-container__elements">
         <li class="backend-container__element" v-for="stack in backend">
            {{ stack.technology }}
         </li>
      </ul>
   </section>
</template>

<script>
export default {
   computed: {
      backend() {
         return this.$store.getters.getBackend.sort((a, b) => {
            return (a.technology > b.technology ? 1: -1)
         });
      },
   },
};
</script>

<style scoped>
.backend-container {
   border: 2px solid var(--font-color-highligth);
   width: 500px;
   padding-top: 10px;
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
</style>

<template>
   <section class="database-container">
      <ul class="database-container__elements">
         <li class="database-container__element" v-for="stack in database">
            {{ stack.technology }}
         </li>
      </ul>
   </section>
</template>

<script>
export default {
   computed: {
      database() {
         return this.$store.getters.getDatabase.sort((a, b) => {
            return (a.technology > b.technology ? 1: -1)
         });
      },
   },
};
</script>

<style scoped>
.database-container {
   border: 2px solid var(--font-color-highligth);
   width: 500px;
   padding-top: 10px;
   margin-bottom: 100px;
}

.database-container__elements {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 20px;
}

.database-container__element {
   text-align: center;
   padding: 10px;
}
</style>

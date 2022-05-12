<template>
   <section>
      <ul>
         <li v-for="stack in frontend">
            {{ stack.technology }}
         </li>
      </ul>
   </section>
</template>

<script>
export default {
   computed: {
      frontend() {
         return this.$store.getters.getFrontend;
      },
   },
};
</script>

<style scoped>
</style>

<template>
   <h2>
      {{ projects }}
   </h2>
</template>

<script>

export default {
   computed: {
      projects() {
         return this.$store.getters.getProjects;
      }
   },
};
</script>

<style></style>

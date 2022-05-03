<template>
   <div v-if="loading"> Loading...</div>
   <div v-else>
      {{ projects }}
   </div>
</template>

<script>

export default {
   computed: {
      projects() {
         return this.$store.getters.getProjectsContent;
      }
   },
};
</script>

<style></style>

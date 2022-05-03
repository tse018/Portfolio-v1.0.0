<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
      {{ education }}
   </div>
</template>

<script>
export default {
   computed: {
      education() {
         return this.$store.getters.getEducationContent;
      }
   },

}
</script>

<style>

</style>
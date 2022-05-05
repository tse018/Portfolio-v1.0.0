<template>
   <div v-for="item in education">

         {{ item.institute }}

   </div>
</template>

<script>
export default {
   computed: {
      education() {
         return this.$store.getters.getEducation;
      }
   }
}
</script>

<style>

</style>
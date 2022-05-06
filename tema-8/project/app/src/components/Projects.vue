<template>
   <section class="projects-container">
      <div v-for="project in projects.slice(0,3)">
         {{ project.title }}
      </div>
   </section>
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

<style>
.projects-container {
   margin-top: 100px;
   border: 2px solid red;
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   gap: 20px;
}
</style>

<template>
   <section>
      <article class="project-container" v-for="project in projects">
         {{ project.title }}
      </article>
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
.project-container {
   border: 2px solid red;
}
</style>

<template>
   <div class="project-container">
      <section class="project-container__wrapper">
         <nav class="project-container__navbar">
            <ul class="project-container__navbar-elements" v-for="project in projects">
               <li class="project-container__navbar-element">
                  {{ project.title }}
               </li>
            </ul>
         </nav>

         <article class="project-container__content"></article>
      </section>
   </div>
</template>

<script>
export default {
   computed: {
      projects() {
         return this.$store.getters.getProjects.sort((a, b) => {
            return (a.title > b.title ? 1 : -1);
         })
      },
   },
};
</script>

<style>


</style>

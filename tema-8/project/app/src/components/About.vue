<template>
   <div v-if="loading">
      Error: {{ error }}
   </div>

   <div v-else>
      <section class="about-container" v-for="content in about">
         <h2 class="about-container__title">
            {{ content.title }}
         </h2>
         <p class="about-container__introduction-field">
            {{ content.introduction }}
         </p>

         <p class="about-container__professional-field">
            {{ content.professional }}
         </p>

         <p class="about-container__education-field">
            {{ content.education }}
         </p>

         <ul class="about-container__tech-elements" v-for="(tech, index) in techStack" :key="tech + index">
            <li class="about-container__tech-element">
               {{ tech.name }}
            </li>
         </ul>

         <button class="button__rigth-arrow" @click="scrollToHome">
            <Icons :icon="'rigth'" />
         </button>

         <button class="button__left-arrow" @click="scrollToEducation">
            <Icons :icon="'left'" />
         </button>
      </section>
   </div>
</template>

<script>
import Icons from "../components/Icons.vue";

export default {
   components: {
      Icons,
   },

   computed: {
      about() {
         return this.$store.getters.getAbout;
      },

      techStack() {
         return this.$store.getters.getTech;
      },
   },

   methods: {
      scrollToEducation() {
         const element = document.getElementById("education");
         element.scrollIntoView({ behavior: "smooth" });
      },

      scrollToHome() {
         const element = document.getElementById("#");
         element.scrollIntoView({ behavior: "smooth" });
      },
   },
};
</script>

<style scoped>
@media screen and (min-width: 1200px) {
   .about-container {
      margin: 100px 0 0 0;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 20px;
   }

   .about-container__title {
      grid-column: 3 / 8;
      grid-row: 1;
   }

   .about-container__introduction-field {
      grid-column: 2 / 8;
      grid-row: 2;
      font-size: 20px;
   }

   .about-container__professional-field {
      grid-column: 2 / 8;
      grid-row: 3;
      font-size: 20px;
   }

   .about-container__education-field {
      grid-column: 2 / 8;
      grid-row: 4;
      font-size: 20px;
   }

   /* animation */
   .about-container__tech-element {
      grid-column: 2;
   }


   .button__left-arrow {
      grid-column: 12;
      grid-row: 3;
      margin-top: -25px; /* Need to fix */
   }

   .button__rigth-arrow {
      grid-column: 1;
      grid-row: 3;
      margin-top: -50px;
   }
}
</style>

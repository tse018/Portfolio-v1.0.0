<template>
   <section class="tech-container">
      <h2 class="tech-container__title">
         Here are technologies I’ve been working with
      </h2>

      <ul class="tech-container__list-elements">
         <li class="tech-container__list-element" v-for="stack in tech">
            {{ stack.name }}
         </li>
      </ul>

      <button class="tech-container__button-rigth" @click="scrollToHome">
         <Icons :icon="'rigth'" />
      </button>

      <button class="tech-container__button-left" @click="scrollToTech">
         <Icons :icon="'left'" />
      </button>
   </section>
</template>

<script>
import Icons from "../components/Icons.vue";

export default {
   components: {
      Icons,
   },

   computed: {
      tech() {
         // getting tech data from VUEX and sorting by ASC
         return this.$store.getters.getTech.sort((a, b) => {
            return a.name < b.name ? 1 : -1;
         });
      },
   },

   methods: {
      scrollToTech() {
         const element = document.getElementById("about");
         element.scrollIntoView({ behavior: "smooth" });
      },

      scrollToHome() {
         const element = document.getElementById("education");
         element.scrollIntoView({ behavior: "smooth" });
      },
   },
};
</script>

<style>
@media screen and (max-width: 600px) {
   .tech-container {
      padding: 100px;
      display: flex;
      flex-wrap: wrap;
      position: relative;
   }

   .tech-container__title {
      width: 100%;
      font-size: var(--mobile-font-size-secondary-undertitle);
   }

   .tech-container__list-elements {
      width: 100%;
      padding: 50px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
   }

   .tech-container__list-element {
      list-style-type: "👉";
   }

   .tech-container__button-left {
      display: none;
   }

   .tech-container__button-rigth {
      display: none;
   }
}

/* desktop */
@media screen and (min-width: 1200px) {
.tech-container {
   padding: 100px;
   display: flex;
   flex-wrap: wrap;
   position: relative;
}

.tech-container__title {
   height: max-content;
   width: max-content;
   margin: auto;
}

.tech-container__list-elements {
   width: 100%;
   padding: 50px;
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   gap: 30px;
}

.tech-container__list-element {
   padding: 20px;
   grid-column: span 3;
   list-style-type: "👉";
   min-width: 100px;
}

.tech-container__button-left {
   position: absolute;
   left: 0.5%;
   top: 30%;
}

.tech-container__button-rigth {
   position: absolute;
   right: 0.5%;
   top: 30%;
}
}
</style>

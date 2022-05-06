<template>
   <div v-if="loading"> Error: {{ error }}</div>

   <div v-else>
      <section class="about-container" v-for="content in about">
         <div class="about-container__introduction-container">
            <h2 class="about-container__introduction-title">
               {{ content.title }}
            </h2>

            <article class="about-container__introduction-field">
               <p v-if="!readMoreClicked">
                  {{ content.introduction[0].children[0].text }}
               </p>

               <div v-else>
                  <p>
                     {{ content.introduction[0].children[0].text }}
                     <br />
                     <br />
                     {{ content.introduction[1].children[0].text }}
                     <br />
                     <br />
                     {{ content.introduction[2].children[0].text }}
                  </p>
               </div>

               <button @click="readMore"> {{ buttonText }}</button>
            </article>
         </div>

         <div class="about-container__tech-container">
            <h2 class="about-container__tech-title">
               Tech Stack
            </h2>
            <ul class="about-container__tech-animation" v-for="(tech, index) in techStack">
               <li>
                  {{ tech.name }}
               </li>
            </ul>
         </div>

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
import sanityMixin from '../mixins/sanityMixin.js';
import Icons from "../components/Icons.vue";

export default {
   mixins: [sanityMixin],
   
   data() {
      return {
         readMoreClicked: false,
      }
   },

   components: {
      Icons,
   },

   computed: {
      about() {
         return this.$store.getters.getAbout;
      },

      error() {
         return this.$store.getters.getError;
      },

      techStack() {
         return this.$store.getters.getTech;
      },

      buttonText() {
         return this.readMoreClicked ? 'Read Less' : 'Read more'; 
      }
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

      readMore() {
         return this.readMoreClicked = !this.readMoreClicked;
      }
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

   .about-container__introduction-container {
      grid-column: 2 / 9;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
   }

   .about-container__introduction-title {
      grid-column: 2 / 12;
   }

   .about-container__introduction-field {
      grid-column: 1 / 12;
      position: relative;
      font-size: var(--desktop-font-size-paragraph);
   }

   .about-container__tech-container {
      grid-column: 9 / 11;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
   }

   .about-container__tech-title {
      grid-column: span 3;
      text-align: center;
      font-size: var(--desktop-font-size-secondary-undertitle);
   }

   .about-container__tech-animation {
      position: relative;
      top: 20px;
      animation: rotation 10s linear infinite;
      width: 100px;
      font-size: var(--desktop-font-size-animation);
   }

   /* stops the animation when hovering the element */
   .about-container__tech-animation:hover {
      animation-play-state: paused;
      cursor: wait;
   }

   @keyframes rotation {
      100% {
         transform: rotate(360deg) rotateY(360deg) rotateX(360deg);
      }
   }

   .button__left-arrow {
      grid-column: 12;
      grid-row: 1;
      margin-top: -25px; /* Need to fix */
   }

   .button__rigth-arrow {
      grid-column: 1;
      grid-row: 1;
   }
}
</style>

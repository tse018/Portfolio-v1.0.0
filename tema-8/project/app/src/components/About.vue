<template>
   <div v-if="loading">Error: {{ error }}</div>

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

               <button @click="readMore">{{ buttonText }}</button>
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

         <button class="about-container__button__rigth" @click="scrollToHome">
            <Icons :icon="'rigth'" />
         </button>

         <button
            class="about-container__button__left-arrow"
            @click="scrollToEducation"
         >
            <Icons :icon="'left'" />
         </button>
      </section>
   </div>
</template>

<script>
import sanityMixin from "../mixins/sanityMixin.js";
import Icons from "../components/Icons.vue";

export default {
   mixins: [sanityMixin],

   data() {
      return {
         readMoreClicked: false,
      };
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
         return this.readMoreClicked ? "Read Less" : "Read more";
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

      readMore() {
         return (this.readMoreClicked = !this.readMoreClicked);
      },
   },
};
</script>

<style scoped>
.about-container {
   display: flex;
   flex-flow: row wrap;
}

.about-container__introduction-container {
   margin: 100px 0 0 100px;
   width: 85%;
   height: 50%;
   border: 2px solid red;
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

</style>

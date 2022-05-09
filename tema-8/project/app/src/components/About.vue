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
                  <p class="about-container__introduction-scroll">
                     {{ content.introduction[0].children[0].text }}
                     <br />
                     <br />
                     {{ content.introduction[1].children[0].text }}
                     <br />
                     <br />
                     {{ content.introduction[2].children[0].text }}
                  </p>
               </div>

               <button class="about-container__read-button" @click="readMore">
                  {{ buttonText }}
               </button>
            </article>
         </div>

         <div class="about-container__tech-container">
            <ul class="about-container__tech-animation" v-for="(tech, index) in techStack">
               <li class="about-container__tech-element">
                  {{ tech.name }}
               </li>
            </ul>
         </div>

         <button class="about-container__button-rigth" @click="scrollToHome">
            <Icons :icon="'rigth'" />
         </button>

         <button class="about-container__button-left" @click="scrollToEducation">
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

   created() {
      this.article = this.$store.getters.getAbout.find((article) => {
         article._type === this.$route.params.id
      })
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
/* Mobile */
@media screen and (max-width: 600px) {
   .about-container {
      display: flex;
      flex-flow: row wrap;
      position: relative;
   }

   .about-container__introduction-container {
      padding: 20px;
      width: 100%;
      min-height: 100px;
      text-align: center;
   }

   .about-container__introction-scroll {
      height: 100px;
      overflow: scroll;
   }

   .about-container__introduction-title {
      font-size: var(--desktop-font-size-secondary-undertitle);
   }

   .about-container__introduction-field {
      font-size: var(--desktop-font-size-paragraph);
   }

   .about-container__read-button {
      margin: 20px 50px 0 50px;
      width: 200px;
      transition: 0.9s;
      color: var(--font-color-highligth);
      border: 2px solid var(--font-color-highligth);
   }

   .about-container__read-button:hover,
   .about-container__read-button:focus {
      box-shadow: inset 200px 0 0 0 var(--font-color-highligth);
      color: black;
   }

   .about-container__tech-container {
      padding: 50px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
   }

   .about-container__tech-element {
      margin: 10px;
   }

   .about-container__button-rigth {
      display: none;
   }

   .about-container__button-left {
      display: none;
   }

   /* width */
   ::-webkit-scrollbar {
      width: 10px;
   }

   /* Handle */
   ::-webkit-scrollbar-thumb {
      background: var(--font-color-highligth);
      border-radius: 10px;
   }

   /* Handle on hover */
   ::-webkit-scrollbar-thumb:hover {
      background: var(--font-color-highligth);
   }
}

@media screen and (min-width: 601px) and (max-width: 980px) {
   .about-container {
      display: flex;
      flex-flow: row wrap;
      position: relative;
   }

   .about-container__introduction-container {
      margin: 20px 0 0 0;
      padding: 20px;
      width: 100%;
      min-height: 100px;
      text-align: center;
   }

   .about-container__introction-scroll {
      height: 100px;
      overflow: scroll;
   }

   .about-container__introduction-title {
      font-size: var(--desktop-font-size-secondary-undertitle);
   }

   .about-container__introduction-field {
      font-size: var(--desktop-font-size-paragraph);
   }

   .about-container__read-button {
      margin: 20px 50px 0 50px;
      width: 200px;
      transition: 0.9s;
      color: var(--font-color-highligth);
      border: 2px solid var(--font-color-highligth);
   }

   .about-container__read-button:hover,
   .about-container__read-button:focus {
      box-shadow: inset 200px 0 0 0 var(--font-color-highligth);
      color: black;
   }

   .about-container__tech-container {
      padding: 50px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
   }

   .about-container__tech-element {
      margin: 10px;
   }

   .about-container__button-rigth {
      display: none;
   }

   .about-container__button-left {
      display: none;
   }

   /* width */
   ::-webkit-scrollbar {
      width: 10px;
   }

   /* Handle */
   ::-webkit-scrollbar-thumb {
      background: var(--font-color-highligth);
      border-radius: 10px;
   }

   /* Handle on hover */
   ::-webkit-scrollbar-thumb:hover {
      background: var(--font-color-highligth);
   }
}

@media screen and (min-width: 981px) and (max-width: 1200px) {
   .about-container {
      display: flex;
      flex-flow: row wrap;
      position: relative;
   }

   .about-container__introduction-container {
      width: 100%;
      min-height: 100px;
      padding: 20px;
   }

   .about-container__introction-scroll {
      height: 100px;
      overflow: scroll;
   }

   .about-container__introduction-title {
      font-size: var(--desktop-font-size-secondary-undertitle);
      text-align: center;
   }

   .about-container__introduction-field {
      font-size: var(--desktop-font-size-paragraph);
      padding: 20px;
   }

   .about-container__read-button {
      margin: 20px 50px 0 50px;
      width: 200px;
      transition: 0.9s;
      color: var(--font-color-highligth);
      border: 2px solid var(--font-color-highligth);
   }

   .about-container__read-button:hover,
   .about-container__read-button:focus {
      box-shadow: inset 200px 0 0 0 var(--font-color-highligth);
      color: black;
   }

   .about-container__tech-container {
      padding: 25px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 50px;
   }

   .about-container__tech-element {
      margin: 10px;
   }

   .about-container__button-rigth {
      position: absolute;
      top: 55%;
      left: 0;
      margin-left: 15px;
   }

   .about-container__button-left {
      display: none;
   }

   .about-container__button-rigth {
      display: none;
   }

   /* width */
   ::-webkit-scrollbar {
      width: 10px;
   }

   /* Handle */
   ::-webkit-scrollbar-thumb {
      background: var(--font-color-highligth);
      border-radius: 10px;
   }

   /* Handle on hover */
   ::-webkit-scrollbar-thumb:hover {
      background: var(--font-color-highligth);
   }
}

/* desktop */
@media screen and (min-width: 1200px) {
   .about-container {
      display: flex;
      flex-flow: row wrap;
      position: relative;
   }

   .about-container__introduction-container {
      margin: 100px 0 0 100px;
      width: 60%;
      height: 500px;
   }

   .about-container__introction-scroll {
      height: 100px;
      overflow: scroll;
   }

   .about-container__introduction-title {
      font-size: var(--desktop-font-size-secondary-undertitle);
   }

   .about-container__introduction-field {
      font-size: var(--desktop-font-size-paragraph);
   }

   .about-container__tech-container {
      margin-top: 80px;
      padding: 25px;
      width: 30%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
   }

   .about-container__read-button {
      margin: 20px 50px 0 50px;
      width: 200px;
      transition: 0.9s;
      color: var(--font-color-highligth);
      border: 2px solid var(--font-color-highligth);
   }

   .about-container__read-button:hover,
   .about-container__read-button:focus {
      box-shadow: inset 200px 0 0 0 var(--font-color-highligth);
      color: black;
   }

   .about-container__tech-animation {
      position: relative;
      top: 20px;
      animation: rotation 10s linear infinite;
      width: 100px;
      font-size: var(--desktop-font-size-animation);
   }

   .about-container__tech-element {
      margin: 10px;
   }

   .about-container__button-rigth {
      position: absolute;
      top: 55%;
      left: 0;
      margin-left: 15px;
   }

   .about-container__button-left {
      position: absolute;
      top: 55%;
      right: 0;
      margin-right: -15px;
   }

   /* width */
   ::-webkit-scrollbar {
      width: 10px;
   }

   /* Handle */
   ::-webkit-scrollbar-thumb {
      background: var(--font-color-highligth);
      border-radius: 10px;
   }

   /* Handle on hover */
   ::-webkit-scrollbar-thumb:hover {
      background: var(--font-color-highligth);
   }
}
</style>

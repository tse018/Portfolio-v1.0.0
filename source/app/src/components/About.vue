<template>
   <div v-if="loading">Loading...</div>

   <div v-else>
      <section class="about-container" v-for="content in about">
         <div class="about-container__introduction-container">
            <article class="about-container__introduction-field">
               <h2 class="about-container__introduction-title">
               {{ content.title }}
            </h2>

               <p v-if="!readMoreClicked">
                  {{ content.introduction[0].children[0].text }}
               </p>

               <div v-else>
                  <p class="about-container__introduction-scroll" v-for="paragraph in content.introduction">
                     {{ paragraph.children[0].text }}
                     <br />
                     <br />
                  </p>
               </div>

               <button class="about-container__read-button" @click="readMore">
                  {{ buttonText }}
               </button>
            </article>
         </div>
      </section>
   </div>
</template>

<script>
import Icons from "../components/Icons.vue";

import sanityMixin from "../mixins/sanityMixin.js";
import readMoreClicked from "../mixins/readMoreButtonMixins.js";
import scrollToSectionsMixins from '../mixins/scrollToSectionsMixins.js';

export default {
   mixins: [sanityMixin, readMoreClicked, scrollToSectionsMixins],

   components: {
      Icons,
   },

   computed: {
      about() {
         return this.$store.getters.getAbout;
      },
   },
};
</script>

<style scoped>
/* mobile */
@media screen and (max-width: 600px) {
   .about-container {
      min-height: max-content;
      overflow-y: hidden;
   }

   .about-container__introduction-field {
      font-size: var(--desktop-font-size-paragraph);
      padding: 25px;
      width: 100%;
      text-align: center;
   }
}

.about-container {
   display: flex;
   flex-flow: row wrap;
   position: relative;
   width: 100vw;
   padding-top: 100px;
}

.about-container__introduction-container {
   width: 100%;
   display: flex;
   justify-content: center;
   min-height: 100px;
}

.about-container__introduction-title {
   font-size: var(--desktop-font-size-secondary-undertitle);
   padding: 15px;
}

.about-container__introduction-field {
   font-size: 20px;
   width: 70ch;
}

.about-container__read-button {
   width: 200px;
   transition: 2s;
   color: var(--font-color-highligth);
   border: 2px solid var(--font-color-highligth);
   margin-top: 20px;
}

.about-container__read-button:hover,
.about-container__read-button:focus {
   box-shadow: inset 200px 0 0 0 var(--font-color-highligth);
   color: black;
}


@media screen and (min-width: 2000px) {
   .about-container__introduction-container {
      padding-top: 50px;
   }

   .about-container__introduction-field {
      font-size: 24px;
      width: 60ch;
   }

   .about-container__read-button {
      margin-top: 50px;
}

}
</style>
<template>
   <div v-if="loading">Loading...</div>

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
   margin-top: 100px;
}

.about-container__introduction-container {
   margin: 100px auto;
   min-height: 100px;
   padding: 20px;

}

.about-container__introduction-title {
   font-size: var(--desktop-font-size-secondary-undertitle);
   margin-left: 25px;
   text-align: center;
}

.about-container__introduction-field {
   font-size: var(--desktop-font-size-paragraph);
   padding: 25px;
   width: 60ch
}

.about-container__read-button {
   margin: 20px 0;
   width: 200px;
   transition: 2s;
   color: var(--font-color-highligth);
   border: 2px solid var(--font-color-highligth);
}

.about-container__read-button:hover,
.about-container__read-button:focus {
   box-shadow: inset 200px 0 0 0 var(--font-color-highligth);
   color: black;
}

.section-introduction__arrow {
   right: 5%;
}
</style>

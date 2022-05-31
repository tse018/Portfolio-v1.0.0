<template>
   <div v-if="loading">Loading...</div>

   <div v-else>
      <section class="about-container" v-for="content in about">
         <article class="about-container__introduction">
            <h3 class="about-container__title">
               {{ content.title }}
            </h3>

            <button class="about-container__read-button" @click="readMore">
               {{ buttonText }}
            </button>

            <div class="about-container__text-container">
               <p v-if="!readMoreClicked" class="about-container__preview">
                  {{ content.introduction[0].children[0].text }}
               </p>

               <div v-else>
                  <p class="about-container__full-text" v-for="paragraph in content.introduction">
                     {{ paragraph.children[0].text }}
                  <br />
                  <br />
                  </p>
               </div>

               
            </div>
         </article>
      </section>
   </div>
</template>

<script>
import Icons from "../components/Icons.vue";

import sanityMixin from "../mixins/sanityMixin.js";
import readMoreClicked from "../mixins/readMoreButtonMixins.js";
import scrollToSectionsMixins from "../mixins/scrollToSectionsMixins.js";

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
.about-container {
   position: relative;
   width: 100vw;
   height: 100vh;
   padding-top: var(--scroll-padding-top);
}

.about-container__introduction {
   display: flex;
   flex-direction: column;
   justify-content: center;
}

.about-container__title {
   display: flex;
   justify-content: center;
}

.about-container__read-button {
   margin: var(--read-margin);
   color: var(--read-color);
   width: var(--read-width);
   padding: var(--read-padding);
   transition: var(--read-transition);
   border: var(--read-border-radius);
   z-index: 100;
}

.about-container__text-container {
   display: flex;
   justify-content: center;
   margin-top: -50px;
}

.about-container__preview {
   display: flex;
   justify-content: center;
   width: 60ch;
   padding: 20px;
   line-height: 32px;
}

.about-container__full-text {
   display: flex;
   justify-content: center;
   width: 70ch;
   padding: 5px;
   line-height: 32px;
}
</style>

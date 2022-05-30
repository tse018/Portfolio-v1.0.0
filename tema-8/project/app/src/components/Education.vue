<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
      <div class="education">
         <section class="education__container">
            <nav class="education__container-navbar">
               <ul class="education__container-elements">
                  <li class="education__container__header-element">
                     EDUCATION
                  </li>

                  <li class="education__container-element" v-for="(school, index) in education" >
                     <button class="education__container-tab" @click="changeTab(school._id)" :role="school.institute">
                        {{ school.institute }}
                     </button>
                  </li>
               </ul>
            </nav>

            <div class="education__content-container">
               <article class="education__content-article" v-for="content in education" v-show="currentTab === content._id" :role="content.studyProgram">
                  <h3 class="education__content-title">
                     {{ content.studyProgram }}
                  </h3>

                  <p class="education__content-year">
                     {{ content.startDate }} - {{ content.endDate }}
                  </p>

                  <p v-if="!readMoreClicked" class="education__content-paragraph">
                     {{ content.description[0].children[0].text }}
                  </p>

                  <p v-else class="education__content-paragraph" v-for="paragraph in content.description">
                     {{ paragraph.children[0].text }}
                     <br />
                     <br />
                  </p>

                  <button class="education__content-button" @click="readMore">
                     {{ buttonText }}
                  </button>
               </article>

               <article class="education__content-article" v-for="content in education" v-show="activeTab === content._id && !currentTab">
                  <h3 class="education__content-title">
                     {{ content.studyProgram }}
                  </h3>

                  <p class="education__content-year">
                     {{ content.startDate }} - {{ content.endDate }}
                  </p>

                  <p class="education__content-paragraph" v-if="!readMoreClicked">
                     {{ content.description[0].children[0].text }}
                  </p>

                  <p v-else class="education__content-paragraph" v-for="paragraph in content.description">
                     {{ paragraph.children[0].text }}
                     <br />
                     <br />
                  </p>

                  <button class="education__content-button" @click="readMore">
                     {{ buttonText }}
                  </button>
               </article>
            </div>
         </section>
      </div>
   </div>
</template>

<script>
import Icons from "../components/Icons.vue";
import Collapsible from "../components/Collapsible.vue";

import sanityMixin from "../mixins/sanityMixin.js";
import changeTabsMixins from "../mixins/changeTabsMixins.js";
import readMoreButtonMixin from "../mixins/readMoreButtonMixins.js";
import scrollToSectionsMixins from '../mixins/scrollToSectionsMixins';

export default {
   mixins: [sanityMixin, changeTabsMixins, readMoreButtonMixin, scrollToSectionsMixins],

   components: {
      Icons,
      Collapsible,
   },

   computed: {
      education() {
         return this.$store.getters.getEducation;
      },

      activeTab() {
         return this.$store.getters.getEducation[0]._id;
      },
   },
};
</script>

<style scoped>
/* mobile */
@media screen and (max-width: 600px) {
   .education {
      min-width: 100%;
      min-height: 100%;
   }

   .education__container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
   }

   .education__container-elements {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
   }

   .education__container-element {
      padding: 20px;
   }

   .education__content-container {
      padding: 20px;
      margin: 20px;
   }

   .education__content-title {
      text-align: center;
      padding: 20px;
   }

   .education__container-tab {
      padding: 20px;
      color: var(--font-color-highligth);
      border: 2px solid var(--font-color-highligth);
      border-radius: 20%;
      min-width: 200px;
      transition: 5s;
      cursor: pointer;
   }

   .education__container-tab:hover,
   .education__container-tab:focus {
      box-shadow: inset 500px 0 0 0 var(--font-color-highligth);
      color: black;
   }

   .education__content-button {
      margin: 20px 20px;
      width: 200px;
      transition: 2s;
      color: var(--font-color-highligth);
      border: 2px solid var(--font-color-highligth);
   }

   .education__content-button:hover,
   .education__content-button:focus {
      box-shadow: inset 200px 0 0 0 var(--font-color-highligth);
      color: black;
   }
}

/* desktop */
@media screen and (min-width: 1200px) {
   .education {
      width: 100vw;
      height: 100vh;
      padding-top: 100px;
   }

   .education__container {
      display: flex;
   }

   .education__container-navbar {
      min-width: max-content;
      min-height: max-content;
      padding: 0 20px;
      margin-top: ;
   }

   .education__container__header-element {
      text-align: center;
      text-decoration: underline 2px var(--font-color-highligth);
      padding: 0 20px;
   }

   .education__container-elements {
      padding: 20px;
   }

   .education__container-element {
      padding: 25px;
   }

   .education__container-tab {
      padding: 20px;
      color: var(--font-color-highligth);
      border: 2px solid var(--font-color-highligth);
      border-radius: 20%;
      min-width: 200px;
      transition: 3s;
      cursor: pointer;
   }

   .education__container-tab:hover,
   .education__container-tab:focus {
      box-shadow: inset 500px 0 0 0 var(--font-color-highligth);
      color: black;
   }

   .education__content-container {
      width: 80%;
      padding-bottom: 20px;
   }

   .education__content-article {
      padding: 50px;
      min-height: 100px;
      font-size: 20px;
   }

   .education__content-title {
      padding: 0 30px;
   }

   .education__content-year {
      padding: 0 30px;
      font-style: italic;
   }

   .education__content-paragraph {
      padding: 0 30px;
   }

   .education__content-button {
      margin: 20px 20px;
      width: 200px;
      transition: 2s;
      color: var(--font-color-highligth);
      border: 2px solid var(--font-color-highligth);
   }

   .education__content-button:hover,
   .education__content-button:focus {
      box-shadow: inset 200px 0 0 0 var(--font-color-highligth);
      color: black;
   }
}


@media screen and (min-width: 2000px) {
   .education__content-container {
      width: 60ch;
      padding-bottom: 20px;
   }
}
</style>

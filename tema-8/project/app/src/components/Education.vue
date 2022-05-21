<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
      <div class="education">
         <section class="education__container">
            <nav class="education__container-navbar">
               <ul class="education__container-elements">
                  <li class="education__container-element" v-for="school in education">
                     <a class="education__container-tab" @click="changeTab(school._id)">
                        {{ school.institute }}
                     </a>
                  </li>
               </ul>
            </nav>

            <div class="education__content-container">
               <article class="education__content-article" v-for="content in education" v-show="activeTab === content._id && !currentTab">
                  <h3 class="education__content-title">
                     {{ content.studyProgram }}
                  </h3>

                  <p class="education__content-length">
                     {{ content.startDate }} - {{ content.endDate }}
                  </p>

                  <p class="education__content-paragraph" v-if="!readMoreClicked">
                     {{ content.description[0].children[0].text}}
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
               
               
               <article class="education__content-article" v-for="content in education" v-show="currentTab === content._id">
                  <h3 class="education__content-title">
                     {{ content.studyProgram }}
                  </h3>

                  <p class="education__content-length">
                     {{ content.startDate }} - {{ content.endDate }}
                  </p>

                  <p v-if="!readMoreClicked" class="education__content-paragraph">
                     {{ content.description[0].children[0].text}}
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

import sanityMixin from '../mixins/sanityMixin.js';
import changeTab from '../mixins/changeTabsMixins.js';
import readMoreButtonMixin from '../mixins/readMoreButtonMixins.js';

export default {
   mixins: [sanityMixin, changeTab, readMoreButtonMixin],

   components: {
      Icons,
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
      margin-bottom: 100%;
   }

   .education__container {
      display: flex;
      flex-wrap: wrap;
      min-width: 100%;
      margin: 0 -100px;
   }

   .education__container-navbar {
      min-width: max-content;
      min-height: max-content;
      padding: 20px;
      margin: 0 auto;
   }

   .education__container-elements {
      padding: 20px;
   }

   .education__container-element {
      padding: 20px;
      font-size: var(--mobile-font-size-secondary-undertitle);
      text-align: center;
   }

   .education__container-click {
      cursor: pointer;
   }

   .education__content-container {
      min-width: 100%;
   }

   .education__content-article {
      min-height: 100%;
      min-width: 100%;
   }

   .education__content-title {
      text-align: center;
      margin-bottom: 20px;
   }

   .education__content-paragraph {
      font-size: var(--mobile-font-size-default);
      line-height: 30px;
   }
}

/* desktop */
.education {
   min-width: 100%;
   min-height: 100%;
   padding: 100px 100px 0 100px;
   position: relative;
}

.education__container {
   display: flex;
}

.education__container-navbar {
   min-width: max-content;
   min-height: max-content;
   padding: 20px;
}

.education__container-elements {
   padding: 20px;
}

.education__container-element {
   padding: 25px;
}

.education__container-tab:after {
   cursor: pointer;
}

.education__content-container {
   width: 80%;
}

.education__content-article {
   padding: 50px;
   min-height: 100px;
}

.education__content-title {
   padding: 0 30px;
}

.education__content-length {
   padding: 0 30px;
   font-style: italic;
}

.education__content-paragraph {
   padding: 0 30px;
}

.education__content-button {
   margin: 20px 20px;
   width: 200px;
   transition: 0.9s;
   color: var(--font-color-highligth);
   border: 2px solid var(--font-color-highligth);
}

.education__content-button:hover,
.education__content-button:focus {
   box-shadow: inset 200px 0 0 0 var(--font-color-highligth);
   color: black;
}

.red {
   background-color: red;
}
</style>

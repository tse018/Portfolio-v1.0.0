<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
      <div class="education">
         <section class="education__container">
            <nav class="education__navbar">
               <ul class="education__elements">
                  <li class="education__element--header">
                     EDUCATION
                  </li>

                  <li class="education__element" v-for="(school, index) in education" >
                     <button class="education__tab-button" @click="changeTab(school._id)" :role="school.institute">
                        {{ school.institute }}
                     </button>
                  </li> 

                  <li class="education__element">
                     <button class="education__read-button" @click="readMore">
                        {{ buttonText }}
                     </button>
                  </li>
               </ul>
            </nav>

            <div class="education__content-container">
               <article class="education__article--mobile" v-for="content in education" v-show="currentTab === content._id" :role="content.studyProgram">
                  <h3 class="education__title">
                     {{ content.studyProgram }}
                  </h3>

                  <p class="education__year">
                     {{ content.startDate }} - {{ content.endDate }}
                  </p>

                  <p v-if="!readMoreClicked" class="education__paragraph">
                     {{ content.description[0].children[0].text }}
                  </p>

                  <p v-else class="education__paragraph" v-for="paragraph in content.description">
                     {{ paragraph.children[0].text }}
                     <br />
                     <br />
                  </p>

                  <button class="education__read-button--mobile" @click="readMore">
                     {{ buttonText }}
                  </button>
               </article>

               <article class="education__article" v-for="content in education" v-show="activeTab === content._id && !currentTab">
                  <h3 class="education__title">
                     {{ content.studyProgram }}
                  </h3>

                  <p class="education__year">
                     {{ content.startDate }} - {{ content.endDate }}
                  </p>

                  <p class="education__paragraph" v-if="!readMoreClicked">
                     {{ content.description[0].children[0].text }}
                  </p>

                  <p v-else class="education__paragraph" v-for="paragraph in content.description">
                     {{ paragraph.children[0].text }}
                     <br />
                     <br />
                  </p>
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

.education {
   width: 100vw;
   height: 100vh;
   padding: var(--scroll-padding-top);
}

.education__container {
   display: flex;
}


.education__navbar {
   min-width: max-content;
   min-height: max-content;
   padding: 50px 20px;
}

.education__elements {
   text-align: center;
   text-decoration: underline 2px var(--font-color-highligth);
   padding: 0 20px;
}

.education__element {
   padding: 20px;
   font-size: var(--font-xxl);
}

.education__element--header {
   padding: 20px;
   font-size: var(--font-xxl);
}

.education__tab-button {
   border: var(--tab-border);
   padding: var(--tab-padding);
   color: var(--tab-color);
   min-width: var(--tab-width);
   transition: var(--tab-transition);
   cursor: pointer;
}

.education__tab-button:hover,
.education__tab-button:focus {
   box-shadow: var(--tab-hover-focus);
   color: var(--tab-hover-focus-color);
}

.education__content-container {
   width: 100%;
   padding-top: 25px;
}

.education__article {
   width: 100%;
   padding: 2px;
}

.education__article--mobile {
   width: 100%;
   padding: 2px;
}

.education__title {
   display: flex;
   justify-content: center;
}

.education__paragraph {
   width: 60ch;
   margin: auto;
}

.education__year {
   display: flex;
   justify-content: end;
   margin: -55px 0 10px 0;
   padding-top: 65px;
   font-style: italic;
}

.education__read-button {
   padding: var(--tab-padding);
   border: var(--tab-border);
   width: var(--tab-width);
   color: var(--tab-color);
   transition: var(--tab-transition);
   margin-top: 100px;
}

.education__read-button:hover,
.education__read-button:focus {
   box-shadow: var(--read-hover-focus);
   color: var(--read-hover-focus-color);
}

.education__read-button--mobile {
   display: none;
}


@media screen and (max-width: 1200px) {
   .education__article {
      display: none;
   }

   .education__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: -50px;
   }
   
   .education__read-button {
      display: none;
   }

   .education__title {
      font-size: var(--font-xxl);
      padding: 20px;
      margin: -100px -50px 0 -50px;
      display: flex;
      justify-content: center;
   }
   
   .education__year {
      display: flex;
      justify-content: center;
   }

   .education__paragraph {
      width: 30ch;
      padding: 20px;
      display: flex;
      justify-content: center;
   }

   .education__read-button--mobile {
      padding: var(--tab-padding);
      border: var(--tab-border);
      width: var(--tab-width);
      color: var(--tab-color);
      transition: var(--tab-transition);
      margin-bottom: 50px;
      display: flex;
      justify-content: start;
   }
}
</style>

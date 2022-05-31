<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
      <div class="education">
         <section class="education__container">
            <nav class="education__navbar">
               <ul class="education__elements">
                  <li class="education__element">
                     EDUCATION
                  </li>

                  <li class="education__element" v-for="(school, index) in education" >
                     <button class="education__tab-button" @click="changeTab(school._id)" :role="school.institute">
                        {{ school.institute }}
                     </button>
                  </li>
               </ul>
            </nav>

            <div class="education__content-container">
               <article class="education__article" v-for="content in education" v-show="currentTab === content._id" :role="content.studyProgram">
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

                  <button class="education__read-button" @click="readMore">
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

                  <button class="education__read-button" @click="readMore">
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
.education {
   border: 2px solid red;
   width: 100vw;
   height: 100vh;
}
</style>

<template>
   <div class="education">
      <section class="education__container">
         <nav class="education__tabs-container">
            <ul class="education__tabs-elements">
               <li class="education__tabs-element" v-for="school in education">
                  <a class="education__tabs-click" @click="changeTab(school._id)">
                     {{ school.institute }}
                  </a>
               </li>
            </ul>
         </nav>

         <div class="education__content-container">
            <article class="education__content-article" v-for="content in education" v-show="currentTab === content._id">
               <h3 class="education__content-title">
                  {{ content.studyProgram }}
               </h3>
               <p class="education__content-paragraph" v-for="paragraph in content.description">
                  {{ paragraph.children[0].text }} 
                  <br />
                  <br />
               </p>
            </article>
         </div>

         <button class="education-container__button-left" @click="scrollToTech">
            <Icons :icon="'left'" />
         </button>

         <button class="education-container__button-rigth" @click="scrollToHome">
            <Icons :icon="'rigth'" />
         </button>

      </section>
   </div>
</template>

<script>
import Icons from '../components/Icons.vue';

export default {
   components: {
      Icons,
   },

   data() {
      return {
         currentTab: "",
      };
   },

   computed: {
      education() {
         return this.$store.getters.getEducation;
      },

      activeTab() {
         return this.$store.getters.getEducation[0]._id;
      },
   },

   methods: {
      changeTab(_id) {
         this.currentTab =_id;
         console.log(this.currentTab)
      },

      scrollToTech() {
         const element = document.getElementById("tech");
         element.scrollIntoView({ behavior: "smooth" });
      },

      scrollToHome() {
         const element = document.getElementById("projects");
         element.scrollIntoView({ behavior: "smooth" });
      },



   },
};
</script>

<style>
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

   .education__tabs-container {
      min-width: max-content;
      min-height: max-content;
      padding: 20px;
      margin: 0 auto;
   }

   .education__tabs-elements {
      padding: 20px;
   }

   .education__tabs-element {
      padding: 20px;
      font-size: var(--mobile-font-size-secondary-undertitle);
      text-align: center;
      
   }

   .education__tabs-click {
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
   width: 100%;
   height: 100%;
   padding: 100px;
   position: relative;
}

.education__container {
   display: flex;
}

.education__tabs-container {
   min-width: max-content;
   min-height: max-content;
   padding: 20px;
}

.education__tabs-elements {
   padding: 20px;
}

.education__tabs-element {
   padding: 25px;
}

.education__tabs-click {
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

.education__content-paragraph {
   padding: 0 30px;
}

.education-container__button-left {
   position: absolute;
   top: 38%;
   left: 0.5%;
}

.education-container__button-rigth {
   position: absolute;
   top: 38%;
   right: 0.5%;
}


</style>

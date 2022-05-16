<template>
   <div class="projects-container">
      <section class="projects-container__flex-navbar">
         <nav class="projects-container__navbar">
            <ul class="projects-container__navbar-elements">
               <li class="projects-container__navbar-element" v-for="project in projects">
                  <a class="projects-container__navbar-tab" @click="changeTab(project._id)">
                     {{ project.title.toUpperCase() }}
                  </a>
               </li>
            </ul>
         </nav>

         <div class="projects-container__flex-content">
            <article class="projects-container__description-container">
               <div class="projects-container__description-content" v-for="project in projects" v-show="activeTab === project._id">
                  <h3 class="projects-container__description-title">
                     {{ project.title.toUpperCase() }} description
                  </h3>

                  <div class="projects-container__paragraph-container">
                     <p v-if="!readMoreClicked" class="projects-container__paragraph-preview">
                        {{ project.description[0].children[0].text }}
                     </p>

                     <div v-else class="projects-container__paragraph-full">
                        <p v-for="paragraph in project.description">
                           {{ paragraph.children[0].text}} <br />
                        </p>
                     </div>

                     <button class="projects-container__read-button" @click="readMore">
                        {{ buttonText }}
                     </button>

                     <div class="projects-container__tech-container">
                        <h3 class="projects-container__tech-title">
                           Tech stack used for {{ project.title.toUpperCase() }}:
                        </h3>
                        
                        <ul class="projects-container__tech-elements" v-for=" tech in project.techStack">
                           <li class="projects-container__tech-element">
                              {{ tech }}
                           </li>
                        </ul>
                     </div>

                     <ul class="projects-container__link-elements">
                        <li class="projects-container__link-element">
                           Github: <a class="projects-container__link" :href="`${project.github}`" target="_blank" > {{ project.github}} </a>
                        </li>

                        <li class="projects-container__link-element">
                           Netlify: <a class="projects-container__link" :href="`${project.netlify}`" target="_blank" > {{ project.netlify}} </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </article>
         </div>
      </section>
   </div>
</template>

<script>
import readMoreClicked from "../mixins/readMoreButtonMixin.js";

export default {
   mixins: [readMoreClicked],

   data() {
      return {
         currentTab: "",
      };
   },

   computed: {
      projects() {
         return this.$store.getters.getProjects;
      },

      activeTab() {
         return this.$store.getters.getProjects[0]._id;
      }
   },

   methods: {
      changeTab(_id) {
         this.currentTab = _id;
         //console.log(this.currentTab)
      },
   },
};
</script>

<style scoped>
.projects-container {
   padding: 100px 0 0 0;
   width: 100%;
   height: 100%;
   overflow: scroll;
   margin-bottom: 50px;
}

.projects-container__flex-navbar {
   display: flex;
   flex-wrap: wrap;
   flex-direction: column;
}

.projects-container__navbar {
   width: 100%;
   display: flex;
   justify-content: center;
}

.projects-container__navbar-elements {
   display: flex;
   min-width: 100px;
   overflow: auto;
}

.projects-container__navbar-element {
   padding: 20px;
   width: 200px;
   text-align: center;
   min-width: max-content;
}

.projects-container__navbar-tab {
   cursor: pointer;
}

.projects-container__flex-content {
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
}

.projects-container__description-content {
   width: 100%;
   margin-left: 20px;
}

.projects-container__description-title {
   font-style: italic;
   padding: 0 20px;
   color: var(--font-color-highligth);
}

.projects-container__paragraph-container {
   width: 100%;
   min-height: 100px;
   padding: 20px;
}

.projects-container__link {
   margin-top: 20px;
}

.projects-container__link-elements {
   margin-top: 20px;
}

.projects-container__link {
   font-style: italic;
   border-bottom: 2px solid var(--font-color-highligth);
   color: var(--font-color-highligth);
}

.projects-container__read-button {
   padding: 0 20px;
   margin: 20px 0 25px 25px;
   transition: 0.9s;
   color: var(--font-color-highligth);
   border: 2px solid var(--font-color-highligth);
}

.projects-container__read-button:hover,
.projects-container__read-button:focus {
   box-shadow: inset 150px 0 0 0 var(--font-color-highligth);
   color: black;
}

.projects-container__tech-container {
   margin-top: 20px;
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
}
.projects-container__tech-title {
   width: 100%;
}

.projects-container__tech-elements {
   padding: 10px;
   color: var(--font-color-highligth);
}

.projects-container__tech-element {
   border-bottom: 2px solid var(--font-color-highligth);
}

</style>

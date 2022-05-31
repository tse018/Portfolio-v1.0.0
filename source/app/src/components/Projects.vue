<template>
   <div v-if="loading">Loading...</div>
   <div v-else class="projects-container">
      <section class="projects-container__flex-navbar">
         <nav class="projects-container__navbar">
            <ul class="projects-container__navbar-elements">
               <li class="projects-container__navbar-header">
                  PROJECTS
               </li>

               <li class="projects-container__navbar-element" v-for="project in projects">
                  <button class="projects-container__navbar-tab" @click="changeTab(project._id)">
                     {{ project.title.toUpperCase() }}
                  </button>
               </li>
            </ul>
         </nav>

         <div class="projects-container__flex-content">
            <article class="projects-container__description-container">
               <div class="projects-container__description-content" v-for="project in projects" v-show="activeTab === project._id && !currentTab">
                  <h3 class="projects-container__description-title">
                     {{ project.title.toUpperCase() }}
                  </h3>

                  <div class="projects-container__paragraph-container">
                     <div class="projects-container__paragraph-full">
                        <p v-for="paragraph in project.description">
                           {{ paragraph.children[0].text }} <br />
                        </p>
                     </div>

                     <div class="projects-container__tech-container">
                        <ul class="projects-container__tech-elements" v-for="tech in project.techStack">
                           <li class="projects-container__tech-element">
                              {{ tech }}
                           </li>
                        </ul>
                     </div>

                     <ul class="projects-container__link-elements">
                        <li class="projects-container__link-element">
                           Github:
                           <a class="projects-container__link" :href="`${project.github}`" target="_blank">
                              {{ project.github }}
                           </a>
                        </li>

                        <li class="projects-container__link-element">
                           Netlify:
                           <a class="projects-container__link" :href="`${project.netlify}`" target="_blank">
                              {{ project.netlify }}
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>

               <div class="projects-container__description-content" v-for="project in projects" v-show="currentTab === project._id">
                  <h3 class="projects-container__description-title">
                     {{ project.title.toUpperCase() }}
                  </h3>

                  <div class="projects-container__paragraph-container">
                     <div class="projects-container__paragraph-full">
                        <p v-for="paragraph in project.description">
                           {{ paragraph.children[0].text }}
                        </p>
                     </div>

                     <div class="projects-container__tech-container">
                        <ul class="projects-container__tech-elements" v-for="tech in project.techStack">
                           <li class="projects-container__tech-element">
                              {{ tech }}
                           </li>
                        </ul>
                     </div>

                     <ul class="projects-container__link-elements">
                        <li class="projects-container__link-element">
                           Github:
                           <a class="projects-container__link" :href="`${project.github}`" target="_blank">
                              {{ project.github }}
                           </a>
                        </li>

                        <li class="projects-container__link-element">
                           Netlify:
                           <a class="projects-container__link" :href="`${project.netlify}`" target="_blank">
                              {{ project.netlify }}
                           </a>
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
import sanityMixin from "../mixins/sanityMixin.js";
import readMoreClicked from "../mixins/readMoreButtonMixins.js";
import changeTab from "../mixins/changeTabsMixins.js";

export default {
   mixins: [sanityMixin, readMoreClicked, changeTab],

   computed: {
      projects() {
         return this.$store.getters.getProjects;
      },

      activeTab() {
         return this.$store.getters.getProjects[0]._id;
      },
   },
};
</script>

<style scoped>
.projects-container {
   padding: 50px 0 0 0;
   width: 100vw;
   height: 100vh;
   margin-bottom: 50px;
}

.projects-container__flex-navbar {
   display: flex;
}

.projects-container__navbar {
   display: flex;
   flex-direction: row;
   margin: 100px 25px;
}

.projects-container__navbar-header {
   text-align: center;
   text-decoration: underline 2px var(--font-color-highligth);
   padding: 0 20px;
   font-size: var(--font-xxl);
}

.projects-container__navbar-elements {
   justify-content: center;
   max-width: 400px;
   overflow: auto;
}

.projects-container__navbar-element {
   padding: 20px;
   width: 200px;
   text-align: center;
   width: max-content;
}

.projects-container__navbar-tab {
   padding: 20px;
   color: var(--font-color-highligth);
   border: 2px solid var(--font-color-highligth);
   border-radius: 20%;
   min-width: 300px;
   transition: 2s;
   cursor: pointer;
}

.projects-container__navbar-tab:hover,
.projects-container__navbar-tab:focus {
   box-shadow: inset 400px 0 0 0 var(--font-color-highligth);
   color: black;
}

.projects-container__flex-content {
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
}

.projects-container__description-content {
   width: 100%;
   height: 100%;
   margin-left: 100px;
}

.projects-container__description-title {
   padding: 20px;
   margin: 50px 0 0 0;
   text-align: center;
   color: var(--font-color-highligth);
}

.projects-container__paragraph-container {
   width: 60ch;
   padding: 20px;
}

.projects-container__link {
   margin-top: 20px;
}

.projects-container__link-elements {
   margin-top: 20px;
}

.projects-container__link-element {
   margin: 20px;
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

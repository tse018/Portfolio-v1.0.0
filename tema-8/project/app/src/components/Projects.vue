<template>
   <div class="projects-container">
      <section class="projects-container__flex-navbar">
         <nav class="projects-container__navbar">
            <ul class="projects-container__navbar-elements">
               <li class="projects-container__navbar-element" v-for="project in projects">
                  <a class="projects-container__navbar-tab">
                     {{ project.title }}
                  </a>
               </li>
            </ul>
         </nav>

         <div class="projects-container__flex-content">
            <article class="projects-container__description-container">
               <div class="projects-container__paragraph" v-for="project in projects">
                  <div v-for="paragraph in project.description">
                     {{ paragraph.children[0].text }}
                  </div>
               </div>
            </article>

         <div class="projects-container__tech-container">
            <ul class="projects-container__tech-elements" v-for="project in projects">
               <li class="projects-container__tech-element"  v-for="tech in project.techStack">
                  {{ tech }}
               </li>
            </ul>
         </div>
      </div>
      </section>
   </div>
</template>

<script>
export default {
   data() {
      return {
         currentTab: '',
      }
   },
   computed: {
      projects() {
         return this.$store.getters.getProjects.sort((a, b) => {
            return a.title > b.title ? 1 : -1;
         });
      },

      images() {
         return this.$store.getters.getProjectImages;
      }
   },
};
</script>

<style scoped>
.projects-container {
   padding: 100px 0 0 0;
   width: 100%;
   height: 100%;
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
   padding: 20px;
   border: 2px solid red;
}

.projects-container__navbar-elements {
   border: 2px solid green; 
   display: flex;
   padding: 20px;
   min-width: 100px;
   overflow: auto;
}

.projects-container__navbar-element {
   border: 2px solid white;
   padding: 20px;
   width: 200px;
   text-align: center;
}

.projects-container__navbar-tab {
   cursor: pointer;
}

.projects-container__flex-content {
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   border: 2px solid red;
}

.projects-container__description-container {
   width: 60%;
   border: 2px solid darkblue;
   min-height: 100px;
}

.projects-container__paragraph {
   padding: 20px;
}

.projects-container__tech-container {
   border: 2px solid red;
   width: 40%;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
}
</style>

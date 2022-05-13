<template>
   <div class="projects-container">
      <section class="projects-container__wrapper">
         <h2 class="projects-container__title">
            Some Things I have built 
         </h2>
         
         <nav class="projects-container__navbar">
            <ul class="projects-container__navbar-elements">
               <li class="projects-container__navbar-element" v-for="project in projects">
                  <a class="projects-container__navbar-tab">
                     {{ project.title }}
                  </a>
               </li>
            </ul>
         </nav>

         <div class="projects-container__flex-wrapper">
            <figure class="projects-container__image-container" v-for="project in projects">
               <div class="projects-container__image" v-for="image in project.preview">
                  <img :src="image.asset._ref" />
               </div>
               <figcaption class="projects-container__image-description">
               </figcaption>
            </figure>

            <article class="projects-container__content" v-for="project in projects">
               <p class="projects-container__paragraph">
                  fdgfdg
               </p>
            </article>
         </div>
         
         <ul class="projects-container__tech-elements">
            <li class="projects-container__tech-element">dfgfdgd</li>
         </ul> 
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
   },
};
</script>

<style scoped>
.projects-container {
   padding: 100px 0 0 0;
   width: 100%;
   height: 100%;
}

.projects-container__wrapper {
   border: 2px solid white;
   width: 100%;
   height: 100%;
}

.projects-container__navbar {
   width: 80%;
   max-height: 100px;
   margin: 0 auto;
}

.projects-container__navbar-elements {
   display: flex;
   justify-content: center;
   padding: 20px;
}

.projects-container__navbar-element {
   color: var(--font-color-highligth);
   padding: 20px;
}

.projects-container__flex-wrapper {
   display: flex;
}

.projects-container__image-container {
   margin: 20px 0 0 1.8vw;
   width: 60%;
   min-height: 100px;
}

.projects-container__content {
   margin: 20px 10vw 0 20px;
   width: 40%;
   min-height: 100px;
}
</style>

<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
      <section class="technology-container">
         <h3 class="technology-container__title">
            TECH STACK OVERVIEW
         </h3>

         <div class="technology-container__flex-wrapper">
            <div>
               <Collapsible v-model:title="title.frontend">
                  <Frontend />
               </Collapsible>

               <Collapsible v-model:title="title.interactionDesign">
                  <InteractionDesign />
               </Collapsible>

               <Collapsible v-model:title="title.semanticTechnology">
                  <SemanticTechnology />
               </Collapsible>
            </div>

            <div>
               <Collapsible v-model:title="title.backend">
                  <Backend />
               </Collapsible>

               <Collapsible v-model:title="title.database">
                  <Database />
               </Collapsible>

               <Collapsible v-model:title="title.systemDevelopment">
                  <systemDevelopment />
               </Collapsible>
            </div>
         </div>
      </section>
   </div>
</template>

<script>
import Backend from "./Backend.vue";
import Collapsible from "./Collapsible.vue";
import Database from "./Database.vue";
import Frontend from "./Frontend.vue";
import Icons from "./Icons.vue";
import InteractionDesign from "./InteractionDesign.vue";
import SemanticTechnology from "./SemanticTechnology.vue";
import SystemDevelopment from "./SystemDevelopment.vue";

import sanityMixin from "../mixins/sanityMixin.js";

export default {
   mixins: [sanityMixin],

   components: {
      Backend,
      Collapsible,
      Database,
      Frontend,
      Icons,
      InteractionDesign,
      SemanticTechnology,
      SystemDevelopment,
   },

   data() {
      return {
         title: {
            backend: "BACKEND DEVELOPMENT",
            database: "DATABASE",
            frontend: "FRONTEND DEVELOPMENT",
            interactionDesign: "INTERACTION DESIGN",
            semanticTechnology: "SEMANTIC TECHNOLOGY",
            systemDevelopment: "SYSTEM DEVELOPMENT",
         },
      };
   },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
   .technology-container {
      position: relative;
      height: 100%;
      width: 100%;
   }

   .technology-container__title {
      text-align: center;
      padding: 20px;
      font-size: var(--desktop-font-size-secondary-undertitle);
   }

   .technology-container__flex-wrapper {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
   }
}

@media screen and (min-width: 1200px) {
   .technology-container {
      display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   position: relative;
   height: 100vh;
   width: 100vw;
   }

   .technology-container__title {
      text-align: center;
      padding: 20px;
      margin: 20px auto 20px auto;
      font-size: var(--desktop-font-size-secondary-undertitle);
   }

   .technology-container__flex-wrapper {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      gap: 10%;
   }
}
</style>

<template>
   <section class="technology-container">
      <h3 class="technology-container__title">
         Click to see some of the tech I have been working on 
      </h3>

      <div class="technology-container__flex-wrapper">
         <div class="technology-container__item-1">
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

         <div class="technology-container__item-2">
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
</template>

<script>
import Backend from "../components/Backend.vue";
import Collapsible from "../components/Collapsible.vue";
import Database from "../components/Database.vue";
import Frontend from "../components/Frontend.vue";
import Icons from '../components/Icons.vue';
import InteractionDesign from "../components/InteractionDesign.vue";
import SemanticTechnology from "../components/SemanticTechnology.vue";
import SystemDevelopment from "../components/SystemDevelopment.vue";

export default {
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
            backend: "Backend Development",
            database: "Database",
            frontend: "Frontend Development",
            interactionDesign: "Interaction Design",
            semanticTechnology: "Semantic Technology",
            systemDevelopment: "System Development",
         },
      };
   },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
   .technology-container__flex-wrapper {
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
}


.technology-container__item-2 {
   margin-top: -80px;
}


}
.technology-container {
   padding-top: 100px;
   position: relative;
}

.technology-container__title {
   text-align: center;
   padding: 20px;
   margin-bottom: 20px;
   font-size: var(--desktop-font-size-secondary-undertitle);
}

.technology-container__flex-wrapper {
   display: flex;
}

.technology-container__item-1 {
   flex: 50%;
   flex-wrap: wrap;
}

.technology-container__item-2 {
   flex: 50%;
   flex-wrap: wrap;
}

.technology-container__scroll-rigth {
   position: absolute;
   right: 1;
   top: 40vh;
}

.technology-container__scroll-left {
   position: absolute;
   left: 0vw;
   top: 40vh;
}
</style>

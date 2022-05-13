<template>
   <section class="technology-container">
      <h2 class="technology-container__title">
         Here are a few technologies I have been working with
      </h2>

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
import InteractionDesign from "../components/InteractionDesign.vue";
import SemanticTechnology from "../components/SemanticTechnology.vue";
import SystemDevelopment from "../components/SystemDevelopment.vue";

export default {
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

   components: {
      Backend,
      Collapsible,
      Database,
      Frontend,
      InteractionDesign,
      SemanticTechnology,
      SystemDevelopment,
   },
};
</script>

<style scoped>
.technology-container {
   padding-top: 100px;
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
</style>

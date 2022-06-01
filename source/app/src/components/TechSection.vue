<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
      <section class="technology">
         <div class="technology__grid-container">
            <Collapsible class="technology__grid-item" v-model:title="title.frontend">
               <Frontend />
            </Collapsible>

            <Collapsible class="technology__grid-item" v-model:title="title.interactionDesign">
               <InteractionDesign />
            </Collapsible>

            <Collapsible class="technology__grid-item" v-model:title="title.semanticTechnology">
               <SemanticTechnology />
            </Collapsible>

            <Collapsible class="technology__grid-item"  v-model:title="title.database">
               <Database />
            </Collapsible>

            <Collapsible class="technology__grid-item" v-model:title="title.backend">
               <Backend />
            </Collapsible>

            <Collapsible class="technology__grid-item" v-model:title="title.systemDevelopment">
               <systemDevelopment />
            </Collapsible>
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
.technology {
   width: 100vw;
   height: 100vh;
   padding: var(--scroll-padding-top);
}

.technology__grid-container {
   width: 100%;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 20px;
   padding-top: 50px;
}

.technology__grid-item {
   padding: 20px;
   min-height: 100px;
   text-align: center;
}

@media screen and (max-width: 1200px) {
   .technology {
      width: 100vw;
      height: 100vh;
      overflow: auto;
   }

   .technology__grid-container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
      width: 100%;
      margin-left: -100px;
   } 
}
</style>

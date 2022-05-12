<template>
   <Frontend />
</template>

<script>
import Backend              from '../components/Backend.vue';
import Collapsible          from '../components/Collapsible.vue';
import Database             from '../components/Database.vue';
import Frontend             from '../components/Frontend.vue';
import InteractionDesign    from '../components/InteractionDesign.vue';
import SemanticTechnology   from '../components/SemanticTechnology.vue';
import SystemDevelopment    from '../components/SystemDevelopment.vue';

export default {
   data() {
      return {
         title: {
            backend: 'Backend Development',
            database: 'Database',
            frontend: 'Frontend Development',
            interactionDesign: 'Interaction Design', 
            semanticTechnology: 'Semantic Technology',
            systemDevelopment: 'System Development'
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
   }
};
</script>

<style>

</style>
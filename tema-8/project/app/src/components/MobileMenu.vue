<template>
   <button @click="displayMenu">
      <Icons :icon="'menuOpen'" />
   </button>

      <ul v-if="this.menuVisible">
         <li>
            About
         </li>

         <li>
            Education
         </li>

         <li>
            Projects
         </li>

         <li>
            Contact
         </li>
      
         <li>
            Resume
         </li>
      </ul>
</template>

<script>
import Icons from '../components/Icons.vue';

export default {
   components: {
      Icons,
   },

   data() {
      return {
         menuVisible: false,
      }
   },

   methods: {
      displayMenu() {
         this.menuVisible = !this.menuVisible;
      }
   }

}
</script>

<style>

</style>
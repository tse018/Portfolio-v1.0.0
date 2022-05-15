<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
   </div>
</template>

<script>

import sanityMixin from "../mixins/sanityMixin.js";

export default {
   mixins: [sanityMixin],

   data() {
      return {
         mapbox_id: import.meta.env.VITE_MAPBOX_ID,
      }
   },
   methods: {
   }
}
</script>

<style>
#map { position: absolute; top: 0; bottom: 0; width: 100%; }
</style>
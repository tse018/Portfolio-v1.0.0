<template>
   <Header />
   <RouterView />
</template>

<script>
import Header from "../components/Header.vue";

import seoMixin from "../mixins/seoMixin.js";

export default {
   mixins: [seoMixin],

   components: {
      Header,
   },

   async created() {
      this.metaTags({
         title: "Thanushan Sellathurai Portfolio",
      });

      window.onresize = function() {
         if (window.innerWidth < 1200) {
            this.router.go()
         }
      };
   },
};
</script>

<style>
@import "../style/reset.css";
@import "../style/font.css";
@import "../style/variables.css";
@import "../style/style.css";
</style>

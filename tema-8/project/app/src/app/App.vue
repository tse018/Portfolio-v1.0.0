<template>
   <Header />
   <RouterView  />
   <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import sanityMixin from '../mixins/sanityMixin.js';
import seoMixin from '../mixins/seoMixin.js';

export default {
   mixins: [
      sanityMixin,
      seoMixin,
   ],

   components: {
      Header, 
      Footer 
   },
   
   async created() {
      this.fetchSanity();

      this.metaTags({
         title: 'Thanushan Sellathurai Portfolio',
		});
   },
}
</script>

<style>
@import "../style/reset.css";
@import "../style/font.css";
@import "../style/variables.css";
@import "../style/style.css";
</style>

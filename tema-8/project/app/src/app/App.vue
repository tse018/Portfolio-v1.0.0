<template>
   <Header />
   <RouterView  />
   <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import sanityMixin from '../mixins/sanityMixin.js';
import scrollToMixin from '../mixins/scrollToMixin.js';
import seoMixin from '../mixins/seoMixin.js';

import query from '../groq/portfolio.groq?raw';

export default {
   mixins: [
      sanityMixin,
      scrollToMixin,
      seoMixin,
   ],
   
   async created() {
      await this.sanityFetchPortfolio(query);

      this.metaTags({
         title: 'Thanushan Sellathurai Portfolio',
		});
   },

	components: {
      Header, 
      Footer 
   },
}
</script>

<style>
@import "../style/reset.css";
@import "../style/font.css";
@import "../style/variables.css";
@import "../style/style.css";
</style>

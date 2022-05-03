<template>
   <Header />
   <RouterView :key="$route.fullPath" />
   <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import mediaQuery from '../mixins/mediaQuery.js';

export default {
   mixins: [
      mediaQuery
   ],

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

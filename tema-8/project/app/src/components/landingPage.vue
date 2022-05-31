<template>
      <section class="section-introduction">
         <h1 class="section-introduction__name">
            THANUSHAN SELLATHURAI
         </h1>

         <h2 class="section-introduction__work-title">
            FRONT-END DEVELOPER
         </h2>

         <button class="section-introduction__arrow" @click="scrollTo('about')" aria-label="go to about section">
            <RouterLink class="section-introduction__link" :to="{ name: 'home', params: { section: 'about' } }">
               <Icons :icon="'rigth'" />
            </RouterLink>
         </button>

         <Github />
         <Footer />
      </section>
</template>

<script>
import Icons from "../components/Icons.vue";
import Github from "../components/Github.vue";
import Footer from "../components/Footer.vue";

import sanityMixin from "../mixins/sanityMixin";
import scrollToSectionsMixins from '../mixins/scrollToSectionsMixins.js';

export default {
   mixins: [sanityMixin, scrollToSectionsMixins],

   components: {
      Icons,
      Github,
      Footer,
   },

   computed: {
      data() {
         return this.$store.getters.getData;
      },
   },
};
</script>

<style scoped>

</style>

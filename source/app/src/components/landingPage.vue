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
.section-introduction {
   width: 100vw;
   height: 100vh;
   padding-top: var(--scroll-padding-top);
   display: flex;
   flex-direction: column;
   position: relative;
   animation-duration: 3s;
   animation-name: intro;
}

.section-introduction__name {
   display: flex;
   justify-content: center;
}

.section-introduction__work-title {
   display: flex;
   justify-content: center;
   color: var(--font-color-highligth);
}

.section-introduction__arrow {
   position: absolute;
   right: 0;
   bottom: 50vh;
   margin-right: 20px;
}

@media screen and (max-width: 1200px) {
   .section-introduction__arrow  {
      display: none;
   }
}

@keyframes intro {
   from {
      transform: scale(0);
      opacity: 0;
   }
   to {
      transform: scale(1) rotate(0);
      opacity: 1;
   }
}
</style>
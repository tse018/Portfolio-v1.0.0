<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
      <section class="section-introduction">
         <h1 class="section-introduction__name">
            THANUSHAN SELLATHURAI
         </h1>

         <h2 class="section-introduction__work-title">
            JUNIOR FRONT-END DEVELOPER
         </h2>

         <button class="section-introduction__arrow" @click="scrollTo('about')" aria-label="go to about section">
            <RouterLink class="section-introduction__link" :to="{ name: 'home', params: { section: 'about' } }">
               <Icons :icon="'rigth'" />
            </RouterLink>
         </button>

         <Github />
      </section>
   </div>
</template>

<script>
import Icons from "../components/Icons.vue";
import Github from "../components/Github.vue";

import sanityMixin from "../mixins/sanityMixin";
import scrollToSectionsMixins from '../mixins/scrollToSectionsMixins.js';

export default {
   mixins: [sanityMixin, scrollToSectionsMixins],

   components: {
      Icons,
      Github
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
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   position: relative;
   /* micro adjustment for macbook pro 2017 screen, won´t show scollbar + scroll bit down */
   height: 97vh;
}

.section-introduction__name {
   margin-top: 10%;
   text-align: center;
   font-size: var(--desktop-font-size-title);
}

.section-introduction__work-title {
   width: 100%;
   display: flex;
   justify-content: center;
   color: var(--font-color-highligth);
   font-size: var(--desktop-font-size-undertitle);
}

.section-introduction__arrow {
   position: absolute;
   right: 0;
   bottom: 50%;
}

@media screen and (max-width: 1200px) {
   .section-introduction__arrow {
      display: none;
   }
}
</style>

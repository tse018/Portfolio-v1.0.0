<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
      <section class="section-introduction">
         <h1 class="section-introduction__name">THANUSHAN SELLATHURAI</h1>

         <h2 class="section-introduction__work-title">
            JUNIOR FRONT-END DEVELOPER
         </h2>

         <button class="section-introduction__arrow" @click="scrollTo">
            <RouterLink
               class="section-introduction__link"
               :to="{ name: 'home', params: { id: 'about' } }"
            >
               <Icons :icon="'rigth'" />
            </RouterLink>
         </button>
      </section>
   </div>
</template>

<script>
import Icons from "../components/Icons.vue";
import sanityMixin from "../mixins/sanityMixin";

export default {
   mixins: [sanityMixin],

   components: {
      Icons,
   },

   computed: {
      data() {
         return this.$store.getters.getData;
      },
   },

   methods: {
      scrollTo() {
         const element = document.getElementById("about");
         element.scrollIntoView({ behavior: "smooth" });
      },
   },
};
</script>

<style scoped>

@media screen and (max-width: 600px) {
   .section-introduction__work-title {
      width: 100%;
      padding: 20px;
      margin: auto;
      display: flex;
      justify-content: center;
      font-size: var(--mobile-font-size-secondary-undertitle);
   }
}

.section-introduction {
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   position: relative;
}

.section-introduction__name {
   margin-top: 150px;
   text-align: center;
}

.section-introduction__work-title {
   width: 100%;
   display: flex;
   justify-content: center;
   color: var(--font-color-highligth);
}

.section-introduction__arrow {
   position: absolute;
   right: 0;
   bottom: 0%;
}

@media screen and (max-width: 1200px) {
   .section-introduction__arrow {
      display: none;
   }
}
</style>

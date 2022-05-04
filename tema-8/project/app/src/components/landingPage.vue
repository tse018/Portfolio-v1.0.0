<template>
   <section class="section-introduction">
      <h1 class="section-introduction__name">
         THANUSHAN SELLATHURAI
      </h1>
      
      <h2 class="section-introduction__work-title">
         FRONT-END DEVELOPER
      </h2>

      <h2 class="section-introduction__portfolio">
         PORTFOLIO
      </h2>

      <a href="https://github.com/tse018" target="_blank" class="section-introduction__github">
         Check out my Github!
      </a>

      <button class="section-introduction__left-arrow" @click="scrollTo">
         <Icons :icon="'left'" />
      </button>
   </section>
</template>

<script>
import Icons from '../components/Icons.vue';

export default {
   components: {
      Icons,
   },

   async created() {
      await this.$store.dispatch('fectchSanityData');
      this.$store.state.data;
   },

   computed: {
      data() {
         return this.$store.getters.getData;
      }
   },

   methods: {
      scrollTo() {
         const element = document.getElementById('about');
         element.scrollIntoView({ behavior: 'smooth' });
      },
   }
}
</script>

<style scoped>
/* Mobile */
@media screen and (max-width: 600px) {
   .section-introduction {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
   }
   
   .section-introduction__name {
      grid-column: 1 / 5;
      grid-row: 5;
      margin: 0 0 0 25px;
   }

   .section-introduction__work-title {
      grid-column: 1 / 5;
      grid-row: 6;
      margin: -45px 0 0 30px;
   }

   .section-introduction__portfolio {
      grid-column: 3;
      grid-row: 20;
   }
}

/* Tablet */
@media screen and (min-width: 600px) {
   .section-introduction {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
   }
   
   .section-introduction__name {
      grid-column: 1 / 5;
      grid-row: 5;
      margin: 0 0 0 25px;
   }

   .section-introduction__work-title {
      grid-column: 1 / 5;
      grid-row: 6;
      margin: -45px 0 0 30px;
   }

   .section-introduction__portfolio {
      grid-column: 3;
      grid-row: 20;
   }
}

/* Desktop */
@media screen and (min-width: 1200px) {
   .section-introduction {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 20px;
      margin-top: 100px;
   }

   .section-introduction__name {
      grid-column: 2 / 12;
      grid-row: 3;
      padding: 20px;
   }

   .section-introduction__work-title {
      grid-column: 2 / 13;
      grid-row: 4;
      padding: 20px;
      margin: -100px 0 0 40px;
   }

   .section-introduction__portfolio {
      grid-column: 11;
      grid-row: 8;
   }

   .section-introduction__github {
      grid-column: 3 / 7;
      grid-row: 5;
      border: 2px solid aqua;
      height: 100px;
      color: aqua;
      padding: 25px 0 0 0; 
      opacity: 0.6;
      transition: 0.3s;
      text-align: center;
      text-decoration: none;
   }

   .section-introduction__github:hover {
      opacity: 1;
      background-color: aquamarine;
      color: black;
   }

   .section-introduction__left-arrow {
      grid-column: 12;
      grid-row: 4; 
   }
}
</style>
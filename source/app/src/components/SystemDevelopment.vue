<template>
   <div v-if="loading"> Loading... </div>
   
   <div v-else>
      <section class="system-container">
         <ul class="system-container__elements">
            <li class="system-container__element" v-for="content in systemDevelopment">
               {{ content.technology }}
            </li>
         </ul>
      </section>
   </div>
</template>

<script>
import sanityMixin from '../mixins/sanityMixin';

export default {
   
   mixins: [sanityMixin],

   computed: {
      systemDevelopment() {
         return this.$store.getters.getSystemDevelopment.sort((a, b) => {
            return (a.technology < b.technology ? 1: -1);
         });
      },
   },
};
</script>

<style scoped>
.system-container {
   border: 2px solid var(--font-color-highligth);
   width: 500px;
   margin: -20px 0 0 -20px;
}

.system-container__elements {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 20px;
}

.system-container__element {
   text-align: center;
   padding: 10px;
}

@media screen and (max-width: 1200px) {
   .system-container {
      width: 300px;
   }

   .system-container__elements {
      grid-template-columns: repeat(1, 1fr);
   }
}
</style>
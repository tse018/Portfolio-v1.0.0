<template>
   <section class="education-container">
      <h2 class="education-container__title">
         {{ title }}
      </h2>

      <div class="education-container__content-container"  v-for="content in education">
         <div class="education-container__tabs-school">
            <button>
               {{ content.institute }}
            </button>
         </div>

         <div class="education-container__tabs-course">
            kurs
         </div>

         <div class="education-container__tabs-learning">
            learning outcome
         </div>
      </div>
   </section>
</template>

<script>
export default {
   data() {
      return {
         title: 'What have I studied',
      }
   },

   computed: {
      education() {
         return this.$store.getters.getEducation;
      },

      course() {
         return this.$store.getters.getCourse;
      }
   },
}
</script>

<style>
.education-container {
   width: 100%;
   height: 100%;
   border: 2px solid red;
}
</style>
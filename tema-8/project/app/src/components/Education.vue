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
.education-container{
   margin-top: 100px;
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   gap: 20px;
}

.education-container__title {
   grid-column: 5 / 9;
}

.education-container__content-container {
   grid-column: 3 / 12;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
}

.education-container__tabs-school {
   grid-column: 1;
}

.education-container__tabs-course {
   grid-column: 2;
   border: 2px solid red;
}

.education-container__tabs-learning {
   grid-column: 3;
   border: 2px solid red;
}
</style>
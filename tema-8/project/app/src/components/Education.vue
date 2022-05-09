<template>
   <section class="education-container">
      <h2 class="education-container__title">
         {{ title }}
      </h2>

      <div class="education-container__content-container">
         <div class="education-container__tabs-container">
            <ul class="education-container__tabs-elements">
               <li class="education-container__tabs-element" v-for="school in education">
                  {{ school.institute}}
               </li>
            </ul>
         </div>

         <div class="education-container__tabs-content">
            <p class="education-container__tabs-paragraph" v-for="content in education">
               {{ content.description }}
            </p>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   data() {
      return {
         title: 'What have I studied',
         activeTab: 1,
      }
   },

   computed: {
      education() {
         return this.$store.getters.getEducation;
      },
   },
};
</script>

<style>
.education-container {
   width: 100%;
   margin: 100px 0 0 0;
}

.education-container__title {
   text-align: center;
}

.education-container__content-container {
   display: flex;
   min-height: 450px;
   margin: 0 80px;
   border: 2px solid red;
}

.education-container__tabs-container {
   width: 50%;
   height: 450px;
   padding: 50px;
}

.education-container__tabs-element {
   padding: 20px;
}

.education-container__tabs-content {
   border: 2px solid red;
   padding: 20px;
   width: 100%;
}





</style>
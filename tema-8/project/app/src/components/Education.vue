<template>
   <section class="education-container">
      <h2 class="education-container__title">
         Where have I studied
      </h2>

      <div class="education-container__tabs-container" v-for="school in education">
         <div class="education-container__navigation-container">
            <ul class="education-container__navigation-elements">
               <li class="education-container__navigation-element">
                  {{ school.institute }}
               </li>
            </ul>
         </div>

         <div class="education-container__tabs-content">
            <p class="education-container__tabs-paragraph" v-for="paragraph in school.description">
               {{ paragraph.children[0].text }}
            </p>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   data() {
      return {
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
   padding: 100px 0 0 0;
}

.education-container__title {
   text-align: center;
}

.education-container__tabs-container {
   display: flex;
   min-height: 100px;
   margin: 0 80px;
   border: 2px solid red;
}

.education-container__navigation-container {
   min-width: max-content;
   max-height: 100px;
   padding: 20px;
   border: 2px solid white;
}

.education-container__navigation-elements {
   padding-bottom: 50px;
}


.education-container__tabs-content {
   padding: 20px;
   border: 2px solid green;
   margin-left: 20px;
}
</style>
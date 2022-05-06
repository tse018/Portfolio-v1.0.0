<template>
   <section class="education-container">
      <h2 class="education-container__title">
         {{ title }}
      </h2>

      <div class="education-container__tabs-container">
         <div class="education-container__tab-container">
         </div>

         <div class="education-container__content-container">
            <div class="education-container__content-panel">
               <p class="education-container__content-rendered">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dicta magni odio cum reprehenderit, mollitia iure ipsa quae delectus commodi omnis iste sunt sit minima temporibus, adipisci ea repudiandae iusto harum corporis vero autem consectetur earum nulla! Quia asperiores reiciendis dicta sequi est et at, ratione nisi mollitia ad quae? Recusandae optio, laudantium et nemo, perspiciatis est nesciunt impedit accusamus distinctio unde, pariatur quasi iste omnis ipsam. Quos dicta repellat architecto adipisci quisquam ratione numquam nulla facere. Dignissimos cum perspiciatis maiores quos tempora ab labore in nobis commodi sunt quisquam nemo, ducimus itaque odit rem, doloremque incidunt veniam quae at.
               </p>
            </div>
         </div>

         <div>
            gghj 
         </div>
      </div>
   </section>
</template>

<script>
import EducationContent from '../components/EducationContent.vue';

export default {
   data() {
      return {
         title: 'Where I have studied'
      }
   },

   components: {
      EducationContent,
   },
   methods: {
   }
}
</script>

<style>
.education-container {
   margin-top: 100px;
   border: 2px solid red;
   display: grid;
   grid-template-columns: repeat(12, 1fr);
}

.education-container__title {
   grid-column: 5 / 9;
}

.education-container__tabs-container {
   grid-column: 4 / 10;
   display: flex;
}

.education-container__tab-container {
   position: relative;
   z-index: 3;
   width: max-content;
   list-style: none;
}

.education-container__tab-button {
   display: flex;
   align-items: center;
   width: 100%;
   padding: 0 20px 2px;
   border-left: 2px solid red;
   text-align: left;
   white-space: nowrap;
}

.education-container__tab-content {
   position: relative;
   width: 100%;
   margin-left: 20px;
}

.education-container__content-panel {
   width: 100%;
   height: auto;
   padding: 10px 5px;
}

</style>
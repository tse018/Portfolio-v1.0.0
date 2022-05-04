<template>
      <EducationContainer>
         <EducationContent name="description" selected="false">
            <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            </p>
         </EducationContent>
         <EducationContent name="list">
            <ul>
               <li>Item 1</li>
               <li>Item 2</li>
               <li>Item 3</li>
               <li>Item 4</li>
               <li>Item 5</li>
            </ul>
         </EducationContent>
         <EducationContent name="table">
            <table>
               <tr>
                  <th>Name</th>
                  <th>Value</th>
               </tr>
               <tr>
                  <td>Cheese</td>
                  <td>Yellow</td>
               </tr>
               <tr>
                  <td>Apple</td>
                  <td>Red</td>
               </tr>
            </table>
         </EducationContent>
      </EducationContainer>
</template>

<script>
import EducationContainer from "../components/EducationContainer.vue";
import EducationContent from "../components/EducationContent.vue";

export default {
   components: {
      EducationContainer,
      EducationContent,
   },
};
</script>

<style>


</style>

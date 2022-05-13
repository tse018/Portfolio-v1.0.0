<template>
   <section class="collapsible">
      <div class="collapsible__header">
         <button class="collapsible__toggle" @click="toggle">
            <div class="collapsible__name">
               {{ title }}
            </div>
         </button>
      </div>

      <div class="collapsible__content" v-show="collapsed">
         <slot />
      </div>
   </section>
</template>

<script>
import Icons from '../components/Icons.vue';

export default {
   components: {
      Icons,
   },

   data() {
      return {
         collapsed: false,
      };
   },

   props: {
      title: {
         type: String,
         default: "Click to see more",
      },
   },

   computed: {
      toggleArrow() {
         return {
            
         }
      }
   },

   methods: {
      toggle() {
         this.collapsed = !this.collapsed;
      },
   },
};
</script>

<style>
.collapsible {
   position: relative;
   display: flex;
   flex-direction: column;
   margin: 0 auto;
   max-width: 550px;
   margin-bottom: 20px;
}

.collapsible__name {
   padding: 20px;
   color: var(--font-color-highligth);
   border: 2px solid var(--font-color-highligth);
   border-radius: 20%;
   margin: 20px;
   min-width: 500px;
}

.collapsible__content {
   padding: 20px;
   width: 500px;
   margin-top: -45px;
   color: var(--font-color-highligth);
}
</style>

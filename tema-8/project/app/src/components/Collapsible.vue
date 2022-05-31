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
export default {
   data() {
      return {
         collapsed: false,
      };
   },

   props: {
      title: {
         type: String,
         // if props title fails, this will show instead
         default: "Click to see more",
      },
   },

   methods: {
      toggle() {
         this.collapsed = !this.collapsed;
      },
   },
};
</script>

<style scoped>
   .collapsible {
      position: relative;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
   }

   .collapsible__name {
      padding: 20px;
      color: var(--font-color-highligth);
      border: 2px solid var(--font-color-highligth);
      border-radius: 20%;
      min-width: 500px;
      transition: 2s;
   }

   .collapsible__name:hover,
   .collapsible__name:focus {
      box-shadow: inset 500px 0 0 0 var(--font-color-highligth);
      color: black;
   }

   .collapsible__content {
      padding: 20px;
      width: 500px;
      min-height: 100px;
      margin: -30px -17px;
      color: var(--font-color-highligth);
   }
</style>

<template>
   <section class="collapsible">
      <button class="collapsible__toggle" @click="toggle">
         <h3 class="collapsible__name">
            {{ title }}
         </h3>
      </button>

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
   transition: 3s;
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
   color: var(--font-color-highligth);
}

@media screen and (max-width: 1200px) {
   .collapsible__name {
      min-width: 300px;
   }

   .collapsible__content {
      width: 300px;
   }
}
</style>

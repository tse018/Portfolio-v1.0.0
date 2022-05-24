<template>
   <main class="main-container" ref="scroll_container" @mousewheel="horizontalScrolling">
      <slot></slot>
   </main>
</template>

<script>
export default {
   computed: {
      horizontalScrolling() {
         const scrollContainer = this.$refs["scroll_container"];

         scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
         });
      },
   },
};
</script>

<style>
.main-container {
      height: 100%;
      display: flex;
   }

   section {
   min-width: 100%;
   min-height: 100%;
   overscroll-behavior: contain;
}

</style>
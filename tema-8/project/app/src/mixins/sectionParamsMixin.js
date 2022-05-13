export default {
   /*
   mounted() {
      const routet = this.$route.params;
      const element = document.getElementById(routet);
      element.scrollIntoView({behavior: "smooth" });
      window.location.element(`#${routet}`);
   },
   */

   async beforeRouteUpdate(to, from) {
      const routet = this.$route.params.id;
      const element = document.getElementById(routet);
      element.scrollIntoView({ behavior: "smooth" });
      window.location.element(`#${routet}`);
   },
};

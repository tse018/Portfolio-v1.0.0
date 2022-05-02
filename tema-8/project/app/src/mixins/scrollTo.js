export default {
   mounted() {
      const routet = this.$route.params.id;
      const element = document.getElementById(routet);
      element.scrollIntoView({behavior: "smooth" });
      window.location.href(`#${routet}`);
   },
   

   methods: {
      scrollTo(destination) {
         const element = document.getElementById(destination);
         element.scrollIntoView({ behavior: 'smooth' });
         window.location.href(`#${destination}`);
      }
   }
};

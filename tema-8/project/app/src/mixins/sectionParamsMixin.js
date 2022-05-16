export default {
   methods: {
      changeSection() {
         const routet = this.$route.params.id;
         console.log(routet)
         const element = document.getElementById(routet);
         element.scrollIntoView({ behavior: "smooth" });
         window.location.element(`#${routet}`);
      }
   },
};
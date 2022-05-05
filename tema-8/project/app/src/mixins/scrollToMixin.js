export default {
   mounted() {
      const routet = this.$route.params.id;
      const element = this.$refs["anchor"];
      element.scrollIntoView({behavior: "smooth" });
      window.location.href(`#${routet}`);
   },
};


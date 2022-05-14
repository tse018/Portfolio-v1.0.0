export default {
/*
   mounted() {
      setTimeout(() => this.scrollTo(this.$routet.hash), 1);
   },

   methods: {
      scrollTo() {
         const routet = this.$route.params.id;
         const element = document.getElementById(routet);
         element.scrollIntoView({ behavior: "smooth" });
         window.location.element(`#${routet}`);
      },
   },
*/
   /*
   mounted() {
      const routet = this.$route.params;
      const element = document.getElementById(routet);
      element.scrollIntoView({behavior: "smooth" });
      window.location.element(`#${routet}`);
   },
*/
   /*
   async beforeRouteUpdate(to, from) {
      const routet = this.$route.params.id;
      const element = document.getElementById(routet);
      element.scrollIntoView({ behavior: "smooth" });
      window.location.element(`#${routet}`);
   }, 
*/
   /*
   methods: {
      /*
      ScrollToNextAchor(routeName, toHash) {
         const fromHash = Router.history.current.hash;
         fromHash !== toHash || !fromHash
            : Router.push({ name: routeName, hash: fromHash }, undefined, () => {
               window.location.href = toHash;
               console.log('hey')
            });
      }, 
*/
   /*
      anchorHashCheck() {
         if (window.location.hash === this.$route.hash) {
            const el = document.getElementById(this.$route.hash.slice(1));
            if (el) {
               window.scrollTo(0, el.offsetTop);
            }
         }
      },
*/
};

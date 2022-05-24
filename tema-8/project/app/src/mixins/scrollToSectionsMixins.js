export default {
   data() {
      return {
         navbar: [
            {
               id: "about",
               section: "ABOUT",
            },
            {
               id: "education",
               section: "EDUCATION",
            },
            {
               id: "tech",
               section: "TECH",
            },
            {
               id: "projects",
               section: "PROJECTS",
            },
            {
               id: "contact",
               section: "CONTACT",
            },
         ],
      };
   },

   methods: {
      scrollTo(anchor) {
         const element = document.getElementById(anchor);
         element.scrollIntoView({ behavior: "smooth" });
         
      },
   },
};

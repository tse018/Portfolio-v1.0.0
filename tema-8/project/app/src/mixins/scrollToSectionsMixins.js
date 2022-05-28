export default {
   data() {
      return {
         navbar: [
            {
               id: 'HOME',
               path: "home"
            },
            {
               id: 'ABOUT',
               path: "about"
            },
            {
               id: 'EDUCATION',
               path: "education"
            },
            {
               id: 'TECH',
               path: "tech"
            },
            {
               id: 'PROJECTS',
               path: "projects"
            },
            {
               id: 'CONTACT',
               path: "contact"
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

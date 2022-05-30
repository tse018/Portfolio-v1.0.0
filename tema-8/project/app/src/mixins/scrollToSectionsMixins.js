// been used both for components MobileMenu and Header v-for loop
export default {
   data() {
      return {
         navbar: [
            {
               // could do " ", but then users could click on header navigation twice will trigger
               // scrollIntoView function and able to go back and forth which could cause bad user experience
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

import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Education from "../components/Education.vue";
import LandingPage from "../components/landingPage.vue";
import Projects from "../components/Projects.vue";
import Icons from "../components/Icons.vue";
import Tech from "../components/TechSection.vue";

export default {
   data() {
      return {
         components: [
            {
               id: "home",
               name: "LandingPage",
               path: "home"
            },
            {
               id: "about",
               name: "About",
               path: "about"
            },
            {
               id: "education",
               name: "Education",
               path: "education"
            },
            {
               id:"tech",
               name: "Tech",
               path: "tech"
            },
            {
               id: "projects",
               name: "Projects",
               path: "projects"
            },
            {
               id: "contact",
               name: "Contact",
               path: "contact",
            },
         ],
      };
   },

   components: {
      LandingPage,
      About,
      Education,
      Projects,
      Contact,
      Icons,
      Tech,
   },

   computed: {
      isInViewPort(el) {
         const rect = el.getBoundingClientRect();
         return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeigth) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
         );
      },
   },
};

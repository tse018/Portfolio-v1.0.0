import sanity from "../sanity.js";
import query from "../groq/bigSanityFetch.groq?raw";

export default {
   state() {
      return {
         data: [],
         error: "",
      };
   },

   mutations: {
      setDataContent(state, data) {
         state.data = data;
      },
      setError(state, error) {
         state.error = error;
      },
   },

   actions: {
      async fectchSanityData(state) {
         const response = await sanity.fetch(query);
         try {
            if (response) {
               state.commit("setDataContent", response);
            } else {
               throw new Error("noe gikk galk");
            }
         } catch (error) {
            state.commit("setError", error);
         }
      },
   },

   getters: {
      getData(state) {
         return state.data;
      },

      getAbout(state) {
         return state.data.filter((about) => about._type === "about");
      },

      getEducation(state) {
         return state.data.filter(
            (education) => education._type === "education"
         );
      },

      getProjects(state) {
         return state.data.filter((project) => project._type === "project");
      },

      getTech(state) {
         return state.data.filter((tech) => tech._type === 'tech');
      },

      getCourse(state) {
         return state.data.filter((course) => course._type === 'course');
      },

      getError(state) {
         return state.error;
      },
   },
};

export default {
   state() {
      return {
         techStack: [],
      }
   },

   mutations: {
      setTechContent(state, tech) {
         state.about = tech;
      },
   },

   actions: {
      addTechContent({commit}, tech) {
         commit('setTechContent', tech);
      },
   },

   getters: {
      getTechContent(state) {
         return state.techStack;
      },
   },
};
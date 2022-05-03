export default {
   state() {
      return {
         education: [],
      }
   },

   mutations: {
      setEducationContent(state, education) {
         state.education = education;
      },
   },

   actions: {
      addEducationContent({commit}, education) {
         commit('setAboutContent', education);
      },
   },

   getters: {
      getEducationContent(state) {
         return state.education;
      },
   },
};
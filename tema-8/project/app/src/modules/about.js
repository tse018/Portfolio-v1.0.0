export default {
   state() {
      return {
         about: [],
      }
   },

   mutations: {
      setAboutContent(state, about) {
         state.about = about;
      },
   },

   actions: {
      addAboutContent({commit}, about) {
         commit('setAboutContent', about);
      },
   },

   getters: {
      getAboutContent(state) {
         return state.about;
      },
   },
};
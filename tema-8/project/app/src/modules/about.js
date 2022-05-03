export default {
   state() {
      return {
         about: [],
         errors: ''
      }
   },

   mutations: {
      setAboutContent(state, content) {
         state.about = content;
      },
      setError(state, errors) {
         state.errors = errors
      }
   },

   actions: {
      addAboutContent({commit}, content) {
         commit('setAboutContent', content);
      },
   },

   getters: {
      getAboutContent(state) {
         return state.about;
      },
      getError(state) {
         return state.errors;
      }
   },
};
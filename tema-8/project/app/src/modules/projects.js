export default {
   state() {
      return {
         projects: [],
      }
   },

   mutations: {
      setProjectContent(state, project) {
         state.project = project;
      },
   },

   actions: {
      addProjectsContent({commit}, project) {
         commit('setAboutContent', project);
      },
   },

   getters: {
      getProjectsContent(state) {
         return state.project;
      },
   },
};
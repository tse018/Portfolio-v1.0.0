export default {
   state() {
      return {
         portfolio: [],
      }
   },

   mutations: {
      setPortfolioContent(state, content) {
         state.portfolio = content;
      },
   },

   actions: {
      addPortfolioContent({commit}, content) {
         commit('setPortfolioContent', content);
      },
   },

   getters: {
      getPortfolioContent(state) {
         return state.portfolio;
      },
   },
};
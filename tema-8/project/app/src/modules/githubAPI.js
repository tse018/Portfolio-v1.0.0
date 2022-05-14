export default {
   state() {
      return {
         data: [],
         error: '',
      };
   },

   mutations: {
      setGithubContent(state, data) {
         state.data = data;
      },

      setError(state, error) {
         state.error = error;
      }
   },

   actions: {
      async fetchGithubData(state) {
         const response = await fetch('https://api.github/graphql',{ method: 'Post', body: JSON.stringify(graphql), headers: headers});
         const data = await response.json();
         try {
            if (response.status >= 200 && response.status < 300) {
               state.commit("setGithubContent", response);
            } else {
               throw new Error("Something Went Wrong");
            }
         } catch (error) {
            state.commit("setError", error);
         }
      }
   },

   getters: {
      getGithubData(state) {
         return state.data;
      }
   }
}
export default {
   state() {
      return {
         localStoreName: 'ROUTE' 
      }
   },

    /* Local Storage */
   setToLocalStorage({state}) {
      window.localStorage.setItem(state.localStoreName);
   },

   getFromLocalStorage({ state, commit }) {
      const localCartState = window.localStorage.getItem(state.localStoreName);
      const localCartStateObject = JSON.parse(localCartState);
   },

   removeFromLocalStorage({state}) {
      window.localStorage.removeItem(state.localStorageName);
   },

   clearLocalStorage() {
      window.localStorage.clear();
   }
},
}
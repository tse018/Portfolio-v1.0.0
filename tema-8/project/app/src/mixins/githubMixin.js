export default {
   data() {
      return {
         loading: null,
         data: null,
      }
   },

   methods: {
      fetchGithub() {
         this.$store.dispatch('fetchGithubData' )
      }
   }
}
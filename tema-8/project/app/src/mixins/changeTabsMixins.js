export default {
   data() {
      return {
         currentTab: "",
      }
   },

   methods: {
      changeTab(_id) {
         this.currentTab = _id;
      },
   },
}
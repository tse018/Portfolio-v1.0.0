export default {
   data() {
      return {
         currentTab: "",
         active: false,
      }
   },


   methods: {
      changeTab(_id) {
         this.currentTab = _id;
      },
   },
}
export default {
   data() {
      return {
         readMoreClicked: false,
      }
   },

   computed: {
      buttonText() {
         return this.readMoreClicked ? "Read less" : "Read more";
      },
   },

   methods: {
      readMore() {
         return (this.readMoreClicked = !this.readMoreClicked);
      }
   }
}
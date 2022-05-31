export default {
   data() {
      return {
         readMoreClicked: false,
      }
   },

   computed: {
      buttonText() {
         return this.readMoreClicked ? "Read Less" : "Read More";
      },
   },

   methods: {
      readMore() {
         return this.readMoreClicked = !this.readMoreClicked;
      }
   }
}
export default {
   data() {
      return {
         breakPoints: {
            mobile: 600,
            tablet: 980,
            desktop: 1200,
         },
         windowWith: 0,
         currentBreakPoint: ''
      }
   },

   mounted() {
      if (this.breakPoints) {
         this.setWindowWidth()
         this.setCurrentBreakPoint()

         window.addEventListener('resize', () => {
            this.setWindowWidth()
            this.setCurrentBreakPoint
         })
      }
   },

   computed: {
      mobile() {
         return this.windowWidth >= this.breakPoints.mobile
      },

      tablet() {
         return this.windowWidth <= this.breakPoints.tablet
      },

      desktop() {
         return this.windowWidth < this.breakPoints.desktop
      },
   },

   methods: {
      setWindowWidth() {
         this.windowWidth = window.innerWidth
      },

      setCurrentBreakPoint() {
         if (this.windowWidth < this.breakPoints.mobile) {
            this.currentBreakPoint = 'mobile'
            console.log('mobile')
         } else if (
            this.windowWidth > this.breakPoints.mobile && 
            this.windowWidth < this.breakPoints.tablet
         ) {
            this.currentBreakPoint = 'tablet'
            console.log('tablet')
         } else if (
            this.windowWidth > this.breakPoints.tablet &&
            this.windowWidth >= this.breakPoints.desktop
         ) {
            this.currentBreakPoint = 'desktop'
            console.log('desktop')
         }
      }
   }
}
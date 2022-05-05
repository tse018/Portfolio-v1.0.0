      mouseMove(e) {
         const width = this.offsetWidth;
         const height = this.offsetHeight;

         let x = e.offsetX
         let y = e.offsetY

         if(this !== e.target) {
            x = x + e.target.offsetLeft;
            y = y + e.target.offsetTop;
         }

         this.xWalk= Math.round(( x / width * this.walk) - (this.walk / 2))
         this.yWalk = Math.round((y / height * this.walk) - (this.walk / 2))

         console.log(this.xWalk)

      },
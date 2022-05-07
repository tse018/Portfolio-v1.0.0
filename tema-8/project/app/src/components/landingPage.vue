<template>
   <section ref="container" @mousemove="mouseMove" class="section-introduction">
      <h1 class="section-introduction__name" :style="style">
         THANUSHAN SELLATHURAI
      </h1>

      <h2 class="section-introduction__work-title">
         FRONT-END DEVELOPER
      </h2>

      <h2 class="section-introduction__portfolio">PORTFOLIO</h2>

      <a href="https://github.com/tse018" target="_blank" class="section-introduction__github">
         Check out my Github!
      </a>

      <button class="section-introduction__left-arrow" @click="scrollTo">
         <Icons :icon="'left'" />
      </button>
   </section>
</template>

<script>
import Icons from "../components/Icons.vue";

export default {
   data() {
      return {
         walk: 100,
         xWalk: null,
         yWalk: null,
      };
   },


   components: {
      Icons,
   },

   computed: {
      data() {
         return this.$store.getters.getData;
      },

      style() {
         return {
            textShadow: `${this.xWalk}px ${this.yWalk}px var(--font-shadow-effect)`,
         }
      },
   },

   methods: {
      scrollTo() {
         const element = document.getElementById("about");
         element.scrollIntoView({ behavior: "smooth" });
      },

      mouseMove(e) {
         /* https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively */

         const width = this.$refs['container'].offsetWidth;
         const heigth = this.$refs['container'].offsetHeight;

         let x = e.offsetX;
         let y = e.offsetY;
         
         if(this !== e.target) {
            x = x + e.target.offsetLeft;
            y = y + e.target.offsetTop;
         }

         this.xWalk= Math.round((x / width * this.walk) - (this.walk / 2));
         this.yWalk = Math.round((y / heigth * this.walk) - (this.walk / 2));
      },
   },
};
</script>

<style scoped>
/* Mobile 0 - 600px */
@media screen and (max-width: 600px) {
   .section-introduction {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      width: 100%;
      margin-bottom: 40px;
   }

   .section-introduction__name {
      grid-column: span 3;
      text-align: center;
      padding: 20px;
      min-height: 100px;
      margin: 100px 0 0 0px;
   }

   .section-introduction__work-title {
      grid-column: span 4;
      text-align: left;
      padding: 20px;
      min-height: 100px;
      margin: -50px 0 0 0;
   }

   .section-introduction__github {
      grid-column: span 3;
      text-align: left;
      padding: 20px;
      margin: 0 20;
      min-height: 50px;
      border: 2px solid var(--font-color-highligth);
      color: var(--font-color-highligth);
      text-align: center;
      text-decoration: none;
      transition: 0.5s;
   }

   .section-introduction__github:hover,
   .section-introduction__github:focus {
      box-shadow: inset 400px 0 0 var(--font-color-highligth);
      color: black;
   }

   .section-introduction__portfolio {
      grid-column: 3;
      order: 1;
      text-align: center;
      padding: 20px;
      min-height: 100px;
      margin: 100px -60px 0 0;
      animation: color-change 3s infinite;
   }

   @keyframes color-change {
      0% {
         color: white;
      }
      50% {
         color: red;
      }
      100% {
         color: aqua;
      }
   }

   .section-introduction__left-arrow {
      display: none;
   }
}

/* tablet 601px - 960px */
@media screen and (min-width:601px) and (max-width:980px){
   .section-introduction {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 20px;
      width: 100%;
      margin-bottom: 40px;
   }

   .section-introduction__name {
      grid-column: span 8;
      text-align: center;
      padding: 20px;
      min-height: 100px;
      margin: 100px 0 0 0;
      font-size: var(--tablet-font-size-title);
   }

   .section-introduction__work-title {
      grid-column: span 8;
      text-align: center;
      padding: 20px;
      min-height: 100px;
      margin: -50px 0 0 0;
   }

   .section-introduction__github {
      grid-column: 2 / span 6;
      text-align: left;
      padding: 20px;
      margin: 0 auto 0;
      min-height: 50px;
      border: 2px solid var(--font-color-highligth);
      color: var(--font-color-highligth);
      text-align: center;
      text-decoration: none;
      transition: 0.5s;
   }

   .section-introduction__github:hover,
   .section-introduction__github:focus {
      box-shadow: inset 400px 0 0 var(--font-color-highligth);
      color: black;
   }

   .section-introduction__portfolio {
      grid-column: 6;
      order: 1;
      grid-row: 4;
      margin-top: 100px;
      text-align: center;
      padding: 20px;
      min-height: 100px;
      margin: 60px -100px 0 0;
      animation: color-change 3s infinite;
   }

   @keyframes color-change {
      0% {
         color: white;
      }
      50% {
         color: red;
      }
      100% {
         color: aqua;
      }
   }

   .section-introduction__left-arrow {
      display: none;
   }
}

/* bigger tablet from 981px to 1200px */
@media screen and (min-width: 981px) and (max-width: 1200px) {
   .section-introduction {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 20px;
      width: 100%;
   }

   .section-introduction__name {
      grid-column: span 12;
      margin-top: 100px;
      text-align: center;
      padding: 20px;
      min-height: 100px;
      font-size: var(--desktop-font-size-undertitle);
   }

   .section-introduction__work-title {
      grid-column: 3 / span 12;
      text-align: left;
      padding: 20px;
      min-height: 100px;
      margin: -80px 0 0 80px;
      font-size: var(--desktop-font-size-undertitle);
   }

   .section-introduction__github {
      grid-column: 6 / 12;
      border: 2px solid var(--font-color-highligth);
      color: var(--font-color-highligth);
      text-align: center;
      padding: 20px;
      max-height: 100px;
      transition: 0.5s;
      text-align: center;
      text-decoration: none;
      font-size: var(--tablet-font-size-secondary-undertitle);
   }

   .section-introduction__github:hover,
   .section-introduction__github:focus {
      box-shadow: inset 400px 0 0 0 var(--font-color-highligth);
      color: black;
   }

   .section-introduction__left-arrow {
      display: block;
      position: absolute;
      bottom: 30%;
      left: 50%;
      right: 50%;
      transform: rotate(90deg);
   }

   .section-introduction__portfolio {
      grid-column: 12;
      order: 1;
      grid-row: 4;
      margin-top: 100px;
      text-align: center;
      padding: 20px;
      min-height: 100px;
      animation: color-change 3s infinite;
      font-size: var(--desktop-font-size-undertitle);
   }

   @keyframes color-change {
      0% {
         color: white;
      }
      50% {
         color: red;
      }
      100% {
         color: aqua;
      }
   }
}

/* desktop and higher */
@media screen and (min-width: 1200px) {
   .section-introduction {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 20px;
      width: 100%;
   }

   .section-introduction__name {
      grid-column: span 12;
      margin-top: 100px;
      text-align: center;
      padding: 20px;
      min-height: 100px;
   }

   .section-introduction__work-title {
      grid-column: 2 / span 10;
      text-align: center;
      padding: 20px;
      min-height: 100px;
      margin: -80px 0 0 -250px;
   }

   .section-introduction__github {
      grid-column: 3 / span 4;
      margin-top: 100px;
      border: 2px solid var(--font-color-highligth);
      color: var(--font-color-highligth);
      text-align: center;
      padding: 20px;
      min-height: 100px;
      transition: 0.8s;
      text-align: center;
      text-decoration: none;
      font-size: var(--tablet-font-size-secondary-undertitle);
   }

   .section-introduction__github:hover,
   .section-introduction__github:focus {
      box-shadow: inset 600px 0 0 0 var(--font-color-highligth);
      color: black;
   }

   .section-introduction__left-arrow {
      position: absolute;
      right: 0;
      top: 50%;
   }

   .section-introduction__portfolio {
      grid-column: 11;
      grid-row: 4;
      order: 1;
      text-align: center;
      padding: 20px;
      min-height: 100px;
      animation: color-change 3s infinite;
      font-size: var(--desktop-font-size-undertitle);
   }

   @keyframes color-change {
      0% {
         color: white;
      }
      50% {
         color: red;
      }
      100% {
         color: aqua;
      }
   }
}
</style>

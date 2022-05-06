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
/* Mobile */
@media screen and (max-width: 600px) {
   .section-introduction {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
   }

   .section-introduction__name {
      grid-column: 1 / 5;
      grid-row: 5;
      margin: 0 0 0 25px;
   }

   .section-introduction__work-title {
      grid-column: 1 / 5;
      grid-row: 6;
      margin: -45px 0 0 30px;
   }

   .section-introduction__portfolio {
      grid-column: 3;
      grid-row: 20;
   }
}

/* Tablet */
@media screen and (min-width: 600px) {
   .section-introduction {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
   }

   .section-introduction__name {
      grid-column: 1 / 5;
      grid-row: 5;
      margin: 0 0 0 25px;
   }

   .section-introduction__work-title {
      grid-column: 1 / 5;
      grid-row: 6;
      margin: -45px 0 0 30px;
   }

   .section-introduction__portfolio {
      grid-column: 3;
      grid-row: 20;
   }
}

/* Desktop */
@media screen and (min-width: 1200px) {
   .section-introduction {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 20px;
      margin-top: 100px;
   }

   .section-introduction__name {
      grid-column: 2 / 12;
      grid-row: 3;
      padding: 20px;
   }

   .section-introduction__work-title {
      grid-column: 2 / 13;
      grid-row: 4;
      padding: 20px;
      margin: -100px 0 0 40px;
   }

   .section-introduction__portfolio {
      grid-column: 11;
      grid-row: 8;
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

   .section-introduction__github {
      grid-column: 3 / 7;
      grid-row: 5;
      border: 2px solid var(--font-color-highligth);
      height: 100px;
      color: var(--font-color-highligth);
      padding: 25px 0 0 0;
      transition: 0.5s;
      text-align: center;
      text-decoration: none;
   }

   .section-introduction__github:hover,
   .section-introduction__github:focus {
      box-shadow: inset 14em 0 0 0 var(--font-color-highligth);
      color: black;
   }

   .section-introduction__left-arrow {
      grid-column: 12;
      grid-row: 4;
   }
}
</style>

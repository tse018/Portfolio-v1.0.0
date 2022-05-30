<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
      <section class="contact-container">
         <div class="contact-container__content-container" v-for="data in contact">
            <h3 class="contact-container__title">
               {{ data.title }}
            </h3>

            <div class="contact-container__paragraphs" v-for="paragraph in data.description">
               {{ paragraph.children[0].text }}
            </div>

            <a class="contact-container__mail" :href="`mailto:${data.eMail}`" target="_blank"> Say Hello </a>
         </div>

         <div class="contact-container__map-container">
            <div class="contact-container__map" id="map"></div>
         </div>
      </section>
   </div>
</template>

<script>
import sanityMixin from "../mixins/sanityMixin.js";

import mapboxgl from "mapbox-gl";

export default {
   mixins: [sanityMixin],


   data() {
      return {
         mapbox_id: import.meta.env.VITE_MAPBOX_ID,
         mapbox_map_id: import.meta.env.VITE_MAPBOX_MAP,
      };
   },

   mounted() {
      this.creatingMapbox();
   },

   computed: {
      contact() {
         return this.$store.getters.getContact;
      },
   },

   methods: {
      creatingMapbox() {
         mapboxgl.accessToken = "pk.eyJ1IjoidHNlMDE4IiwiYSI6ImNsMmtkczJ2ZTAybmozY25reXE3MXpmMWUifQ.sm5TPLNYLn4Ozr1r7TCCZQ";
         const map = new mapboxgl.Map({
            container: "map", // container ID
            style: "mapbox://styles/tse018/cl3fy4bep000i14qii6hxjxt0", // style URL
            center: [10.818701, 59.904822], // starting position [lng, lat]
            zoom: 11, // starting zoom
         });

         this.blinkingCircle(map);
         this.message(map);
      },

      message(map) {
         const popup = new mapboxgl.Popup({ closeOnClick: false })
            .setLngLat([10.757933, 59.911491])
            .setHTML(
               '<p class="mapbox__email">thanushan.s@hotmail.com</p>'
            )
            .addTo(map);
      },

      blinkingCircle(map) {
         const size = 200;

         // This implements `StyleImageInterface`
         // to draw a pulsing dot icon on the map.
         const pulsingDot = {
            width: size,
            height: size,
            data: new Uint8Array(size * size * 4),

            // When the layer is added to the map,
            // get the rendering context for the map canvas.
            onAdd() {
               const canvas = document.createElement("canvas");
               canvas.width = this.width;
               canvas.height = this.height;
               this.context = canvas.getContext("2d");
            },

            // Call once before every frame where the icon will be used.
            render() {
               const duration = 1000;
               const t = (performance.now() % duration) / duration;

               const radius = (size / 2) * 0.3;
               const outerRadius = (size / 2) * 0.7 * t + radius;
               const context = this.context;

               // Draw the outer circle.
               context.clearRect(0, 0, this.width, this.height);
               context.beginPath();
               context.arc(
                  this.width / 2,
                  this.height / 2,
                  outerRadius,
                  0,
                  Math.PI * 2
               );

               context.fillStyle = `rgba(255, 200, 200, ${1 - t})`;
               context.fill();

               // Draw the inner circle.
               context.beginPath();
               context.arc(
                  this.width / 2,
                  this.height / 2,
                  radius,
                  0,
                  Math.PI * 2
               );

               context.fillStyle = "#64ffda";
               context.strokeStyle = "#141E30";
               context.lineWidth = 2 + 4 * (1 - t);
               context.fill();
               context.stroke();

               // Update this image's data with data from the canvas.
               this.data = context.getImageData(
                  0,
                  0,
                  this.width,
                  this.height
               ).data;

               // Continuously repaint the map, resulting
               // in the smooth animation of the dot.
               map.triggerRepaint();

               // Return `true` to let the map know that the image was updated.
               return true;
            },
         };

         map.on("load", () => {
            map.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });

            map.addSource("dot-point", {
               type: "geojson",
               data: {
                  type: "FeatureCollection",
                  features: [
                     {
                        type: "Feature",
                        geometry: {
                           type: "Point",
                           coordinates: [10.757933, 59.911491], // icon position [lng, lat]
                        },
                     },
                  ],
               },
            });

            map.addLayer({
               id: "layer-with-pulsing-dot",
               type: "symbol",
               source: "dot-point",
               layout: {
                  "icon-image": "pulsing-dot",
               },
            });
         });
      },
   },
};
</script>

<style>
#map {
   width: 100%;
   height: 100%;
   pointer-events: none;
}

.contact-container {
   width: 100vw;
   height: 100vh;
   padding-top: 100px;
   display: flex;
}

.contact-container__content-container {
   width: 30%;
   padding: 20px;
   height: max-content;
}

.contact-container__title {
   color: var(--font-color-highligth);
   text-align: center;
   padding: 20px;
}

.contact-container__paragraphs {
   padding: 20px;
   text-align: center;
}

.contact-container__map-container {
   width: 70%;
}

.mapboxgl-popup-close-button {
   display: none;
}

.mapboxgl-popup-content {
   border: 2px solid var(--font-color-highligth);
   background: var(--background-primary);
   min-width: max-content;
}

.mapbox__email {
   font-size: var(--tablet-font-size-secondary-undertitle);
   color: var(--font-color-highligth);
   padding: 10px;
}

.contact-container__mail {
   display: flex;
   justify-content: center;
   margin: 20px auto;
   padding: 20px;
   width: 200px;
   transition: 0.9s;
   color: var(--font-color-highligth);
   border: 2px solid var(--font-color-highligth);
}

.contact-container__mail:hover,
.contact-container__mail:focus {
   box-shadow: inset 200px 0 0 0 var(--font-color-highligth);
   color: black;
}

@media screen and (max-width: 600px) {
   
}
</style>

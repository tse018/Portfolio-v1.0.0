<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
      <section class="contact-container">
         <div
            class="contact-container__content-container"
            v-for="data in contact"
         >
            <h3 class="contact-container__title">
               {{ data.title }}
            </h3>

            <div v-for="paragraph in data.description">
               {{ paragraph.children[0].text }}
            </div>
         </div>

         <div class="contact-container__map-container">
            <div id="geocoder" class="geocoder"></div>
            <div class="contact-container__map" id="map"></div>
         </div>
      </section>
   </div>
</template>

<script>
import sanityMixin from "../mixins/sanityMixin.js";

import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

export default {
   mixins: [sanityMixin],

   data() {
      return {
         mapbox_id: import.meta.env.VITE_MAPBOX_ID,
         markers: {}
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
         mapboxgl.accessToken = this.mapbox_id;
         const map = new mapboxgl.Map({
            container: "map", // container ID
            style: "mapbox://styles/mapbox/streets-v11", // style URL
            center: [10.818701, 59.904822], // starting position [lng, lat]
            zoom: 11, // starting zoom
         });

         this.creatingMarker(map);
         this.message(map);
      },

      creatingMarker(map) {
         // Create a new marker, set the longitude and latitude, and add it to the map.
         new mapboxgl.Marker().setLngLat([10.818701, 59.904822]).addTo(map);
      },

      message(map) {
         const popup = new mapboxgl.Popup({ closeOnClick: false })
         .setLngLat([10.81, 59.93822])
         .setHTML('<p class="mapbox__email">thanushan.s@hotmail.com</p><p class="mapbox__number">+47 90110611</p>')
         .addTo(map);
      },


      searchLocationGeoCoder(map) {
         const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,

            /* geocoder input field placeholder */
            placeholder: "Search in mapbox",

            /* adding easing in-out animation when searching for country  */
            flyTo: {
               bearing: 0,

               // Control the flight curve, making it move slowly and
               // zoom out almost completely before starting to pan.
               speed: 0.2, // Make the flying slow.
               curve: 4, // Change the speed at which it zooms out.

               // This can be any easing function: it takes a number between
               // 0 and 1 and returns another number between 0 and 1.
               easing: (posistion) => {
                  return posistion;
               },
            },
         });
         document.getElementById("geocoder").appendChild(geocoder.onAdd(map));
      },
   },
};
</script>

<style>
.contact-container {
   width: 100%;
   height: 100%;
   padding-top: 100px;
   display: flex;
   position: relative;
}

.contact-container__content-container {
   width: 30%;
   border: 2px solid green;
}

.contact-container__map-container {
   border: 2px solid red;
   width: 70%;
}

.contact-container__map {
   width: 100%;
   height: 100%;
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
   font-family: 'Open Sans', sans-serif;
   color: var(--font-color-highligth);
   padding: 10px;
}

.mapbox__number {
   font-size: var(--tablet-font-size-secondary-undertitle);
   font-family: 'Open Sans', sans-serif;
   color: var(--font-color-highligth);
   padding: 10px;
}
</style>

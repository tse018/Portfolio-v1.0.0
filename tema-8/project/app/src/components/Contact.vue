<template>
   <div v-if="loading">Loading...</div>
   <div v-else>
      <section class="contact-container">
         <div v-for="data in contact">
            <h3>
               {{ data.title }}
            </h3>
         </div>

         <div class="contact-container__map-container">
            <div class="contact-container__map" id="map">
               <div id="geocoder" class="geocoder"></div>
            </div>
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
      };
   },

   mounted() {
      mapboxgl.accessToken = this.mapbox_id;
      const map = new mapboxgl.Map({
         container: "map", // container ID
         style: "mapbox://styles/mapbox/streets-v11", // style URL
         center: [10.75, 59.91], // starting position [lng, lat]
         zoom: 13, // starting zoom
      });

      this.searchLocationGeoCoder(map)
   },

   computed: {
      contact() {
         return this.$store.getters.getContact;
      }
   },

   methods: {
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

         // trying to add place details when user search on a country
         geocoder.on("result", function ({ result }) {
            console.log(result.place_name);
            // figure how to create add layer so when user search country
            // popup will appear after the search with details about that country.
         });

         document.getElementById("geocoder").appendChild(geocoder.onAdd(map));
      },
   },
};
</script>

<style scoped>
.contact-container {
   padding-top: 100px;
   display: flex;
   position: relative;
}

.contact-container__content-container {
   width: 30%;
   height: 100%;
   border: 2px solid green;
}

.contact-container__map-container {
   width: 70%;
   height: 100%;
   border: 2px solid red;
   
}

.contact-container__map {
   width: 100%;
   height: 80vh;
}
</style>

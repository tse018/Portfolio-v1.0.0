<template>
   <img class="github__contributions" src="https://ghchart.rshah.org/243B55/tse018" alt="picture of my github profile number of contributions done day for day ">
</template>

<script>
export default {
   data() {
      return {
         key: import.meta.env.VITE_GITHUB_ID,
      };
   },
};
</script>

<style>
.github__contributions {
   margin: 0 auto;
   position: relative;
   display: flex;
   width: 60%;
   height: 20%;
}

.section-introduction__github {
   text-align: center;
   padding: 20px;
   margin: 0 autopx;
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
</style>

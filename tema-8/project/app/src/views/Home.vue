<template>
   <LandingPage />
   <About />
   <Projects />
   <Resume />
</template>

<script>
import LandingPage   from '../components/LandingPage.vue';
import About         from '../components/About.vue';
import Projects      from '../components/Projects.vue';
import Resume        from '../components/Resume.vue';

export default {
   components: {
      LandingPage,
      About,
      Projects,
      Resume
   }
}
</script>

<style>
</style>
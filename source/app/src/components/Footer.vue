<template>
  <footer class="footer-container">
    <p class="footer-container__content">
      Built in Vue JS, Vuex, Vue Router, Sanity, 
    </p>
  </footer>
</template>

<style>
.footer-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: #6cf;
  z-index: 100;
}

.footer-container__content {
  margin-top: 15px;
  text-align: center;
  color: var(--font-shadow-effect);
}
</style>
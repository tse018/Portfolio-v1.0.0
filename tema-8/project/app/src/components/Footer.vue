<template>
  <footer class="footer-container">
    <p class="footer-container__content">
      Designed & Built by Thanushan Sellathurai
    </p>
  </footer>
</template>

<style>
.footer-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;   /* Height of the footer */
  background: var(--background-footer-color);
  z-index: 100;
}

.footer-container__content {
  margin-top: 15px;
  text-align: center;
}

@media screen and (min-width: 981px) and (max-width: 1200px) {
  .footer-container__content {
    font-size: var(--tablet-font-size-footer);
  }
}
</style>
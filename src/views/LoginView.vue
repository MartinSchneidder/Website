<template>
  <div class="logo-container">
    <img
      class="logo"
      src="../assets/oncoming-fist-svgrepo-com.svg"
      alt="logo"
    />
  </div>
</template>

<script setup>
import LoginBar from "../components/LoginBar.vue";
</script>

<style scoped>
.logo-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Das Logo */
.logo {
  height: 20em; /* Größe des Logos */
  width: auto; /* Automatische Breite */
  transition:
    transform 0.3s ease-in-out,
    filter 0.3s ease-in-out;
  will-change: filter, transform;
  filter: drop-shadow(0 0 10px rgba(100, 100, 255, 0.5));
  animation: pulseShadow 4s infinite ease-in-out;
}

/* Pulsierende Animation für den Schlagschatten */
@keyframes pulseShadow {
  0% {
    transform: scale(1);
    filter: drop-shadow(0 0 10px #040315); /* Dunkles Blau */
  }
  50% {
    transform: scale(1.1); /* Etwas größer */
    filter: drop-shadow(0 0 1px #7d4c7e); /* Helles Blau */
  }
  100% {
    transform: scale(1);
    filter: drop-shadow(0 0 10px #040315); /* Dunkles Blau */
  }
}
@media screen and (max-width: 500px) {
  .logo {
    height: 10em;
  }
}
</style>

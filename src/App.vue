<script setup>
import NavBar from "./components/NavBar.vue";

//PINIA
// import { useCounterStore2 } from "./pinia/store";
// const counterstore = useCounterStore2();
</script>

<template>
  <!-- PINIA -->
  <!-- Access the state directly from the store -->

  <!-- <div>Current Count: {{ counterstore.count2 }}</div> -->

  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
nav {
  display: flex;
  gap: 1rem;
}
</style>

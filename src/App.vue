<script setup>
import { computed } from "vue";
import { useAuthStore } from "@/pinia/authStore";

import NavBar from "./components/NavBar.vue";
import LoginBar from "./components/LoginBar.vue";

const authStore = useAuthStore();
const user = computed(() => authStore.user);
</script>

<template>
  <div class="app-container">
    <aside class="sidebar">
      <NavBar v-if="user" />
      <LoginBar v-else />
    </aside>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  align-items: stretch;
  height: auto;
  min-height: 100vh;
  padding: 0;
}

.sidebar {
  /* Gradient background */
  background-image: linear-gradient(90deg, #140315, #340335);

  /* Rounded top-right corner */
  border-top-right-radius: 80px;

  position: fixed;
  top: 0;
  left: 0;

  /* 1/5 der Bildschirmbreite */
  /* min-width: var(--sidebar-min-width);
  max-width: var(--sidebar-max-width); */
  width: clamp(
    var(--sidebar-min-width),
    var(--sidebar-width),
    var(--sidebar-max-width)
  );

  background-color: var(--color-sidebar-background);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  /* Platz für die Sidebar lassen */
  margin-left: clamp(
    var(--sidebar-min-width),
    var(--sidebar-width),
    var(--sidebar-max-width)
  );

  flex-grow: 1; /* Nimmt den restlichen Platz ein */
  padding: 20px;
  overflow-y: auto; /* Scrollbarer Inhalt */
}
</style>

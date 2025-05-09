<script setup>
import { computed, ref } from "vue";
import { useAuthStore } from "@/pinia/authStore";

import NavBar from "./components/NavBar.vue";
import LoginBar from "./components/LoginBar.vue";

const authStore = useAuthStore();
const user = computed(() => authStore.user);
</script>

<template>
  <div class="app-container">
    <template v-if="!user">
      <header class="login-header">
        <LoginBar />
      </header>
    </template>

    <template v-else>
      <header class="header">
        <NavBar />
      </header>
    </template>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
}

/* Login-Header nimmt 50% Höhe ein */
.login-header {
  height: 50vh;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;

  background: linear-gradient(to bottom right, #3498db, #2980b9);
  overflow: hidden;
}

/* Sticky Header bei eingeloggtem Zustand */
.header {
  height: 10vh;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.content {
  height: auto;
}
</style>

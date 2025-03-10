<template>
  <nav>
    <h1>Finanz-App</h1>
    <div v-if="user">
      Eingeloggt als: {{ user.email }}
      <button @click="logout">Abmelden</button>
    </div>
    <div v-else>
      <router-link to="/">Anmelden</router-link>
    </div>
    <router-link to="/">Home</router-link>
    <div v-if="user"><router-link to="/about">About</router-link></div>
  </nav>
</template>

<script setup>
import { useAuthStore } from "@/pinia/authStore";
import { computed } from "vue";
// const { user, logout } = useAuthStore();
const authStore = useAuthStore();

// Abonniere Änderungen des Benutzers
const user = computed(() => authStore.user);
const logout = authStore.logout;
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f5f5f517;
}
</style>

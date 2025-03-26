<template>
  <nav>
    <h1>Bro-Bank</h1>
    <router-link to="/home">Home</router-link>
    <router-link to="/group">Group</router-link>
    <div>
      Eingeloggt als: {{ user.email }}
      <button @click="logout">Abmelden</button>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/pinia/authStore";
import { computed } from "vue";

const router = useRouter();
const authStore = useAuthStore();

// Abonniere Änderungen des Benutzers
const user = computed(() => authStore.user);
// Logout-Funktion mit Weiterleitung zur HomeView
const logout = async () => {
  await authStore.logout(); // Benutzer abmelden
  router.push("/"); // 🔥 Nach dem Logout zur Startseite
};
</script>

<style>
/* nav {
  min-width: 10rem;
  padding: 1rem;
  background-color: #f5f5f517;
} */
</style>

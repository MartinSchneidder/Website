<template>
  <nav class="sidebar">
    <h1 class="logo">Bro-Bank</h1>
    <p class="user">Eingeloggt als: {{ user.email }}</p>

    <ul class="nav-links">
      <li><router-link to="/home">🏠 Home</router-link></li>
      <li><router-link to="/group">👥 Group</router-link></li>
      <li><router-link to="/sozial">💬 Sozial</router-link></li>
    </ul>

    <button class="logout-btn" @click="logout">🚪 Abmelden</button>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import { useAuthStore } from "@/pinia/authStore";
import { computed } from "vue";

const router = useRouter();
const authStore = useAuthStore();

// Abonniere Änderungen des Benutzers
const user = computed(() => authStore.user);
// Logout-Funktion mit Weiterleitung zur HomeView

const logout = async () => {
  await authStore.logout(); // Benutzer abmelden
  // ✅ Erfolgsmeldung mit SweetAlert2
  // Swal.fire({
  //   icon: "info",
  //   title: "Abgemeldet!",
  //   showConfirmButton: false,
  //   timer: 1500,
  // });

  router.push("/"); // 🔥 Nach dem Logout zur Startseite
};
</script>

<style scoped></style>

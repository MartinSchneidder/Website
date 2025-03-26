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

<style scoped>
/* Sidebar Styling */
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100vh;
  background-color: #1e1e2f;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

/* Logo Styling */
.logo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Benutzer-Info */
.user {
  font-size: 14px;
  margin-bottom: 20px;
  color: #bbb;
}

/* Navigationslinks */
.nav-links {
  list-style: none;
  padding: 0;
  width: 100%;
}

.nav-links li {
  width: 100%;
}

.nav-links a {
  display: block;
  padding: 12px 20px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: background 0.3s ease-in-out;
}

.nav-links a:hover {
  background-color: #007bff;
  border-radius: 8px;
}

/* Logout-Button */
.logout-btn {
  margin-top: auto;
  width: 100%;
  padding: 12px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.3s ease-in-out;
}

.logout-btn:hover {
  background-color: #cc0000;
}
</style>

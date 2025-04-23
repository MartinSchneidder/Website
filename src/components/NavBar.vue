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

<template>
  <nav class="container">
    <h1 class="headline">Bro-<br />Bank</h1>
    <p class="user">Eingeloggt: {{ user.email }}</p>

    <ul class="nav-links">
      <li><router-link to="/home" class="nav-btn">🏠</router-link></li>
      <li><router-link to="/newgroups" class="nav-btn">➕👥</router-link></li>
      <li><button class="nav-btn" @click="logout">🚪</button></li>
    </ul>
  </nav>
</template>
<style scoped>
.container {
  box-sizing: border-box;
  overflow: hidden;

  display: grid;
  grid-template-columns: 7rem 3fr 1fr;
  grid-template-rows: 5vh 5vh;
  grid-template-areas:
    "headline user user"
    "headline navlinks navlinks ";

  gap: 0rem 0.5rem;
  justify-content: center;
  align-items: center;

  background: #3498db;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Grid Areas */
.headline {
  grid-area: headline;
  font-size: 1.25rem;
  font-weight: bold;
  color: #2c3e50;
  line-height: 1.2;
}

.user {
  grid-area: user;
  font-size: 0.85rem;
  color: #555;
  white-space: nowrap;
  text-align: right;
  padding-right: 1rem;
}

.nav-btn {
  height: 100%;
  width: 100%;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.25rem;
  padding: 0rem 0.75rem;
  border-radius: 0.5rem;
  background: #3498db;
  color: white;
  border: none;
  cursor: pointer;
  transition:
    background 0.3s ease,
    transform 0.2s ease;
}

.nav-btn:hover {
  background: #2980b9;
}

.nav-btn:focus {
  /* outline: 2px solid #2980b9;
  outline-offset: 2px; */
  /* transform: translateY(10px); */
}
/* Nav-Links */
.nav-links {
  width: 100%;
  height: 100%;
  grid-area: navlinks;
  display: flex;

  padding: 0;
  margin: 0;
  list-style: none;
}
.nav-links li {
  flex: auto; /* optional, damit sie auch mitwachsen */
  display: flex; /* wichtig! */
}

.nav-links a:hover {
  background: #2980b9;
}
</style>

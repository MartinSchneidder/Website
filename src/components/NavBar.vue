<template>
  <nav class="sidebar">
    <h1 class="logo">Bro-Bank</h1>
    <p class="user">Eingeloggt als: {{ user.email }}</p>

    <button class="logout-btn" @click="logout">🚪 Abmelden</button>

    <ul class="nav-links">
      <li><router-link to="/home">🏠 Home</router-link></li>
      <li><router-link to="/group">👥 Group</router-link></li>
      <li><router-link to="/sozial">💬 Sozial</router-link></li>
    </ul>
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
.nav-links {
  display: flex;
  flex-direction: column;
  gap: 3rem; /* Abstand zwischen den Links*/
  list-style: none;
  padding: 0;
  margin-left: 20%; /* Platz nach links */
  /* Damit sich die Links anpassen */
  width: 100%;
}

.nav-links li {
  position: relative;
  width: 90%; /* Platz nach links, für margin 20% */
}

.nav-links li a {
  display: flex;
  /* LinkText zentriert */
  justify-content: center;
  padding: 15px 20px;
  text-decoration: none;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease-in-out;
}

/* Hintergrund-Element für aktive Links */
.nav-links li a::before {
  content: "";
  position: absolute;
  /* Deckt den ganzen Link-Bereich ab */
  inset: 0;
  width: 100%;
  height: 100%;
  background: #040315;
  border-top-left-radius: 35px;
  border-bottom-left-radius: 35px;
  z-index: -1;
  transform: scaleX(0); /* Startgröße: 0 */
  transform-origin: right;

  transition: transform 0.3s ease-in-out;
}

/* Aktivierter Link -> Hintergrund fährt smooth aus */
.nav-links li .router-link-active::before {
  transform: scaleX(1);
}
</style>

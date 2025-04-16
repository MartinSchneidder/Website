<script setup>
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import { ref } from "vue";
import { auth, db } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const router = useRouter();
const email = ref("");
const password = ref("");
const confirmPassword = ref(""); // Bestätigungspasswort
const isRegistering = ref(false); // Umschaltung Login/Registrierung

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-left",
  // background: "url(src/assets/spider.gif)",
  // background: "#12345678",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

// Login oder Registrierung ausführen
async function handleSubmit() {
  if (isRegistering.value) {
    await register();
  } else {
    await login();
  }
}

// Registrierung
async function register() {
  if (password.value !== confirmPassword.value) {
    Toast.fire({
      icon: "error",
      title: "Fehler",
      text: "Passwörter stimmen nicht überein!",
      timer: false,
    });
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const user = userCredential.user;
    // Speichere die E-Mail als Benutzername in Firestore
    await setDoc(doc(db, "users", user.uid), {
      username: email.value, // Hier wird die E-Mail als Benutzername gespeichert
    });

    console.log("Erfolgreich registriert:", userCredential.user);
    Toast.fire({
      icon: "success",
      title: "Registrierung erfolgreich!",
      showConfirmButton: false,
      timer: 1500,
    });
    router.push("/home");
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: "Registrierungsfehler",
      text: error.message,
    });
  }
}

// Login
async function login() {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    Toast.fire({
      icon: "success",
      title: "Signed in successfully",
    });

    router.push("/home");
  } catch (error) {
    Toast.fire({
      icon: "error",
      title: "Anmeldefehler",
      text: error.message,
      timer: false,
    });
  }
}

// Umschalten zwischen Login & Registrierung
function toggleRegister() {
  isRegistering.value = !isRegistering.value;
  // Eingaben leeren:
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
}
</script>

<template>
  <div class="container">
    <transition name="fade">
      <h1 class="headline" v-if="!isRegistering">Bro-Bank</h1>
    </transition>

    <form @submit.prevent="handleSubmit" class="loginForm">
      <div class="input-group">
        <input v-model="email" id="email" type="email" required />
        <label :class="{ active: email }" for="email">E-Mail</label>
      </div>

      <div class="input-group">
        <input v-model="password" id="password" type="password" required />
        <label :class="{ active: password }" for="password">Passwort</label>
      </div>

      <div class="register-fields" :class="{ expanded: isRegistering }">
        <div class="input-group">
          <input
            v-model="confirmPassword"
            id="confirmPassword"
            type="password"
            :required="isRegistering"
          />
          <label :class="{ active: confirmPassword }" for="confirmPassword"
            >Passwort bestätigen</label
          >
        </div>
      </div>

      <!-- Buttons mit sanfter Transition -->
      <div class="button-container" :class="{ shifted: isRegistering }">
        <button type="submit">
          {{ isRegistering ? "Registrieren" : "Login" }}
        </button>
        <button type="button" class="toggle-btn" @click="toggleRegister">
          {{ isRegistering ? "Zurück" : "Registrieren" }}
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
/* Container im Grid-Bereich */
.container {
  width: 100%;
  max-width: 400px;
  max-height: 100%;
  overflow-y: auto;
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
  height: auto; /* statt 100% */
}

.headline {
  font-size: 1.75rem;
  text-align: center;
  color: #2c3e50;
}
@media (max-height: 800px) {
  .headline {
    margin: 0;
  }
}

/* Formular */
.loginForm {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: #ffffff;
}

/* Reusable input style */
.input-group {
  position: relative;
  display: flex;
}

.input-group input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

.input-group input:focus {
  outline: none;
  border-color: #3498db;
}

/* Labels */
.input-group label {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  color: #999;
  transition: 0.3s;
  pointer-events: none;
}

.input-group input:focus + label,
.input-group label.active {
  top: -0.6rem;
  left: 0.5rem;
  font-size: 0.75rem;
  background: white;
  padding: 0 0.25rem;
  color: #3498db;
  z-index: 1;
}

/* Register-Felder */
.register-fields {
  display: flex;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
}

.register-fields.expanded {
  max-height: 10rem;
}

/* Button-Container */
.button-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.button-container.shifted {
  transform: translateY(10px);
}

/* Buttons */
button {
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  background: #3498db;
  color: white;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #2980b9;
}

.toggle-btn {
  background: none;
  color: #3498db;

  outline: none;
}

.toggle-btn:hover {
  background: #ececec;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
input {
  padding: 0;
  margin: 0;
}
</style>

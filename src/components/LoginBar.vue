<template>
  <div class="container">
    <h1 class="headline">Bro-Bank</h1>

    <form @submit.prevent="handleSubmit">
      <!-- E-Mail Input mit Floating Label -->
      <div class="input-group">
        <input v-model="email" id="email" type="email" required />
        <label :class="{ active: email }" for="email">E-Mail</label>
      </div>

      <!-- Passwort Input mit Floating Label -->
      <div class="input-group">
        <input v-model="password" id="password" type="password" required />
        <label :class="{ active: password }" for="password">Passwort</label>
      </div>

      <!-- Registrierungsfelder mit sanfter Transition -->
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
          {{ isRegistering ? "Zurück zum Login" : "Registrieren" }}
        </button>
      </div>
    </form>
  </div>
</template>

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
}
</script>

<style scoped>
.headline {
  margin-top: 2rem;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

form {
  display: flex;
  flex-direction: column;
  width: 15vw;
  max-width: 200px;
  min-width: calc(var(--sidebar-min-width) - 1rem);
}

/* Floating Label Styling */
.input-group {
  position: relative;
  margin-bottom: 30px;
}

input {
  width: calc(100% - 20px);
  padding: 12px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease-in-out;
  background-color: transparent;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

label {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 16px;
  color: #aaa;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
}

input:focus + label,
label.active {
  top: -10px;
}

/* Button Styling */
.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 0px; */
  transition: margin-top 0.3s ease;
}

/* Wenn die Registrierungsfelder sichtbar sind, verschieben sich die Buttons */
.button-container.shifted {
  margin-top: 2.5rem;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 2rem;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

/* Register/Umschalten-Button */
.toggle-btn {
  background: none;
  color: #007bff;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.toggle-btn:hover {
  color: #ffffff;
}

/* Smooth Expand für Registrierungsfelder */
.register-fields {
  height: 0;
  opacity: 0;
  overflow: hidden;
  transition:
    height 0.4s ease-in-out,
    opacity 0.4s ease-in-out;
}

.register-fields.expanded {
  opacity: 1;
  overflow: visible;
  max-height: 100px; /* Genug Platz für das Feld*/
}
</style>

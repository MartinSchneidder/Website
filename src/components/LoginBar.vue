<template>
  <div class="container">
    <h1>LOGIN-Bar</h1>
    <form @submit.prevent="login">
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

      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { auth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const router = useRouter();
const email = ref("");
const password = ref("");

// Benutzer registrieren
async function register() {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    console.log("Erfolgreich registriert:", userCredential.user);
    alert("Erfolgreich registriert!");
  } catch (error) {
    console.error("Registrierungsfehler:", error.message);
  }
}

// Benutzer anmelden
async function login() {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push("/home"); // 🔥 Weiterleitung zur Startseite (HomeView)
    alert("Erfolgreich angemeldet!");
  } catch (error) {
    console.error("Anmeldefehler:", error.message);
  }
}
</script>

<style scoped>
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
  width: calc(
    100% - 20px
  ); /* Zieht das Padding (2x 10px) von der Gesamtbreite ab */
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

/* Standard Label */
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

/* Label bewegt sich nach oben, wenn Input gefüllt ist */
input:focus + label,
label.active {
  top: -10px;
  /* font-size: 12px; */
  /* color: #007bff; */
}

input[type="submit"] {
  width: 100%;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #0056b3;
}
</style>

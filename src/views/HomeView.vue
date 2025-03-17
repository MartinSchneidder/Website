<!-- Homeview -->
<template>
  <h1>Home</h1>
  <div>
    <h2>Benutzerregistrierung</h2>
    <input v-model="email" placeholder="E-Mail" type="email" />
    <input v-model="password" placeholder="Passwort" type="password" />
    <button @click="register">Registrieren</button>
    <button @click="login">Anmelden</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { auth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

console.log("API Key:", import.meta.env.VITE_FIREBASE_API_KEY);
const email = ref("");
const password = ref("");

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

async function login() {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    alert("Erfolgreich angemeldet!");
  } catch (error) {
    console.error("Anmeldefehler:", error.message);
  }
}
</script>

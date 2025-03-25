<template>
  <div class="container">
    <h1>LOGIN-Bar</h1>
    <form @submit.prevent="login">
      <label for="email">E-mail:</label>
      <input
        v-model="email"
        id="email"
        placeholder="E-Mail"
        type="email"
        required
      />

      <label for="password">Passwort:</label>
      <input
        v-model="password"
        id="password"
        placeholder="Passwort"
        type="password"
        required
      />

      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { auth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

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

input {
  margin: 5px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="submit"] {
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #0056b3;
}
</style>

<template>
  <!-- Falls der Nutzer noch keinen Namen hat -->
  <div v-if="!username" class="username-setup">
    <p>Wähle einen Namen:</p>
    <input v-model="newUsername" placeholder="Username" />
    <button @click="setUsername">Speichern</button>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>

  <!-- Falls Nutzer bereits einen Namen hat-->
  <div v-else>
    <p>Willkommen, {{ username }}!</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { auth, db } from "@/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const username = ref("");
const newUsername = ref("");
const errorMessage = ref("");

onMounted(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        console.log("Angemeldeter Nutzer:", user.uid);

        // 🔥 Nutzername abrufen
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          username.value = userDoc.data().username;
        }
      } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
        errorMessage.value = "Fehler beim Laden.";
      }
    } else {
      errorMessage.value = "Bitte melde dich an!";
    }
  });
});

// 🔥 Nutzername setzen
async function setUsername() {
  if (!newUsername.value.trim()) {
    errorMessage.value = "Bitte gib einen gültigen Namen ein.";
    return;
  }

  try {
    await setDoc(
      doc(db, "users", auth.currentUser.uid),
      { username: newUsername.value },
      { merge: true }
    );
    username.value = newUsername.value;
    newUsername.value = "";
  } catch (error) {
    console.error("Fehler beim Speichern des Namens:", error);
    errorMessage.value = "Fehler beim Speichern.";
  }
}
</script>

<style scoped></style>

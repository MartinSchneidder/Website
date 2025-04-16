<script setup>
import { ref, onMounted } from "vue";
import { auth, db } from "@/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const username = ref("");
const newUsername = ref("");
const editing = ref(false);
const errorMessage = ref("");

onMounted(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        // console.log("Angemeldeter Nutzer:", user.uid);

        // Nutzername abrufen
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

// Nutzername setzen
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
    editing.value = false;
  } catch (error) {
    console.error("Fehler beim Speichern des Namens:", error);
    errorMessage.value = "Fehler beim Speichern.";
  }
}

// Bearbeitungsmodus aktivieren
function editUsername() {
  newUsername.value = username.value;
  editing.value = true;
}

// Bearbeitung abbrechen
function cancelEdit() {
  editing.value = false;
  newUsername.value = "";
}
// Helper für CSS Expand Animation
function beforeEnter(el) {
  el.style.height = "0";
  el.style.opacity = "0";
}
function enter(el, done) {
  const height = el.scrollHeight + "px";
  el.style.transition = "height 0.4s ease, opacity 0.4s ease";
  requestAnimationFrame(() => {
    el.style.height = height;
    el.style.opacity = "1";
  });
  setTimeout(done, 400);
}
function leave(el, done) {
  el.style.transition = "height 0.3s ease, opacity 0.3s ease";
  el.style.height = "0";
  el.style.opacity = "0";
  setTimeout(done, 300);
}
</script>

<template>
  <div class="username-container">
    <!-- Falls der Nutzer noch keinen Namen hat ODER bearbeiten aktiv ist -->
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div
        v-if="!username || editing"
        class="username-setup animated-container"
      >
        <p>Wähle einen Namen:</p>
        <input v-model="newUsername" id="username" placeholder="Username" />
        <div class="buttons">
          <button @click="setUsername">Speichern</button>
          <button v-if="username" @click="cancelEdit" class="cancel-btn">
            Abbrechen
          </button>
        </div>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </div>

      <!-- Falls Nutzer bereits einen Namen hat -->
      <div v-else class="username-display">
        <div class="username-display2 animated-container">
          <p>Willkommen, {{ username }}!</p>
          <button @click="editUsername" class="edit-btn">✏️</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.username-container {
  padding: 1rem;
  text-align: center;
  overflow: hidden;
  /* background: green; */
}

.username-setup {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
}

.buttons {
  padding: 10px;
  display: flex;
  gap: 10px;
}

button {
  padding: 0.5rem;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  transition: 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.cancel-btn {
  background-color: #6c757d;
}

.cancel-btn:hover {
  background-color: #5a6268;
}

.username-display {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
}
.username-display2 {
  gap: 10px;
  display: flex;
}

.edit-btn {
  background-color: transparent;
  font-size: 0.7rem;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
}

.edit-btn:hover {
  transition: transform 1s linear(0, 45, 0, 45, 0); /* lange Dreh-Animation :) */
  background-color: transparent;
  border: var(--color-shadow) 2px solid;
  transform: rotate(1deg);
}

.error {
  color: red;
  font-size: 14px;
}

#username {
  width: 10rem;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import { getUserGroups } from "@/services/groupService.js";
import { auth } from "@/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

const groups = ref([]);
const errorMessage = ref("");

onMounted(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        console.log("Angemeldeter Nutzer:", user.uid); // Debugging
        groups.value = await getUserGroups(user.uid);
      } catch (error) {
        console.error("Fehler beim Abrufen der Gruppen:", error);
        errorMessage.value = "Fehler beim Laden der Gruppen.";
      }
    } else {
      errorMessage.value = "Bitte melde dich an!";
    }
  });
});
</script>

<template>
  <div>
    <h2>Meine Gruppen</h2>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <ul v-if="groups.length > 0">
      <li v-for="group in groups" :key="group.id">{{ group.name }}</li>
    </ul>
    <p v-else>Keine Gruppen gefunden.</p>
  </div>
</template>

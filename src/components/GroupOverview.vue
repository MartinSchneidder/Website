<template>
  <div class="home-container">
    <div v-if="groups.length > 0" class="groups-list">
      <div v-for="group in groups" :key="group.id" class="group-card">
        <h2>{{ group.name }}</h2>
        <p>{{ group.description }}</p>
      </div>
    </div>

    <div v-else class="no-groups">
      <p>Such dir</p>
      <router-link to="/group">neue Bros</router-link>
    </div>
  </div>
</template>

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
        groups.value = await getUserGroups(user.uid);
      } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
        errorMessage.value = "Fehler beim Laden.";
      }
    } else {
      errorMessage.value = "Bitte melde dich an!";
    }
  });
});
</script>

<style scoped>
.home-container {
  padding: 1.5rem;
}

.username-setup {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.groups-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.group-card {
  flex: auto;
  background: var(--color-variant1);
  padding: 1rem;
  border-radius: 15px;
  width: 15rem;
}

.no-groups {
  color: gray;
}
</style>

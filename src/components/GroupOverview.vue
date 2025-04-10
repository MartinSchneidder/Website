<script setup>
import { ref, onMounted } from "vue";
import { getUserGroups } from "@/services/groupService.js";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

const groups = ref([]);

onMounted(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      groups.value = await getUserGroups(user.uid);
    }
  });
});
</script>

<template>
  <div class="groups-container">
    <h1>Deine Gruppen</h1>
    <div v-if="groups.length > 0" class="groups-list">
      <router-link
        v-for="group in groups"
        :key="group.id"
        :to="`/group/${group.id}`"
        class="group-card"
      >
        <h2>{{ group.name }}</h2>
        <p>{{ group.description }}</p>
      </router-link>
    </div>

    <div v-else class="no-groups">
      <p>Du bist in keiner Gruppe.</p>
      <router-link to="/newgroups">Gruppe beitreten</router-link>
    </div>
  </div>
</template>

<style scoped>
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
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.group-card:hover {
  background: var(--color-variant2);
}
</style>

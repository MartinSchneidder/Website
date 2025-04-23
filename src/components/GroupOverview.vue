<script setup>
import { ref, onMounted } from "vue";
import { getUserGroups } from "@/services/groupService.js"; // Funktion zum Abrufen der Gruppen
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getUserById } from "@/services/userService"; // Funktion zum Abrufen der User-Daten

const groups = ref([]);

// Funktion um Mitglieder mit Usernamen zu bereichern
const enrichGroupsWithUsernames = async () => {
  // Gehe durch alle Gruppen und hole Usernamen
  for (const group of groups.value) {
    group.members = await Promise.all(
      group.members.map(async (memberId) => {
        const user = await getUserById(memberId); // Holt Userdaten
        return { id: memberId, username: user?.username || "Unbekannt" };
      })
    );
  }
};

// Beim Initialisieren des Components und bei Auth-Änderungen
onMounted(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // Hole die Gruppen des Nutzers
      groups.value = await getUserGroups(user.uid);
      // Anreicherung der Mitglieder mit Usernamen
      await enrichGroupsWithUsernames();
    }
  });
});
</script>

<template>
  <div class="groups-container">
    <h2 class="headline">💲 Deine Cash-Groups</h2>

    <div v-if="groups.length > 0" class="group-list">
      <router-link
        v-for="group in groups"
        :key="group.id"
        :to="`/group/${group.id}`"
        class="group-link"
      >
        <fieldset class="group-fieldset">
          <legend class="group-name shorter">{{ group.name }}</legend>

          <!-- Mitglieder anzeigen -->
          <div class="group-members">
            <span
              class="member"
              v-for="member in group.members"
              :key="member.id"
            >
              👤 {{ member.username }}
            </span>
          </div>
          <p class="group-description">{{ group.description }}</p>
        </fieldset>
      </router-link>
    </div>

    <div v-else class="no-groups">
      <p>Du bist in keiner Gruppe.</p>
      <router-link to="/newgroups">Gruppe beitreten</router-link>
    </div>
  </div>
</template>

<style scoped>
.groups-container {
  /* height: 100%; */
  /* background: rgb(255, 0, 0); */
  font-family: "Segoe UI", "Noto Sans", sans-serif;
}
.headline {
  margin-top: 0;
}

.group-list {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.group-link {
  text-decoration: none;
  color: inherit;
}

.group-fieldset {
  border: 2px solid var(--color-border);
  background: #fefbf6;
  border-radius: 16px;
  padding: 1rem 1.5rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s ease;
  cursor: pointer;
}

.group-fieldset:hover {
  background: #f1f5e8;
  transform: translateY(-2px);
}

.group-name {
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--color-font-colored);
  padding: 0 0.5rem;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 70vw;
}

.group-description {
  font-size: 0.95rem;
  color: #555;
  margin-top: 0.5rem;
  line-height: 1.5;
  max-height: 4em;
  overflow: hidden;
  text-overflow: ellipsis;
}

.no-groups {
  margin-top: 2rem;
  font-size: 1.1rem;
  text-align: center;
}

.no-groups a {
  color: #61192b;
  text-decoration: underline;
}

.group-members {
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.member {
  background: var(--color-background-colored);
  color: var(--color-font-colored);
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-size: 0.85rem;
}
@media screen and (max-width: 800px) {
  .member {
    max-width: 70vw; /* Anzeige Begrenzung */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>

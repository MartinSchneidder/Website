<template>
  <form @submit.prevent="submitTransaction">
    <h2>Neue Transaktion</h2>
    <!-- Mitglieder auswählen -->
    <label>Empfänger auswählen:</label>
    <div
      v-for="member in filteredMembers"
      :key="member.id"
      class="custom-checkbox"
    >
      <input
        type="checkbox"
        :id="'member-' + member.id"
        v-model="selectedMembers"
        :value="member.id"
      />
      <label :for="'member-' + member.id">{{ member.username }}</label>
    </div>

    <!-- Betrag eingeben -->
    <label>Betrag:</label>
    <input type="number" v-model="amount" placeholder="€ Betrag" required />

    <!-- Kommentar hinzufügen -->
    <label>Kommentar:</label>
    <input type="text" v-model="comment" placeholder="Optional" />

    <!-- Transfer-Richtung umschalten -->
    <button type="button" @click="toggleTransferType">
      {{ transferType === "send" ? "➡️ Geld senden" : "🔄 Geld erhalten" }}
    </button>

    <!-- Absenden -->
    <button type="submit">Transaktion speichern</button>
  </form>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useTransactionStore } from "@/pinia/transactionStore";
import { getUserById } from "@/services/userService"; // Funktion zum Abrufen des Benutzernamens
import { useRoute } from "vue-router";
import { useAuthStore } from "@/pinia/authStore";

const props = defineProps({
  members: Array, // Mitglieder der Gruppe
});

const transactionStore = useTransactionStore();
const route = useRoute();
const groupId = ref(route.params.groupId); // Aktuelle Gruppen-ID

const selectedMembers = ref([]);
const amount = ref("");
const comment = ref("");
const transferType = ref("send");

const membersWithUsername = ref([]); // Mitglieder mit Usernamen
const authStore = useAuthStore();
const currentUser = computed(() => authStore.user);

// Funktion um Mitglieder zu bereichern
/*enrichMembers():
Diese Funktion lädt für jedes Mitglied die User-Daten (z.B. den Usernamen) 
und speichert diese Informationen in membersWithUsername.value.*/
const enrichMembers = async (members) => {
  const enriched = [];

  for (const member of members) {
    const user = await getUserById(member.id); // ID zu Username
    enriched.push({
      ...member,
      username: user?.username ?? "Unbekannt",
    });
  }

  membersWithUsername.value = enriched;
};

// Watcher auf props.members um Mitglieder zu befüllen
/* watch() mit immediate: true:
 Wir überwachen props.members und rufen die Funktion enrichMembers() 
 sofort beim Laden der Komponente und bei jeder Änderung von props.members auf.*/
watch(
  () => props.members,
  async (newMembers) => {
    if (newMembers.length > 0) {
      await enrichMembers(newMembers);
    }
  },
  { immediate: true }
);

// Der aktive User wird aus der Liste der auswählbaren Mitglieder herausgefiltert
const filteredMembers = computed(() => {
  if (!currentUser.value?.uid || !membersWithUsername.value.length) return [];

  return membersWithUsername.value.filter(
    (member) => member.id !== currentUser.value.uid
  );
});

const toggleTransferType = () => {
  transferType.value = transferType.value === "send" ? "receive" : "send";
};

const submitTransaction = async () => {
  if (selectedMembers.value.length === 0) {
    alert("Bitte Empfänger auswählen!");
    return;
  }

  const transaction = {
    members: selectedMembers.value,
    amount: amount.value,
    comment: comment.value,
    type: transferType.value,
    createdBy: currentUser.value?.uid,
    createdAt: new Date().toISOString(),
  };

  await transactionStore.addTransaction(groupId.value, transaction);
  alert("Transaktion gespeichert!");
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  cursor: pointer;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  transition: 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>

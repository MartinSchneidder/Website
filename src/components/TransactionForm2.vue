<template>
  <form @submit.prevent="submitTransaction">
    <h2>Neue Transaktion</h2>

    <!-- Mitglieder auswählen -->
    <label>Empfänger auswählen:</label>
    <div v-for="member in members" :key="member.id" class="custom-checkbox">
      <input
        type="checkbox"
        :id="'member-' + member.id"
        v-model="selectedMembers"
        :value="member.id"
      />
      {{ member.name }}
      <!-- WO KOMMT MANE HER, BITTE ZU USERNAME ÄNDERN -->
      <label :for="'member-' + member.id">{{ member.username }}</label>
      <!-- Username hier -->
    </div>

    <!-- Betrag eingeben -->
    <label>Betrag:</label>
    <input type="number" v-model="amount" placeholder="€ Betrag" required />

    <!-- Kommentar hinzufügen -->
    <label>Kommentar:</label>
    <input type="text" v-model="comment" placeholder="Optional" />

    <!-- Transfer-Richtung umschalten -->
    <button type="button" @click="toggleTransferType">
      {{ transferType === "send" ? "🔄 Geld erhalten" : "➡️ Geld senden" }}
    </button>

    <!-- Absenden -->
    <button type="submit">Transaktion speichern</button>
  </form>
</template>

<script setup>
import { ref, onMounted } from "vue";
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

// Holen von Benutzernamen
const membersWithUsername = ref([]);
// Holen von CurrentUser
const authStore = useAuthStore();
const currentUser = authStore.user;

onMounted(async () => {
  // Holen der Mitglieder mit ihren Usernamen
  const members = props.members;
  for (let member of members) {
    const user = await getUserById(member.id); // ID zu Username
    member.username = user.username;
  }
  membersWithUsername.value = members; // Mit Usernamen versehen
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
    createdBy: currentUser?.uid,
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

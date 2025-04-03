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
      <label :for="'member-' + member.id">{{ member.name }}</label>
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
import { ref } from "vue";
import { useTransactionStore } from "@/pinia/transactionStore";
import { useRoute } from "vue-router";

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

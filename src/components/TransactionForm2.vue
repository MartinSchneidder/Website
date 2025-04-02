<template>
  <form @submit.prevent="submitTransaction">
    <h2>Neue Transaktion</h2>

    <!-- Mitglieder auswählen -->
    <label>Empfänger auswählen:</label>
    <select v-model="selectedMembers" multiple>
      <option v-for="member in members" :key="member.id" :value="member.id">
        {{ member.name }}
      </option>
    </select>

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
import { ref, defineProps } from "vue";

// Props für Mitglieder-Liste (wird von der übergeordneten Komponente übergeben)
const props = defineProps({
  members: Array, // Liste der Mitglieder in der Gruppe
});

// Reaktive Variablen
const selectedMembers = ref([]); // Ausgewählte Mitglieder
const amount = ref(""); // Betrag
const comment = ref(""); // Kommentar
const transferType = ref("send"); // "send" oder "receive"

// Funktion: Transfer-Richtung umschalten
const toggleTransferType = () => {
  transferType.value = transferType.value === "send" ? "receive" : "send";
};

// Funktion: Transaktion speichern
const submitTransaction = () => {
  if (selectedMembers.value.length === 0) {
    alert("Bitte Empfänger auswählen!");
    return;
  }

  console.log("Neue Transaktion:", {
    members: selectedMembers.value,
    amount: amount.value,
    comment: comment.value,
    type: transferType.value,
  });

  // TODO: Speichern der Transaktion in Firebase oder State-Management
  alert("Transaktion gespeichert!");
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

select {
  height: 80px; /* Mehrfachauswahl besser sichtbar */
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

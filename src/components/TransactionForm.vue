<template>
  <div>
    <h2>Geld senden</h2>
    <input v-model="amount" name="amount" placeholder="Betrag" type="number" />
    <input v-model="friend" name="friend" placeholder="Empfänger" type="text" />
    <input
      v-model="comment"
      name="comment"
      placeholder="Kommentar"
      type="text"
    />
    <button @click="sendMoney">Senden</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTransactionStore } from "@/pinia/transactionStore";
import { db, auth } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";

// Reaktive Werte für das Formular
const amount = ref(0);
const friend = ref("");
const comment = ref("");

const store = useTransactionStore();

const sendMoney = async () => {
  if (!auth.currentUser) {
    alert("Bitte melde dich an.");
    return;
  }

  const transactionData = {
    amount: parseFloat(amount.value),
    friend: friend.value,
    comment: comment.value,
    uid: auth.currentUser.uid, // Speichert die Transaktion nur für den angemeldeten User
    timestamp: new Date(),
  };

  try {
    // 1️⃣ In Firestore speichern
    await addDoc(collection(db, "financeData"), transactionData);

    // 2️⃣ In Pinia speichern (für schnellen Zugriff)
    store.addTransaction(transactionData);

    // 3️⃣ Formular zurücksetzen
    amount.value = 0;
    friend.value = "";
    comment.value = "";

    alert("Transaktion gespeichert!");
  } catch (error) {
    console.error("Fehler beim Speichern der Finanzdaten:", error);
    alert("Fehler beim Speichern!");
  }
};
</script>

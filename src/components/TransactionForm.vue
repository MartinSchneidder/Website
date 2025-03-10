<template>
  <div>
    <h2>Geld senden</h2>
    <input v-model="amount" placeholder="Betrag" type="number" />
    <input v-model="friend" placeholder="Empfänger" type="text" />
    <input v-model="comment" placeholder="Kommentar" type="text" />
    <button @click="sendMoney">Senden</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTransactionStore } from "@/pinia/transactionStore";

const amount = ref(0);
const friend = ref("");
const comment = ref("");

const store = useTransactionStore();

function sendMoney() {
  store.addTransaction({
    amount: parseFloat(amount.value),
    friend: friend.value,
    comment: comment.value,
  });

  amount.value = 0;
  friend.value = "";
  comment.value = "";
}
</script>

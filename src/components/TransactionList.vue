<template>
  <div>
    <h2>Transaktionen</h2>
    <ul>
      <li v-for="transaction in transactions" :key="transaction.id">
        <strong>{{ transaction.type === "send" ? "➡️" : "🔄" }}</strong>
        {{ transaction.amount }}€ an {{ transaction.members.join(", ") }}
        <em v-if="transaction.comment">({{ transaction.comment }})</em>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useTransactionStore } from "@/pinia/transactionStore";
import { useRoute } from "vue-router";

const transactionStore = useTransactionStore();
const route = useRoute();
const groupId = route.params.groupId;

const transactions = computed(() => transactionStore.transactions);

onMounted(async () => {
  await transactionStore.fetchTransactions(groupId);
});
</script>

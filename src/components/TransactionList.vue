<template>
  <div>
    <h2>Transaktionen</h2>
    <ul>
      <li v-for="transaction in transactions" :key="transaction.id">
        <strong>{{ transaction.type === "send" ? "➡️" : "🔄" }}</strong>
        {{ transaction.amount }}€ an
        <span v-if="memberNames[transaction.id]">
          {{ memberNames[transaction.id].join(", ") }}
        </span>
        <em v-if="transaction.comment">({{ transaction.comment }})</em>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useTransactionStore } from "@/pinia/transactionStore";
import { getUserById } from "@/services/userService";
import { useRoute } from "vue-router";

const transactionStore = useTransactionStore();
const route = useRoute();
const groupId = route.params.groupId;

const transactions = computed(() => transactionStore.transactions);
const memberNames = ref({});

// Funktion: Mitgliedsnamen für jede Transaktion laden
const loadMemberNames = async (transactions) => {
  console.log("🔄 Lade Mitgliedsnamen...");

  const namesMap = {};
  for (const transaction of transactions) {
    const names = await Promise.all(
      transaction.members.map(async (id) => {
        const user = await getUserById(id);
        return user ? user.username : "Unbekannt";
      })
    );

    namesMap[transaction.id] = names;
  }

  memberNames.value = namesMap;
  console.log("✅ Mitgliedsnamen geladen:", memberNames.value);
};

// Aktualisiere Mitgliedsnamen nur bei Änderungen in `transactions`
watch(
  transactions,
  (newTransactions) => {
    if (newTransactions.length > 0) {
      loadMemberNames(newTransactions);
    }
  },
  { deep: true, immediate: true }
);

// Beim Laden der Komponente die Transaktionen und Namen abrufen
onMounted(async () => {
  await transactionStore.fetchTransactions(groupId);
});
</script>

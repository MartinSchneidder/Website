<template>
  <div>
    <h2>Transaktionen</h2>
    <ul>
      <li v-for="transaction in transactions" :key="transaction.id">
        <strong>{{ transaction.type === "send" ? "➡️" : "🔄" }}</strong>
        {{ transaction.amount }}€ an
        <span v-if="transaction.members">
          <span v-for="memberId in transaction.members" :key="memberId">
            {{ memberNames[memberId] || "❓" }}
          </span>
        </span>
        <em v-if="transaction.comment">({{ transaction.comment }})</em>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useTransactionStore } from "@/pinia/transactionStore";
import { getGroupMembers } from "@/services/groupService";
import { useRoute } from "vue-router";

const transactionStore = useTransactionStore();
const route = useRoute();
const groupId = route.params.groupId;

const transactions = computed(() => transactionStore.transactions);
const memberNames = ref({});

// 🛠️ Mitglieder abrufen & Debugging
const loadGroupMembers = async () => {
  console.log("🔄 Lade Mitglieder der Gruppe für ID:", groupId);

  const members = await getGroupMembers(groupId);
  console.log("📌 Mitglieder erhalten:", members);

  const namesMap = {};
  for (const member of members) {
    namesMap[member.id] = member.username;
  }

  memberNames.value = namesMap;
  console.log("✅ Mitgliedsnamen gespeichert:", memberNames.value);
};

// 🔄 Beobachte `transactions` und lade Namen
watch(
  transactions,
  async (newTransactions) => {
    if (newTransactions.length > 0) {
      await loadGroupMembers();
    }
  },
  { immediate: true }
);

// Beim Laden der Komponente die Daten abrufen
onMounted(async () => {
  await transactionStore.fetchTransactions(groupId);
  await loadGroupMembers();
});
</script>

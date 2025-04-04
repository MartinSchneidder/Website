<template>
  <div>
    <h2>Transaktionen</h2>
    <ul>
      <li v-for="transaction in transactions" :key="transaction.id">
        <em v-if="transaction.comment">({{ transaction.comment }})</em>
        <br />
        <span>
          <strong>{{
            memberNames[transaction.createdBy] || "Unbekannt"
          }}</strong></span
        >
        {{ transaction.amount }}€
        <strong>{{ transaction.type === "send" ? "➡️" : "🔄" }}</strong>

        <span v-if="transaction.members">
          <span
            v-for="(memberId, index) in transaction.members"
            :key="memberId"
          >
            {{ memberNames[memberId] || "❓"
            }}<span v-if="index < transaction.members.length - 1">, </span>
          </span>
        </span>
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

// 🔄 Mitglieder abrufen und Namen zuordnen
const loadGroupMembers = async () => {
  console.log("🔄 Lade Mitglieder der Gruppe für ID:", groupId);

  const members = await getGroupMembers(groupId);
  console.log("📌 Mitglieder erhalten:", members);

  const namesMap = {};

  // IDs in Namen umwandeln
  for (const member of members) {
    namesMap[member.id] = member.username;
  }

  // Auch createdBy-Felder in Namen auflösen
  for (const transaction of transactions.value) {
    const creatorId = transaction.createdBy;
    const alreadyKnown = namesMap[creatorId];
    if (!alreadyKnown && creatorId) {
      const match = members.find((m) => m.id === creatorId);
      if (match) {
        namesMap[creatorId] = match.username;
      }
    }
  }

  memberNames.value = namesMap;
  console.log("✅ Mitgliedsnamen gespeichert:", memberNames.value);
};

// Beobachte Transaktionen und lade Membernamen, wenn sich was ändert
watch(
  transactions,
  async (newTransactions) => {
    if (newTransactions.length > 0) {
      await loadGroupMembers();
    }
  },
  { immediate: true }
);

// Beim ersten Laden
onMounted(async () => {
  await transactionStore.fetchTransactions(groupId);
  await loadGroupMembers();
});
</script>

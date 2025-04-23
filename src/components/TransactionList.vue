<!-- TransactionList.vue -->
<!-- COMMENTS müssen gekürzt werden -->
<template>
  <div class="transactions">
    <h2>📜 Transaktionen</h2>
    <ul>
      <li
        v-for="transaction in transactions"
        :key="transaction.id"
        class="transaction-item"
      >
        <div class="transaction-header">
          <span class="icon">
            {{
              transaction.type === "send"
                ? "📤"
                : transaction.type === "receive"
                  ? "📥"
                  : "🔄"
            }}
          </span>
          <span
            :class="{
              sent: transaction.type === 'send',
              received: transaction.type === 'receive',
              transfer: transaction.type === 'transfer',
            }"
          >
            {{ transaction.amount }}€
          </span>
        </div>

        <div class="transaction-body">
          <p class="sender">
            <strong>{{
              memberNames[transaction.createdBy] || "Unbekannt"
            }}</strong>
            <span v-if="transaction.createdAt" class="date"
              >({{ formatDate(transaction.createdAt) }})</span
            >
            <br />An:
          </p>

          <div class="receiver" v-if="transaction.members">
            <div class="member-list shorter">
              <span
                v-for="(memberId, index) in transaction.members"
                :key="memberId"
                class="member-name"
                :title="memberNames[memberId] || '❓'"
              >
                {{ memberNames[memberId] || "❓" }}<br />
                <span v-if="index < transaction.members.length - 1"
                  >,&nbsp;</span
                >
              </span>
            </div>
          </div>

          <p v-if="transaction.comment" class="comment">
            📝 {{ transaction.comment }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useTransactionStore } from "@/pinia/transactionStore";
import { getGroupMembers } from "@/services/groupService";
import { useRoute } from "vue-router";

// 📅 Hilfsfunktion zur Datum-Formatierung
const formatDate = (timestamp) => {
  if (!timestamp || typeof timestamp.toDate !== "function") return "—";
  return timestamp.toDate().toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const transactionStore = useTransactionStore();
const route = useRoute();
const groupId = route.params.groupId;

const transactions = computed(() => transactionStore.transactions);
const memberNames = ref({});

// 🔄 Mitglieder abrufen und Namen zuordnen
const loadGroupMembers = async () => {
  // console.log("🔄 Lade Mitglieder der Gruppe für ID:", groupId); //DEBUG

  const members = await getGroupMembers(groupId);
  // console.log("📌 Mitglieder erhalten:", members); //DEBUG

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
  // console.log("✅ Mitgliedsnamen gespeichert:", memberNames.value); //DEBUG
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
<style scoped>
.transactions {
  max-width: 600px;
  margin: auto;
  font-family: "Arial", sans-serif;
}

.transaction-item {
  background: #fbfbf9;
  padding: 16px;
  margin: 10px 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  list-style: none;
  transition:
    transform 0.2s ease-in-out,
    background 1s;
}

.transaction-item:hover {
  transform: scale(0.95);
  background: var(--color-background-colored);
}

.transaction-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
}

.icon {
  font-size: 22px;
}

.sent {
  color: red;
  font-weight: bold;
}

.received {
  color: green;
  font-weight: bold;
}

.transfer {
  color: blue;
  font-weight: bold;
}

.transaction-body {
  margin-top: 0.5rem;
}

.sender,
.receiver,
.comment {
  font-size: 16px;
  margin: 4px 0;
}

.date {
  font-size: 14px;
  color: #888;
}

.member-list {
  display: flex;
  flex-direction: column;
}

.member-name {
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
ul {
  margin: 0;
  padding: 0;
}

.shorter {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 40vw; /* oder was bei dir passt */
  display: inline-block;
  vertical-align: bottom;
}
</style>

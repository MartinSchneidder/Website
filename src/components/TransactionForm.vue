<script setup>
import { ref, computed, watch } from "vue";
import { useTransactionStore } from "@/pinia/transactionStore";
import { getUserById } from "@/services/userService"; // Funktion zum Abrufen des Benutzernamens
import { updateBalances } from "@/services/balanceService";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/pinia/authStore";
import { useBalanceStore } from "../pinia/balanceStore";

const props = defineProps({
  members: Array, // Mitglieder der Gruppe
});

const balanceStore = useBalanceStore();
const transactionStore = useTransactionStore();
const route = useRoute();
const groupId = ref(route.params.groupId); // Aktuelle Gruppen-ID

const selectedMembers = ref([]);
const amount = ref("");
const comment = ref("");
const transferType = ref("send");

const membersWithUsername = ref([]); // Mitglieder mit Usernamen
const authStore = useAuthStore();
const currentUser = computed(() => authStore.user);
const buttonSend = computed(() =>
  transferType.value === "send" ? "💸 Senden!" : "💸 Erhalten!"
);

// Funktion um Mitglieder zu bereichern
/*enrichMembers():
Diese Funktion lädt für jedes Mitglied die User-Daten (z.B. den Usernamen) 
und speichert diese Informationen in membersWithUsername.value.*/
const enrichMembers = async (members) => {
  const enriched = [];

  for (const member of members) {
    const user = await getUserById(member.id); // ID zu Username
    enriched.push({
      ...member,
      username: user?.username ?? "Unbekannt",
    });
  }

  membersWithUsername.value = enriched;
};

// Watcher auf props.members um Mitglieder zu befüllen
/* watch() mit immediate: true:
 Wir überwachen props.members und rufen die Funktion enrichMembers() 
 sofort beim Laden der Komponente und bei jeder Änderung von props.members auf.*/
watch(
  () => props.members,
  async (newMembers) => {
    if (newMembers.length > 0) {
      await enrichMembers(newMembers);
    }
  },
  { immediate: true }
);

// Der aktive User wird aus der Liste der auswählbaren Mitglieder herausgefiltert
const filteredMembers = computed(() => {
  if (!currentUser.value?.uid || !membersWithUsername.value.length) return [];

  return membersWithUsername.value.filter(
    (member) => member.id !== currentUser.value.uid
  );
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
    createdBy: currentUser.value?.uid,
    createdAt: new Date().toISOString(),
  };

  await transactionStore.addTransaction(groupId.value, transaction);
  await updateBalances(groupId.value, transaction);
  await balanceStore.loadBalances(groupId.value);

  alert("Transaktion gespeichert!");
};
</script>
<template>
  <div class="ghibli-container">
    <fieldset class="ghibli-card">
      <legend class="ghibli-heading">Neue Transaktion</legend>

      <form @submit.prevent="submitTransaction" class="ghibli-form">
        <!-- Empfänger -->
        <fieldset class="ghibli-fieldset-group">
          <legend class="ghibli-label">Empfänger auswählen:</legend>
          <div class="ghibli-members">
            <div
              v-for="member in filteredMembers"
              :key="member.id"
              class="ghibli-checkbox"
            >
              <input
                type="checkbox"
                :id="'member-' + member.id"
                v-model="selectedMembers"
                :value="member.id"
              />
              <label :for="'member-' + member.id" :title="member.username">
                {{ member.username }}
              </label>
            </div>
          </div>
        </fieldset>

        <!-- Betrag -->
        <label class="ghibli-label">Betrag (€):</label>
        <input
          type="number"
          v-model="amount"
          placeholder="z. B. 12,50"
          required
          class="ghibli-input"
        />

        <!-- Kommentar -->
        <label class="ghibli-label">Kommentar (optional):</label>
        <input
          type="text"
          v-model="comment"
          placeholder="Z. B. Kino, Pizza, etc."
          class="ghibli-input"
        />

        <!-- Transfer-Richtung -->
        <fieldset class="ghibli-fieldset-group">
          <legend class="ghibli-label">Transaktionstyp</legend>
          <label class="ghibli-radio">
            <input type="radio" value="send" v-model="transferType" />
            ➡️ Geld senden
          </label>
          <label class="ghibli-radio">
            <input type="radio" value="receive" v-model="transferType" />
            🔄 Geld erhalten
          </label>
        </fieldset>

        <!-- Button -->
        <button type="submit" class="ghibli-button">{{ buttonSend }}</button>
      </form>
    </fieldset>
  </div>
</template>

<style scoped>
.ghibli-container {
  display: flex;
  justify-content: center;
  padding: 2rem;

  /* background: #f9f6f0; */
}

.ghibli-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 12px 24px rgba(100, 100, 100, 0.1);
  border: 2px solid var(--color-border);
  max-width: 50vw;
  width: 100%;
}

.ghibli-heading {
  font-size: 1.6rem;
  font-weight: 600;
  color: #4b4b4b;
  margin-bottom: 1.5rem;
  text-align: center;
}

.ghibli-label {
  font-weight: 600;
  color: #5a5a5a;
  margin-top: 1.2rem;
  display: block;
}

.ghibli-input {
  width: 85%;
  padding: 0.75rem;
  margin-top: 0.3rem;
  border: 2px solid var(--color-border);
  border-radius: 12px;
  background-color: #fbfbf9;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.ghibli-input:focus {
  outline: none;
  border-color: var(--color-font-colored);
  background-color: var(--color-background-colored);
}

.ghibli-members {
  display: flex;
  flex-direction: column;
  align-items: first baseline;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.ghibli-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: #444;
}

.ghibli-checkbox label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 40vw; /* oder was bei dir passt */
  display: inline-block;
  vertical-align: bottom;
}

.ghibli-fieldset-group {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 12px;
  background-color: #fbfbf9;
  border: 2px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ghibli-radio {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 500;
  color: #3d3d3d;
}

.ghibli-button {
  margin-top: 2rem;
  padding: 0.8rem 1.6rem;
  background-color: var(--color-akzent);
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 1.1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.ghibli-button:hover {
  background-color: var(--color-font-colored);
  cursor: pointer;
}

@media (max-width: 500px) {
  .ghibli-card {
    padding: 1.5rem;
  }

  .ghibli-heading {
    font-size: 1.4rem;
  }
}
</style>

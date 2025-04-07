<!-- components/BalanceOverview.vue -->
<template>
  <div class="balance-list">
    <h2>💰 Gruppensaldo</h2>
    <ul v-if="balancesWithNames.length">
      <li
        v-for="item in balancesWithNames"
        :key="item.id"
        :class="item.balance >= 0 ? 'positive' : 'negative'"
      >
        {{ item.username }}: {{ item.balance.toFixed(2) }} €
      </li>
    </ul>
    <p v-else>Keine Balances gefunden.</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getGroupBalances } from "@/services/balanceService";
import { getUserById } from "@/services/userService";
import { useRoute } from "vue-router";

const balancesWithNames = ref([]);
const route = useRoute();
const groupId = route.params.groupId;

onMounted(async () => {
  const rawBalances = await getGroupBalances(groupId);
  const withUsernames = [];

  for (const entry of rawBalances) {
    const user = await getUserById(entry.id);
    withUsernames.push({
      ...entry,
      username: user.username || "Unbekannt",
    });
  }

  balancesWithNames.value = withUsernames;
});
</script>

<style scoped>
.balance-list {
  margin-top: 2rem;
}

.positive {
  color: green;
}

.negative {
  color: red;
}
</style>

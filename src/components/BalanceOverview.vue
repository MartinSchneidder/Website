<!-- components/BalanceOverview.vue -->
<script setup>
import { onMounted, computed, ref } from "vue";
import { getGroupBalances } from "@/services/balanceService";
import { getUserById } from "@/services/userService";
import { useRoute } from "vue-router";
import { useBalanceStore } from "@/pinia/balanceStore";

const route = useRoute();
const groupId = route.params.groupId;
const balanceStore = useBalanceStore();

onMounted(() => {
  balanceStore.loadBalances(groupId);
});

const balancesWithNames = computed(() => balanceStore.balances);
</script>

<template>
  <div class="ghibli-container">
    <fieldset class="ghibli-card">
      <legend class="ghibli-heading">💰 Gruppensaldo</legend>
      <div class="balance-list">
        <ul v-if="balancesWithNames.length" class="ghibli-members">
          <li
            v-for="item in balancesWithNames"
            :key="item.id"
            :title="item.username || '❓'"
            :class="item.balance >= 0 ? 'positive' : 'negative'"
          >
            <span class="member-name">{{ item.username }}</span
            >: {{ item.balance.toFixed(2) }} €
          </li>
        </ul>
        <p v-else>Keine Balances gefunden.</p>
      </div>
    </fieldset>
  </div>
</template>

<style scoped>
.ghibli-container {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.ghibli-card {
  background: #ffffff;
  margin: 0;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 12px 24px rgba(100, 100, 100, 0.1);
  border: 2px solid var(--color-border);
  max-width: 50rem;
  width: 100%;
}

.ghibli-heading {
  font-size: 1.2rem;
  font-weight: 600;
  color: #4b4b4b;
  margin-bottom: 1.5rem;
  text-align: center;
}

.ghibli-members {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
  padding: 0;
}

.balance-list {
  margin-top: 2rem;
}

.ghibli-members li {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  padding: 0.25rem 0;
  border-bottom: 1px solid #eee;
}

.positive {
  color: green;
}

.negative {
  color: red;
}

.member-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

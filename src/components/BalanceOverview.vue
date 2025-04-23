<!-- components/BalanceOverview.vue -->
<template>
  <div class="ghibli-container">
    <fieldset class="ghibli-card">
      <legend class="ghibli-heading">💰 Gruppensaldo</legend>
      <div class="balance-list">
        <ul v-if="balancesWithNames.length" class="ghibli-members">
          <li
            v-for="item in balancesWithNames"
            :key="item.id"
            class="member-name"
            :title="item.username || '❓'"
            :class="item.balance >= 0 ? 'positive' : 'negative'"
          >
            {{ item.username }}: {{ item.balance.toFixed(2) }} €
          </li>
        </ul>
        <p v-else>Keine Balances gefunden.</p>
      </div>
    </fieldset>
  </div>
</template>

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
  width: 50vw;
  /* width: 100%; */
}
@media (max-width: 500px) {
  .ghibli-card {
    padding: 1.5rem;
  }

  .ghibli-heading {
    /* font-size: 1.4rem; */
  }
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
  align-items: first baseline;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.balance-list {
  margin-top: 2rem;
}

.positive {
  color: green;
}

.negative {
  color: red;
}
.member-name {
  display: inline-block;
  max-width: 40vw; /* Begrenzung */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: bottom;
}
</style>

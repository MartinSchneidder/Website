<!-- AboutView -->
<template>
  <h1>About</h1>
  <CreateGroup />
  <GroupList />
  <TransactionForm />
  <BalanceChart />
  <h1>ENDE</h1>
</template>

<script setup>
import TransactionForm from "../components/TransactionForm.vue";
import BalanceChart from "../components/BalanceChart.vue";
import GroupList from "../components/GroupList.vue";
import CreateGroup from "../components/CreateGroup.vue";
</script>

<!-- GroupView -->
<template>
  <h1>GROUP X</h1>
  <div>bearbeite Mitglieder</div>
  <CreateGroup></CreateGroup>
  <TransactionForm />
  <BalanceChart />
</template>

<script setup>
import TransactionForm from "../components/TransactionForm.vue";
import BalanceChart from "../components/BalanceChart.vue";
import CreateGroup from "../components/CreateGroup.vue";
</script>

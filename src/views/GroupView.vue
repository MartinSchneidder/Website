<template>
  <div v-if="group" class="group-view">
    <h1>{{ group.name }}</h1>
    <p>Bros einladen über: {{ group.id }}</p>
    <BalanceOverview />
    <!-- <TransactionForm /> -->
    <TransactionForm2 :members="groupMembers" />
    <TransactionList />
    <!-- <BalanceChart /> -->
  </div>

  <div v-else class="loading">
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <p v-else>Lädt...</p>
  </div>
</template>

<script setup>
import { ref, watchEffect, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getGroupMembers } from "@/services/groupService.js";
import { getGroupById } from "@/services/groupService.js";
import TransactionForm from "../components/TransactionForm.vue";
import BalanceChart from "../components/BalanceChart.vue";
import TransactionForm2 from "../components/TransactionForm.vue";
import TransactionList from "../components/TransactionList.vue";
import BalanceOverview from "../components/BalanceOverview.vue";

const route = useRoute();
const group = ref(null);
const errorMessage = ref("");
const groupMembers = ref([]);

const groupId = ref(route.params.groupId);

onMounted(async () => {
  groupMembers.value = await getGroupMembers(groupId.value);
});

watchEffect(async () => {
  const groupId = route.params.groupId;
  if (!groupId) {
    errorMessage.value = "Fehler: Keine Gruppen-ID angegeben!";
    return;
  }

  group.value = await getGroupById(groupId);

  if (!group.value) {
    errorMessage.value = "Gruppe nicht gefunden!";
  }
});
</script>

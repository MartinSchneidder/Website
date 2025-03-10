<template>
  <div>
    <h2>Finanzielle Entwicklung</h2>
    <Bar :data="chartData" />
    <ul>
      <li v-for="transaction in store.transactions" :key="transaction.date">
        {{ transaction.date }} - An: {{ transaction.friend }} -
        {{ transaction.amount }}€ ({{ transaction.comment }})
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useTransactionStore } from "@/pinia/transactionStore";
import { Bar } from "vue-chartjs";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip);

const store = useTransactionStore();

const chartData = computed(() => {
  return {
    labels: store.transactions.map((t) => `${t.date}: ${t.comment}`),
    datasets: [
      {
        label: "Beträge",
        data: store.transactions.map((t) => t.amount),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
});
</script>

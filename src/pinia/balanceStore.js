// src/pinia/balanceStore.js
import { defineStore } from "pinia";
import { ref } from "vue";
import { getGroupBalances } from "@/services/balanceService";
import { getUserById } from "@/services/userService";

export const useBalanceStore = defineStore("balance", () => {
  const balances = ref([]);

  async function loadBalances(groupId) {
    // console.log("🔄 Lade Balances für", groupId);
    const rawBalances = await getGroupBalances(groupId);
    const enriched = [];

    for (const entry of rawBalances) {
      const user = await getUserById(entry.id);
      enriched.push({
        ...entry,
        username: user?.username ?? "Unbekannt",
      });
    }

    balances.value = enriched;
  }

  return {
    balances,
    loadBalances,
  };
});

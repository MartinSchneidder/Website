import { defineStore } from "pinia";
import { ref } from "vue";
import { db } from "@/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export const useTransactionStore = defineStore("transactions", () => {
  const transactions = ref([]);

  // Transaktion speichern
  async function addTransaction(groupId, transaction) {
    try {
      const docRef = await addDoc(collection(db, "transactions"), {
        groupId,
        ...transaction,
        createdAt: new Date(),
      });
      transactions.value.push({ id: docRef.id, ...transaction });
      console.log("Transaktion gespeichert!");
    } catch (error) {
      console.error("Fehler beim Speichern der Transaktion:", error);
    }
  }

  // Alle Transaktionen einer Gruppe abrufen
  async function fetchTransactions(groupId) {
    try {
      const q = query(
        collection(db, "transactions"),
        where("groupId", "==", groupId)
      );
      const querySnapshot = await getDocs(q);
      transactions.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error("Fehler beim Abrufen der Transaktionen:", error);
    }
  }

  return { transactions, addTransaction, fetchTransactions };
});

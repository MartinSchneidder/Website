import { defineStore } from "pinia";
import { ref } from "vue";
import { db } from "@/firebase";
import {
  doc,
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

export const useTransactionStore = defineStore("transactions", () => {
  const transactions = ref([]);

  // 🟢 Transaktion unter /groups/{groupId}/transactions hinzufügen
  async function addTransaction(groupId, transaction) {
    try {
      const groupRef = doc(db, "groups", groupId); // 🔗 Referenz zur Gruppe
      const txRef = collection(groupRef, "transactions"); // 📁 Subcollection

      const docRef = await addDoc(txRef, {
        ...transaction,
        createdAt: new Date(),
      });

      transactions.value.push({ id: docRef.id, ...transaction });
      console.log("✅ Transaktion gespeichert in Gruppe", groupId);
    } catch (error) {
      console.error("❌ Fehler beim Speichern:", error);
    }
  }

  // 🔁 Transaktionen aus Subcollection lesen
  async function fetchTransactions(groupId) {
    try {
      const groupRef = doc(db, "groups", groupId);
      const txRef = collection(groupRef, "transactions");

      const q = query(txRef, orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);

      transactions.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error("❌ Fehler beim Abrufen:", error);
    }
  }

  return {
    transactions,
    addTransaction,
    fetchTransactions,
  };
});

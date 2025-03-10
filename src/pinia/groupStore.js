// src/pinia/groupStore.js
import { defineStore } from "pinia";
import { ref } from "vue";
import { db } from "@/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const useGroupStore = defineStore("group", () => {
  const groups = ref([]);

  async function fetchGroups() {
    const querySnapshot = await getDocs(collection(db, "groups"));
    groups.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  async function createGroup(name, members) {
    await addDoc(collection(db, "groups"), { name, members });
    await fetchGroups();
  }

  return { groups, createGroup, fetchGroups };
});

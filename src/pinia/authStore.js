// src/pinia/authStore.js
import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import { auth } from "@/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);

  // Überwache den Auth-Status
  onMounted(() => {
    onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser;
    });
  });

  // Abmelden
  async function logout() {
    await signOut(auth);
    user.value = null;
  }

  return { user, logout };
});

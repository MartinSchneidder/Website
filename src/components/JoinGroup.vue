<template>
  <div class="join-container">
    <h1>Gruppe beitreten</h1>
    <input v-model="codeword" placeholder="Codewort eingeben" />
    <button @click="joinGroup">Beitreten</button>

    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { joinGroupByCode } from "@/services/groupService.js";

const codeword = ref("");
const successMessage = ref("");
const errorMessage = ref("");

const joinGroup = async () => {
  if (!codeword.value.trim()) {
    errorMessage.value = "Bitte ein Codewort eingeben.";
    return;
  }

  try {
    const success = await joinGroupByCode(codeword.value);
    if (success) {
      successMessage.value = "Du bist der Gruppe erfolgreich beigetreten!";
      errorMessage.value = "";
    } else {
      errorMessage.value = "Ungültiges Codewort.";
      successMessage.value = "";
    }
  } catch (error) {
    console.error("Fehler beim Beitreten:", error);
    errorMessage.value = "Fehler beim Beitritt.";
    successMessage.value = "";
  }
};
</script>

<style scoped>
.join-container {
  text-align: center;
}

input {
  padding: 0.5rem;
  margin: 0.5rem;
}

button {
  padding: 0.5rem;
  cursor: pointer;
}

.success {
  color: green;
}

.error {
  color: red;
}
</style>

<template>
  <div class="container">
    <h2>Gruppe beitreten</h2>
    <input v-model="codeword" name="codeword" placeholder="Codewort eingeben" />
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
.container {
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
@media screen and (max-width: 650px) {
  .container {
    margin: 20px 20px;
  }
}
input {
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  background: #42b983;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
}
button:hover {
  background: #369f74;
}
.success {
  color: green;
}
.error {
  color: red;
}
</style>

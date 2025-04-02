<script setup>
import { ref } from "vue";
import { createGroup } from "@/services/groupService.js";

const groupName = ref("");
const successMessage = ref("");
const errorMessage = ref("");

const handleCreateGroup = async () => {
  if (!groupName.value.trim()) {
    errorMessage.value = "Bitte einen Gruppennamen eingeben.";
    return;
  }

  try {
    await createGroup(groupName.value, groupName.value);
    successMessage.value = "Gruppe erfolgreich erstellt!";
    groupName.value = ""; // Eingabefeld leeren
    errorMessage.value = ""; // Fehler zurücksetzen
  } catch (error) {
    errorMessage.value = "Fehler beim Erstellen der Gruppe.";
    console.error(error);
  }
};
</script>

<template>
  <div class="container">
    <h2>Neue Gruppe erstellen</h2>
    <input
      v-model="groupName"
      name="groupName"
      type="text"
      placeholder="Gruppenname"
    />
    <button @click="handleCreateGroup">Erstellen</button>

    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
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

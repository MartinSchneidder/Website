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

<script setup>
import { ref } from "vue";
import { createGroup } from "@/services/groupService.js";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

const router = useRouter();
const groupName = ref("");
const successMessage = ref("");
const errorMessage = ref("");
const Toast = Swal.mixin({
  toast: true,
  position: "bottom-left",
  // background: "url(src/assets/spider.gif)",
  // background: "#12345678",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const handleCreateGroup = async () => {
  if (!groupName.value.trim()) {
    errorMessage.value = "Bitte einen Gruppennamen eingeben.";
    return;
  }

  try {
    await createGroup(groupName.value);
    successMessage.value = "Gruppe erfolgreich erstellt!";
    groupName.value = ""; // Eingabefeld leeren
    errorMessage.value = ""; // Fehler zurücksetzen
    Toast.fire({
      icon: "success",
      title: "Gruppe erfolgreich erstellt!",
      showConfirmButton: false,
      timer: 2500,
    });
  } catch (error) {
    errorMessage.value = "Fehler beim Erstellen der Gruppe.";
    console.error(error);
    Toast.fire({
      icon: "error",
      title: "Fehler beim Erstellen der Gruppe!",
      showConfirmButton: false,
      timer: 0,
    });
  }
  router.push("/home");
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
  box-sizing: border-box;
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

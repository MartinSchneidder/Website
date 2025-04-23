<template>
  <div class="container">
    <h2>Gruppe beitreten</h2>
    <input
      v-model="codeword"
      name="codeword"
      placeholder="Codewort eingeben"
      @input="clearError"
    />
    <button @click="joinGroup">Beitreten</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { joinGroupByCode } from "@/services/groupService.js";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

const router = useRouter();
const codeword = ref("");
const successMessage = ref("");
const errorMessage = ref("");
const clearError = () => {
  errorMessage.value = "";
};
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

const joinGroup = async () => {
  if (!codeword.value.trim()) {
    errorMessage.value = "Bitte ein Codewort eingeben.";
    return;
  }

  try {
    const success = await joinGroupByCode(codeword.value);
    if (success) {
      Toast.fire({
        icon: "success",
        title: "Du bist der Gruppe erfolgreich beigetreten!",
        showConfirmButton: false,
        timer: 2500,
      });
      router.push("/group/" + codeword.value);
    } else {
      Toast.fire({
        icon: "error",
        title: "Ungültiges Codewort!",
        showConfirmButton: false,
        timer: 0,
      });
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
</style>

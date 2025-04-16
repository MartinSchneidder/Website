<!-- NewGroupView -->
<template>
  <div class="containerNewGroups">
    <CreateGroup />
    <JoinGroup />
  </div>
</template>

<script setup>
import CreateGroup from "../components/CreateGroup.vue";
import JoinGroup from "../components/JoinGroup.vue";
</script>

<style scoped>
.containerNewGroups {
  display: flex;
  flex-direction: column;
  gap: 5vh;
  align-items: center;
  justify-content: center;
  /* background: red; */
  height: 100%;
}
</style>

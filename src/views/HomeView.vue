<template>
  <div class="container">
    <Userdata class="Userdata" />
    <GroupOverview class="GroupOverview" />
  </div>
</template>

<script setup>
import Userdata from "../components/Userdata.vue";
import GroupOverview from "../components/GroupOverview.vue";
</script>

<style scoped>
.GroupOverview {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.container {
  height: 100%;
  /* background: firebrick; */
}
</style>

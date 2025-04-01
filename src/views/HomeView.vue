<template>
  <Userdata class="Userdata" />
  <GroupOverview class="GroupOverview" />
</template>

<script setup>
import Userdata from "../components/Userdata.vue";
import GroupOverview from "../components/GroupOverview.vue";
</script>

<style scoped>
/* .Userdata {
  background: green;
}
.GroupOverview {
  background: red;
} */

.GroupOverview {
  /* background: red; */
  padding: 1rem;
}
.Userdata {
  /* background: green; */
  padding: 1rem;
}
</style>

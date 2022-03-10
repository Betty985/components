<script setup lang="ts">
import mySwitch from "@c/switch/index.vue";
import { ref } from "vue";
let value = ref(true);
</script>

<template>
  <div>
    <h1>hi</h1>
    <my-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </my-switch>
  </div>
</template>

<style scoped></style>

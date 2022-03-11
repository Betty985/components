<script setup lang="ts">
import myCard from "@c/card/index.vue";
</script>

<template>
  <my-card>
    <template #title>标题</template>
    <template #subTitle>子标题</template>
    <div v-for="o in 4" :key="o" class="text item">
      {{ "列表内容 " + o }}
    </div>
  </my-card>
</template>

<style scoped></style>

<script setup lang="ts">
import box from "@c/input/box.vue";
import myInput from "@c/input/index.vue";
import { useRoute, useRouter } from "vue-router";
let router = useRouter();
const test = function () {
  router.push("/");
  //   router.go("/");
};
</script>

<template>
  <div>
    <h3>基础效果</h3>
    <box>
      <my-input></my-input>
    </box>
    <h3>禁用状态</h3>
    <box title="点击输入框可以跳转到按钮页面">
      <my-input :disabled="true" @click="test"></my-input>
    </box>
  </div>
</template>

<style scoped></style>

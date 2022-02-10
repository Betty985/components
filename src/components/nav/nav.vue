<script setup lang="ts">
import myBtn from "@/components/button/index.vue";
</script>

<template>
  <nav>
    <my-btn round icon="icon-shouye"
      ><router-link to="/">首页</router-link></my-btn
    >
    <my-btn round icon="icon-anniu"
      ><router-link to="/button">按钮</router-link></my-btn
    >
    <my-btn round icon="icon-B-shurukuang"
      ><router-link to="/input">输入框</router-link></my-btn
    >
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
  margin-left: 3px;
}
nav {
  position: fixed;
  right: 10px;
  top: 10px;
  display: flex;
  flex-direction: column;
}
</style>

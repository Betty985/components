<script setup lang="ts">
import myBtn from "@/components/button/index.vue";
</script>

<template>
  <nav>
    <router-link to="/"
      ><my-btn round icon="icon-shouye">首页</my-btn></router-link
    >
    <router-link to="/button"
      ><my-btn round icon="icon-anniu">按钮</my-btn></router-link
    >
    <router-link to="/input"
      ><my-btn round icon="icon-B-shurukuang">输入框</my-btn></router-link
    >

    <router-link to="/switch"
      ><my-btn round icon="icon-gongyezujian-kaiguan">开关</my-btn></router-link
    >
    <router-link to="/table"
      ><my-btn round icon="icon-gongyezujian-kaiguan">表格</my-btn></router-link
    >
    <router-link to="/divider"
      ><my-btn round icon="icon-gongyezujian-kaiguan"
        >分割线</my-btn
      ></router-link
    >
    <router-link to="/card"> <my-btn round>卡片</my-btn></router-link>
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
button {
  width: 6rem;
}
</style>

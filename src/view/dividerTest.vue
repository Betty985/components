<script setup lang="ts">
import myDivider from "./../components/divider/index.vue";
</script>

<template>
  <div class="div">
    <span
      >I sit at my window this morning where the world like a passer-by stops
      for a moment, nods to me and goes.</span
    >
    <my-divider></my-divider>
    <span
      >There little thoughts are the rustle of leaves; they have their whisper
      of joy in my mind.</span
    >
    <span>What you are you do not see, what you see is your shadow. </span>
    <my-divider content-position="left">Rabindranath Tagore</my-divider>
    <span
      >My wishes are fools, they shout across thy song, my Master. Let me but
      listen.</span
    >
    <my-divider>
      <el-icon><star-filled /></el-icon>
    </my-divider>
    <span>I cannot choose the best. The best chooses me.</span>
    <my-divider content-position="right">Rabindranath Tagore</my-divider>
  </div>
</template>

<style scoped>
.div {
  margin-right: 40px;
  padding: 10px;
  width: 80%;
}
</style>

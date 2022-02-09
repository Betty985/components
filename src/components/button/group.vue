<script setup lang="ts"></script>

<template>
  <div>
    <p><slot name="title"></slot></p>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  display: inline-block;
  vertical-align: middle;
  border: 2px solid silver;
  padding: 10px;
  margin: 10px;
}
p {
  text-align: center;
  font-weight: bold;
}
</style>

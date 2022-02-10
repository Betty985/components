<script setup lang="ts"></script>

<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: block;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  padding: 2rem;
  width: 80%;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 8px rgba(231, 237, 250, 60%),
      0 2px 4px rgba(231, 237, 250, 50%);
  }
}
</style>

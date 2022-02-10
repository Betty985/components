<script setup lang="ts">
const props = defineProps({
  type: String,
  maxlength: Number,
  minlength: Number,
  showWordLimit: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: String,
  prefixIcon: String,
  suffixIcon: String,
  rows: {
    type: Number,
    default: 2,
  },
  autosize: {
    type: Boolean || Object,
    default: 2,
  },
  autocomplete: {
    type: String,
    default: "off",
  },
  resize: String,
  label: String,
  tabindex: String,
  validateEvent: {
    type: Boolean,
    default: true,
  },
});
console.log(props);
</script>

<template>
  <div class="myInput" :class="{ disabled: props.disabled }">
    <input type="text" :disabled="props.disabled" placeholder="请输入内容" />
  </div>
</template>
<style lang="scss" scoped>
@import "index.scss";
</style>

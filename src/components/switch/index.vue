<script setup lang="ts">
import { ref } from "vue";
let props = defineProps({
  modelValue: { type: Boolean || String || Number, default: true },
  disabled: { type: Boolean, default: false },
  width: { type: Number, default: 40 },
  activeIconClass: String,
  inactiveIconClass: String,
  activeText: String,
  inactiveText: String,
  activeValue: {
    type: Boolean || String || Number,
    default: true,
  },
  inactiveValue: {
    type: Boolean || String || Number,
    default: false,
  },
  activeColor: { type: String, default: "#409EFF" },
  inactiveColor: { type: String, default: "#C0CCDA" },
});
let emit = defineEmits(["update:modelValue"]);
function toggle() {
  emit("update:modelValue", !props.modelValue);
}
</script>

<template>
  <div>
    <input :value="props.modelValue" />
    <span
      class="my-switch"
      :class="{ checked: props.modelValue }"
      :disabled="props.disabled"
      :style="{
        width: props.width + 'px',
        backgroundColor: props.modelValue
          ? props.activeColor
          : props.inactiveColor,
      }"
      @click="toggle"
    ></span>
  </div>
</template>

<style lang="scss" scoped>
@import "index.scss";
input {
  width: 0;
  padding: 0;
  border: 0;
  margin: 0;
}
</style>

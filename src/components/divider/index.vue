<script setup lang="ts">
let props = defineProps({
  direction: {
    type: String,
    default: "horizontal",
  },
  contentPosition: {
    type: String,
    default: "center",
  },
  borderStyle: {
    type: String,
    default: "solid",
  },
});
</script>

<template>
  <div
    class="divider"
    :class="`divider-${props.direction}`"
    :style="{ borderTopStyle: props.borderStyle }"
  >
    <slot
      :class="[
        `divider-${props.contentPosition}`,
        `divider-text ${props.direction}`,
      ]"
    ></slot>
  </div>
</template>

<style scoped lang="scss">
@import "index.scss";
</style>

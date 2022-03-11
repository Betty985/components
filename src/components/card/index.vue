<script setup lang="ts">
let props = defineProps({
  shadow: {
    type: String,
    default: "always",
  },
  bodyStyle: {
    type: Object,
    default: {
      padding: "20px",
    },
  },
});
</script>

<template>
  <div :class="['my-card', `my-card-shadow-${props.shadow}`]">
    <div v-if="$.slots.title || $.slots.subTitle" class="my-card-header">
      <span v-if="$.slots.title">
        <slot name="title"></slot>
      </span>
      <span v-if="$.slots.subTitle">
        <slot name="subTitle"></slot>
      </span>
    </div>
    <div class="my-card-body" :style="props.bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "index.scss";
.my-card {
  width: 30%;
}
</style>

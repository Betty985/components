<script setup lang="ts">
const props = defineProps({
  modelValue: {
    default: false,
  },
});
const emit = defineEmits(["update:modelValue"]);
const click = function () {
  emit("update:modelValue", !props.modelValue);
};
</script>

<template>
  <div class="content" @click="click" :class="[modelValue ? 'one' : 'two']">
    <span class="reversebox ani">是</span>
    <div class="box ani"></div>
  </div>
</template>

<style scoped>
.content {
  position: relative;
  height: 100px;
}
.ani {
  position: absolute;
  transition: all 0.2s;
}
.one {
  background: red;
}
.two {
  background: blue;
}

.one .box {
  background: green;
  width: 100px;
  height: 100%;
  left: 0;
}

.two .box {
  background: green;
  width: 100px;
  height: 100%;
  left: calc(100% - 100px);
}

.one .reversebox {
  left: calc(100% - 1em);
}

.two .reversebox {
  left: 0;
}
</style>

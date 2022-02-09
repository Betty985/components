<script setup lang="ts">
const emit = defineEmits(["click"]);

//test
const props = defineProps({
  size: String,
  type: String,
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  loading: Boolean,
  disabled: Boolean,
  icon: String,
  top: Boolean,
});

import { ref, onMounted } from "vue";

const myref = ref(props).value;
const top = function () {
  var timer = null;
  cancelAnimationFrame(timer);
  timer = requestAnimationFrame(function fn() {
    let oTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (oTop > 0) {
      scrollTo(0, oTop - 50);
      timer = requestAnimationFrame(fn);
    } else {
      cancelAnimationFrame(timer);
    }
  });
};
</script>

<template>
  <button
    ref="btn"
    :size="myref.size"
    :type="myref.type"
    :plain="myref.plain"
    :round="myref.round"
    :class="{
      circle: myref.circle,
      plain: myref.plain,
      disabled: myref.disabled,
    }"
    @click="top"
  >
    <i class="iconfont" :class="myref.icon"></i>
    <!-- 备用内容:为一个插槽指定备用 (也就是默认的) 内容是很有用的，只会在没有提供内容的时候被渲染 -->
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import "index.scss";
</style>

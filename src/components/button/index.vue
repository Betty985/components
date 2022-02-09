<script setup lang="ts">
import { ref, onMounted } from "vue";
// 文件夹下有多个文件，路径写到文件夹级会报404错误
import { debounce } from "@/utils/debounce";
import { top } from "@/utils/top";
import _ from "lodash";
const emit = defineEmits(["click"]);
//test
const props = defineProps({
  size: {
    type: String,
  },
  type: String,
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  loading: Boolean,
  disabled: Boolean,
  icon: String,
  isdebounce: {
    type: Object,
    default: {
      open: false,
      time: 100,
    },
  },
  top: Boolean,
});

const myref = ref(props).value;

const deBounceFn = debounce(() => {
  emit("click", "向父组件传值");
}, myref.isdebounce.time);

function myTop() {
  if (myref.top) top(1);
  else {
    if (myref.isdebounce.open) {
      deBounceFn();
    }
  }
}
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
      load: myref.loading,
    }"
    @click="myTop"
  >
    <i class="iconfont" :class="myref.icon"></i>
    <i class="iconfont icon-jiazai" v-if="myref.loading"></i>
    <!-- 备用内容:为一个插槽指定备用 (也就是默认的) 内容是很有用的，只会在没有提供内容的时候被渲染 -->
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import "index.scss";
</style>

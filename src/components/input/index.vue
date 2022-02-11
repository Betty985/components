<script setup>
import { reactive } from "@vue/reactivity";
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    default: "text",
  },
  maxlength: Number,
  minlength: Number,
  showWordLimit: {
    type: Boolean,
    default: false,
  },
  // value: String || Number,
  vModel: String || Number,
  placeholder: String,
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
    default: false,
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
// 清空输入框
let clear = function () {
  emit("update:modelValue", "");
};
// 向父组件传值
let update = function (e) {
  emit("update:modelValue", e.target.value);
};
// 显示密码（响应式）
let state = reactive({
  mytype: props.type,
  eye: "iconfont icon-yanjing",
});

function show() {
  state.mytype = state.mytype == "text" ? "password" : "text";
  state.eye = state.eye == "icon-yanjing" ? "icon-biyanjing" : "icon-yanjing";
}
</script>

<template>
  <div
    class="myInput"
    :class="{
      disabled: props.disabled,
      clearable: props.clearable,
      showPassword: props.showPassword,
    }"
  >
    <input
      :type="state.mytype"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      @input="update"
      :value="modelValue"
    />
    <i
      class="iconfont icon-close"
      v-if="clearable && modelValue"
      @click="clear"
    ></i>
    <i
      class="iconfont"
      :class="state.eye"
      v-if="showPassword && modelValue"
      @click="show"
    ></i>
  </div>
</template>
<style lang="scss" scoped>
@import "index.scss";
</style>

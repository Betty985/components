<script setup>
import box from "@c/input/box.vue";
import myInput from "@c/input/index.vue";
import { reactive } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
let router = useRouter();
const test = function () {
  router.push("/");
  //   router.go("/");
};
let state = reactive({
  input1: "",
  input2: "",
  inputModel: "",
  input3: "",
  input4: "",
});
let msg = {
  h1: "基础效果",
  h2: "禁用状态",
  h3: "可清空",
  h4: "密码",
  h5: "带 icon 的输入框",
};
</script>

<template>
  <div>
    <h3>{{ msg.h1 }}</h3>
    <box>
      <my-input
        placeholder="请输入内容(基础)"
        v-model="state.input1"
      ></my-input>
    </box>
    <h3>{{ msg.h2 }}</h3>
    <box>
      <my-input
        v-model="state.input2"
        :disabled="true"
        placeholder="禁用输入框"
      ></my-input>
    </box>
    <h3>{{ msg.h3 }}</h3>
    <box>
      <my-input
        v-model="state.inputModel"
        clearable
        placeholder="请输入内容(可清空)"
      ></my-input>
    </box>
    <h3>{{ msg.h4 }}</h3>
    <box>
      <my-input
        type="password"
        v-model="state.input3"
        placeholder="请输入内容(密码)"
        showPassword
      ></my-input>
    </box>
    <h3>{{ msg.h5 }}</h3>
    <box>
      <my-input v-model="state.input4" placeholder="请输入内容"></my-input>
    </box>
  </div>
</template>

<style scoped></style>

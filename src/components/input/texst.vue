<script setup>
import { reactive } from "@vue/reactivity";

const props = defineProps({
  modelValue: String,
});
const emit = defineEmits();
const react = reactive({
  a: "",
  b: "",
});
function update(e) {
  emit("update:modelValue", e.target.value);
}
function clear() {
  emit("update:modelValue", "");
}
</script>

<template>
  <div class="myinput">
    <input type="text" :value="props.modelValue" @input="update" />
    <button @click="clear">清空</button>
    <!-- <input type="text" v-model="react.a" />
    {{ react.a }} -->
  </div>
</template>

<style scoped></style>

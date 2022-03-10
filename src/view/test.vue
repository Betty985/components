<script setup lang="ts">
import myTable from "@/components/table/index.vue";
import { ref } from "vue";
let columns = [
  {
    title: "姓名",
    key: "name",
  },
  {
    title: "年龄",
    key: "age",
  },
  {
    title: "地址",
    key: "adr",
  },
  {
    title: "test",
    key: "test",
  },
  {
    title: "操作",
    key: "action",
    render: true,
  },
];
function test() {
  alert(1);
}
let data = [
  {
    test: "测试",
    name: "王小明",
    age: 18,
    adr: "武汉",
    action: (h) => {
      return Array.from({ length: 3 }).map((v) => {
        return h(
          "button",
          {
            style: {
              color: "red",
            },
            onClick: test,
          },
          "hello"
        );
      });
    },
  },
  {
    name: "张小刚",
    age: 25,
  },
  {
    name: "张小刚",
    age: 25,
  },
  {
    name: "张小刚",
    age: 25,
  },
];
</script>

<template>
  <div>
    <myTable :data="data" :columns="columns"></myTable>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import myTable from "@c/table/index1.vue";
import { ref } from "vue";

let dataList = ref([
  {
    name: "lily",
    sex: 0,
    age: 11,
    skill: (a: any) => {
      return a(
        "button",
        {
          color: "pink",
          onClick: () => {
            alert("pink");
          },
        },
        "点击"
      );
    },
  },
  {
    name: "tom",
    sex: 1,
    age: 17,
  },
  {
    name: "jenny",
    sex: 0,
    age: 5,
  },
  {
    name: "lucy",
    sex: 0,
    age: 13,
  },
]);
let columns = ref([
  {
    name: "姓名",
    key: "name",
  },
  {
    name: "性别",
    key: "sex",
  },
  {
    name: "年龄",
    key: "age",
  },
  {
    name: "能力",
    key: "skill",
    skill: true,
  },
]);
</script>

<template>
  <div>
    <my-table :columns="columns" :data="dataList"></my-table>
  </div>
</template>

<style scoped></style>

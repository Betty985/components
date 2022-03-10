<script setup lang="ts">
import myRender from "./render1.vue";
let props = defineProps({
  data: Array,
  columns: Array,
});
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(col, i) in props.columns" :key="i">
            {{ col.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in props.data" :key="i">
          <td v-for="(col, j) in props.columns" :key="j">
            <template v-if="col.skill">
              <my-render :render="row[col.key]"></my-render>
            </template>
            <template v-else> {{ row[col.key] }}</template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  padding: 0.2rem;
  border: 1px solid #ecf5ff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>

<script setup lang="ts">
import { h } from "vue";
import myRender from "./render.vue";
let props = defineProps({
  columns: Array,
  data: Array,
});
</script>

<template>
  <div>
    <table border="1">
      <thead>
        <tr>
          <th :key="i" v-for="(v, i) in props.columns">{{ v.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="v in props.data">
          <td :key="i" v-for="(vv, ii) in props.columns">
            <template v-if="vv.render">
              <myRender :render="v[vv.key]" />
            </template>
            <template v-else>
              {{ v[vv.key] }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>

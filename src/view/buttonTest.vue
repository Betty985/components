<script setup lang="ts">
import myBtn from "@/components/button/index.vue";
import myGroup from "@/components/button/group.vue";
const isdebounce = {
  open: true,
  time: 3000,
};

const test = function (v) {
  console.log(v);
};
</script>

<template>
  <my-group>
    <template #title> size测试 </template>
    <my-btn>默认按钮</my-btn>
    <my-btn size="medium">中等按钮</my-btn>
    <my-btn size="small">小按钮</my-btn>
    <my-btn size="mini">超小按钮</my-btn>
  </my-group>
  <my-group>
    <template #title> 防抖测试 </template>
    <my-btn type="primary" @click="test" :isdebounce="isdebounce"
      >主要按钮</my-btn
    >
  </my-group>
  <my-group>
    <template #title> type测试 </template>
    <my-btn>默认按钮</my-btn>
    <my-btn type="primary">主要按钮</my-btn>
    <my-btn type="success">成功按钮</my-btn>
    <my-btn type="info">信息按钮</my-btn>
    <my-btn type="warning">警告按钮</my-btn>
    <my-btn type="danger">危险按钮</my-btn>
    <my-btn type="text" plain>文字按钮</my-btn>
  </my-group>
  <my-group>
    <template #title> plain测试 </template>
    <my-btn plain>朴素按钮</my-btn>
    <my-btn type="primary" plain>主要按钮</my-btn>
    <my-btn type="success" plain>成功按钮</my-btn>
    <my-btn type="info" plain>信息按钮</my-btn>
    <my-btn type="warning" plain>警告按钮</my-btn>
    <my-btn type="danger" plain>危险按钮</my-btn>
  </my-group>
  <my-group>
    <template #title>圆角测试 </template>
    <my-btn plain round>默认按钮</my-btn>
    <my-btn type="primary" round>主要按钮</my-btn>
    <my-btn type="success" round>成功按钮</my-btn>
    <my-btn type="info" round>信息按钮</my-btn>
    <my-btn type="warning" round>警告按钮</my-btn>
    <my-btn type="danger" round>危险按钮</my-btn>
  </my-group>
  <my-group>
    <template #title>圆形图标测试 </template>
    <my-btn plain circle icon="icon-edit"> </my-btn>
    <my-btn type="primary" circle icon="icon-fabulous"> </my-btn>
    <my-btn type="success" circle icon="icon-lock"> </my-btn>
    <my-btn type="info" circle icon="icon-notification"> </my-btn>
    <my-btn type="warning" circle icon="icon-mic"> </my-btn>
    <my-btn type="danger" circle icon="icon-wuwangluo"> </my-btn>
  </my-group>
  <my-group>
    <template #title>禁用测试 </template>
    <my-btn disabled>默认按钮</my-btn>
    <my-btn type="primary" disabled>主要按钮</my-btn>
    <my-btn type="success" disabled>成功按钮</my-btn>
    <my-btn type="info" disabled>信息按钮</my-btn>
    <my-btn type="warning" disabled>警告按钮</my-btn>
    <my-btn type="danger" disabled>危险按钮</my-btn>

    <my-btn plain disabled>朴素按钮</my-btn>
    <my-btn type="primary" plain disabled>主要按钮</my-btn>
    <my-btn type="success" plain disabled>成功按钮</my-btn>
    <my-btn type="info" plain disabled>信息按钮</my-btn>
    <my-btn type="warning" plain disabled>警告按钮</my-btn>
    <my-btn type="danger" plain disabled>危险按钮</my-btn>
    <my-btn type="text" disabled>文本按钮</my-btn>
  </my-group>
  <my-group>
    <template #title>top测试 </template>
    <my-btn top>默认按钮</my-btn>
    <my-btn type="primary" top>主要按钮</my-btn>
    <my-btn type="success" top>成功按钮</my-btn>
    <my-btn type="info" top>信息按钮</my-btn>
    <my-btn type="warning" top>警告按钮</my-btn>
    <my-btn type="danger" top>危险按钮</my-btn>
  </my-group>
  <my-group>
    <template #title>加载测试</template>
    <my-btn type="primary" :loading="true">加载中</my-btn>
  </my-group>
</template>

<style lang="scss" scoped>
[data-v-324b0472] {
  display: block;
  width: 80%;
}
// $color_red: red;
// $color_green: green;
// $width: 1263;

// @function px2vw($px) {
//   @return $px/$width * 100vw;
// }
// .box {
//   background: $color_green;
//   width: px2vw(100);
//   height: px2vw(100);
//   .name {
//     color: $color_red;
//   }
// }
</style>

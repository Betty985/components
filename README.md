# 配置模板

- vscode 去配置 json
- 在集成终端用“npm create vite@latest”创建项目
- .vscode 文件夹下格式为.code-snippets 的文件可以配置快速访问的代码片段
- 属性名为描述，prefix 的属性值为快速访问代码片段的字符串

```json
{
  "描述1": {
    "prefix": "zyh",
    "body": [
      "<script setup lang='ts'>",
      "</script>\n",
      "<template>",
      "\t<div>\n",
      "\t</div>",
      "</template>\n",
      "<style scoped>\n",
      "</style>",
      "$2"
    ],
    "description": "描述2"
  }
}
```

# props,emit 传值

## input 类型组件(input switch)

父组件

```js
<father v-model="value"></father>
```

子组件

```js
const props = defineProps({
  modelValue: {
    default: false,
  },
});
const emit = defineEmits(["update:modelValue"]);
const click = function () {
  emit("update:modelValue", !props.modelValue);
};
```

## [参考资料](https://v3.cn.vuejs.org/guide/migration/v-model.html#%E6%A6%82%E8%A7%88)

> 用于自定义组件时，v-model prop 和事件默认名称已更改：
> prop：value -> modelValue；
> 事件：input -> update:modelValue

# 怎么获取元素属性，然后根据元素属性修改 class

- ref
- 通过自定义属性对象

# 配置 vite 的 src

```js
import { resolve } from "path";
// 路径查找
const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir);
};
// 设置别名
const alias = {
  "/@": pathResolve("src/components"),
  "@build": pathResolve("build"),
  //解决开发环境下的警告
  "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: { alias },
});
```

# css：库

- scss
- less
- windicss

# px->vw

- px = px/页面的大小 \*100%

# 阿里巴巴矢量库

[如何使用](https://blog.csdn.net/chaochao2_0/article/details/112293381)

# vue-router

- 安装：npm install vue-router@4
- 把路由加到实例里。在根组件导入 router，vm.use("router")。之后可以在所有组件通过 this.$router 访问当前路由,如this.$router.push()
- router 配置文件

```ts
// 导入
import{createRouter,createWebHistory} from "vue-router"
// 需要写文件扩展名
import login from "@/login.vue"
const hello =import("路径")
// 定义路由
const routes =[
  // 配置路由 (动态路由)
  {path:"/"，name:"home",components:()=>import("文件路径")},
  // 静态路由
  {path:"/login"，name:"logon",components:login},
// 重定向
{path:"/redirect",redirect:"路径"}]
// 创建路由
const router=createRouter({
  history:createWebhistory(),
  routes
})
export default router
```

- 渲染路由中组件的容器

```vue
<router-view></router-view>
```

## 路由跳转

- router.push()

```js
import { useRoute, useRouter } from "vue-router";
let router = useRouter();
const test = function () {
  router.push("/");
  //   router.go("/");
};
```

- 会渲染成 a 标签`<router-link to="路径"></router-link>`

```html
<router-link to="/">首页</router-link>
```

- hash 值
- BOM 的 API

# scss

- 安装：需要安装三个包

```json
{ "node-sass": "^7.0.1", "sass-loader": "^12.4.0", "style-loader": "^3.3.1" }
```

- style 标签将 lang 属性设置为"scss"可以使用内部 scss 样式
- @import "文件名" 导入外部文件;
- @mixin name{css 代码片段} @include name;可以复用代码片段
- $可以声明变量
- px 转换为 vw 的函数

```scss
$color_red: red;
$color_green: green;
$width: 1263;

@function px2vw($px) {
  @return $px/$width * 100vw;
}
.box {
  background: $color_green;
  width: px2vw(100);
  height: px2vw(100);
  .name {
    color: $color_red;
  }
}
```

# vite 项目添加 loading

- 技巧：chrome 浏览器 devtool 的网络下面可以设置访问流量【默认是 wifi，由于 wifi+本地资源加载太快根本体现不出进度条，所以设置成 3g 就能看出 loading 效果】
- 模仿 vben、pure-admin
- 原理：由于 vue 加载完之后会覆盖 mounted 选择的挂载元素，所以只需要在挂载元素内写好要 loading 的内容即可，因为 vue 加载完底层会通过 innerHTML 全部覆盖。
- 核心代码如下

```html
<body>
  <div id="app">
    要加载的内容，当然也可以在这里写style标签eg:
    <style>
      p {
        color: red;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    </style>
    <p>loading</p>
  </div>
</body>
```

## vben loading 核心代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/组件库.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>组件</title>
    <link
      rel="stylesheet"
      href="//at.alicdn.com/t/font_3171968_vrkn4h6z2bc.css"
    />
  </head>
  <body>
    <div id="app">
      <style>
        html[data-theme="dark"] .app-loading {
          background-color: #2c344a;
        }

        html[data-theme="dark"] .app-loading .app-loading-title {
          color: rgb(255 255 255 / 85%);
        }

        .app-loading {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-color: #f4f7f9;
        }

        .app-loading .app-loading-wrap {
          position: absolute;
          top: 50%;
          left: 50%;
          display: flex;
          transform: translate3d(-50%, -50%, 0);
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .app-loading .dots {
          display: flex;
          padding: 98px;
          justify-content: center;
          align-items: center;
        }

        .app-loading .app-loading-title {
          display: flex;
          margin-top: 30px;
          font-size: 30px;
          color: rgb(0 0 0 / 85%);
          justify-content: center;
          align-items: center;
        }

        .app-loading .app-loading-logo {
          display: block;
          width: 90px;
          margin: 0 auto;
          margin-bottom: 20px;
        }

        .dot {
          position: relative;
          display: inline-block;
          width: 48px;
          height: 48px;
          margin-top: 30px;
          font-size: 32px;
          transform: rotate(45deg);
          box-sizing: border-box;
          animation: antRotate 1.2s infinite linear;
        }

        .dot i {
          position: absolute;
          display: block;
          width: 20px;
          height: 20px;
          background-color: #0065cc;
          border-radius: 100%;
          opacity: 30%;
          transform: scale(0.75);
          animation: antSpinMove 1s infinite linear alternate;
          transform-origin: 50% 50%;
        }

        .dot i:nth-child(1) {
          top: 0;
          left: 0;
        }

        .dot i:nth-child(2) {
          top: 0;
          right: 0;
          animation-delay: 0.4s;
        }

        .dot i:nth-child(3) {
          right: 0;
          bottom: 0;
          animation-delay: 0.8s;
        }

        .dot i:nth-child(4) {
          bottom: 0;
          left: 0;
          animation-delay: 1.2s;
        }
        @keyframes antRotate {
          to {
            transform: rotate(405deg);
          }
        }
        @keyframes antRotate {
          to {
            transform: rotate(405deg);
          }
        }
        @keyframes antSpinMove {
          to {
            opacity: 100%;
          }
        }
        @keyframes antSpinMove {
          to {
            opacity: 100%;
          }
        }
      </style>
      <div class="app-loading">
        <div class="app-loading-wrap">
          <img src="组件库.png" class="app-loading-logo" alt="Logo" />
          <div class="app-loading-dots">
            <span class="dot dot-spin"><i></i><i></i><i></i><i></i></span>
          </div>
          <div class="app-loading-title">我的组件库</div>
        </div>
      </div>
    </div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

## pure loading 核心代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/组件库.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>组件</title>
    <link
      rel="stylesheet"
      href="//at.alicdn.com/t/font_3171968_vrkn4h6z2bc.css"
    />
  </head>
  <body>
    <div id="app">
      <style>
        * {
          margin: 0;
          padding: 0;
        }

        html,
        body {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          font-family: "Reggae One", cursive;
        }

        .loader,
        .loader:before,
        .loader:after {
          border-radius: 50%;
          width: 2.5em;
          height: 2.5em;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          -webkit-animation: loadAnimation 1.8s infinite ease-in-out;
          animation: loadAnimation 1.8s infinite ease-in-out;
        }

        .loader {
          color: #406eeb;
          font-size: 10px;
          margin: 80px auto;
          position: relative;
          text-indent: -9999em;
          -webkit-transform: translateZ(0);
          -ms-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-animation-delay: -0.16s;
          animation-delay: -0.16s;
        }

        .loader:before,
        .loader:after {
          content: "";
          position: absolute;
          top: 0;
        }

        .loader:before {
          left: -3.5em;
          -webkit-animation-delay: -0.32s;
          animation-delay: -0.32s;
        }

        .loader:after {
          left: 3.5em;
        }

        @-webkit-keyframes loadAnimation {
          0%,
          80%,
          100% {
            box-shadow: 0 2.5em 0 -1.3em;
          }

          40% {
            box-shadow: 0 2.5em 0 0;
          }
        }

        @keyframes loadAnimation {
          0%,
          80%,
          100% {
            box-shadow: 0 2.5em 0 -1.3em;
          }

          40% {
            box-shadow: 0 2.5em 0 0;
          }
        }
      </style>
      <div class="loader">Loading...</div>
    </div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

# git

- 查看 git 配置`git config`

## 合并两个分支的代码

- 假如有 a，b 分支，首先切换到 b 分支拉取 b 分支代码确保最新然后添加和提交代码【add->commit】，然后切换到 a 分支执行`git merge b`

## 查看文件改动一般配合`git status`来使用

- 查看那个文件改变了`git status`
- 查看全部文件具体代码变动`git diff `
- 查看具体某个文件变动`git diff xxx`

## 如果没有配置

- 先配置 用户名`git config --globel username xxx`
- 再配置 邮箱`git config --globel username xxx`

## 设置远程提交地址【默认名称 origin】

- 查看远程提交地址：`git remote`
- 删除远程提交地址：`git remote remove xxx`
- `git remote add origin xxx ` origin 为默认名称 方便后面 push 和 pull 使用，eg：`git pull 要提交的地址的名称 分支`

## 提交流程

- `git add .` or `git add xxx`
- `git commit -m 'xxx'`
- `git pull origin xxx`
- `git push origin xxx`

## 查看分支

- `git branch -a `

## 创建分支

- `git branch xxx`

## 删除本地分支

- 不能删除当前所在的分支
- `git branch -d xxx`

## 删除远程分支

- `git push 远程仓库url的名字【remote 设置】 -delete 分支名`

## 切换分支

- `git checkout xxx`

# 组件封装

## button 组件

- props:在组件上注册的一些自定义 attribute
- slot:大概相当于占位符？

### target:

- 布局 -> button
- size 自定义大小
- type 颜色
- plain 浅颜色
- round 圆角
- circle 原型
- loading 加载
- disabled 是否禁用
- icon 图标

- debounce 默认防抖
- top 回到顶部按钮

## input 组件

### target

- type 类型 string text，textarea 和其他 原生 input 的 type 值 text
- value / v-model 绑定值 string / number — —
- maxlength 原生属性，最大输入长度 number — —
- minlength 原生属性，最小输入长度 number — —
- show-word-limit 是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效 boolean — false
- placeholder 输入框占位文本 string — —
- clearable 是否可清空 boolean — false
- show-password 是否显示切换密码图标 boolean — false
- disabled 禁用 boolean — false
- size 输入框尺寸，只在 type!="textarea" 时有效 string medium / small / mini —
- prefix-icon 输入框头部图标 string — —
- suffix-icon 输入框尾部图标 string — —
- rows 输入框行数，只对 type="textarea" 有效 number — 2
- autosize 自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 } boolean / object — false
- autocomplete 原生属性，自动补全 string on, off off
- auto-complete 下个主版本弃用 string on, off off
- name 原生属性 string — —
- readonly 原生属性，是否只读 boolean — false
- max 原生属性，设置最大值 — — —
- min 原生属性，设置最小值 — — —
- step 原生属性，设置输入字段的合法数字间隔 — — —
- resize 控制是否能被用户缩放 string none, both, horizontal, vertical —
- autofocus 原生属性，自动获取焦点 boolean true, false false
- form 原生属性 string — —
- label 输入框关联的 label 文字 string — —
- tabindex 输入框的 tabindex string - -
- validate-event 输入时是否触发表单的校验 boolean - true

- 总结：

# css

- transform 对行内元素无效，可以将元素设置为行内块或者块级元素

# vue

emit("事件名","args")
emit 调用组件上绑定的方法

## input

### 组件通信

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://unpkg.com/vue@next"></script>
  </head>
  <body>
    <div id="hello-vue" class="demo">
      <my-input v-model="msg" name="123"></my-input>
      <br />
      <my-input v-model="msg1" name="1234"></my-input>
      <br />
      <my-input v-model="msg2" name="1235"></my-input>
      <p>msg:{{msg}}</p>
      <p>msg1:{{msg1}}</p>
      <p>msg2:{{msg2}}</p>
    </div>

    <script>
      const myInput = {
        props: {
          modelValue: "",
        },
        methods: {
          clear() {
            this.$emit("update:modelValue", "");
          },
          test(e) {
            let value = e.target.value;
            this.$emit("update:modelValue", value);
          },
        },
        template: `<button @click='clear'>clear</button><input :value='modelValue' @input='test'/>`,
      };
      let app = Vue.createApp({
        components: {
          myInput,
        },
        data() {
          return {
            msg: "hello123",
            msg1: "1",
            msg2: "2",
          };
        },
      });

      app.mount("#hello-vue");
    </script>
  </body>
</html>
```

```html
<script setup>
  import { reactive } from "@vue/reactivity";

  const props = defineProps({
    modelValue: String,
  });
  const emit = defineEmits();
  // vue3直接声明的数据不是响应式数据
  // 把数据变成响应式，才能使用v-model
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
```

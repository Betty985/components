import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
// 路径查找
const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir);
};
// 设置别名
const alias = {
  "@": pathResolve("src"),
  "@build": pathResolve("build"),
  //解决开发环境下的警告
  "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: { alias },
});

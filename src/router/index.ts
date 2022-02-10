import {
  createWebHistory,
  createRouter,
  createWebHashHistory,
} from "vue-router";
import ButtonTest from "@/view/buttonTest.vue";
import InputTest from "@v/inputTest.vue";
const routes = [
  { path: "/button", name: "button", component: ButtonTest },
  { path: "/input", component: InputTest },
  { path: "/", redirect: "/button" },
] as any;

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

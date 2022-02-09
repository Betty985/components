import { createWebHistory, createRouter } from "vue-router";
import ButtonTest from "@/test/buttonTest.vue";
const routes = [
  { path: "/button", name: "button", component: ButtonTest },
  { path: "/input", component: () => import("@/components/input/index.vue") },
  { path: "/", redirect: "/button" },
] as any;
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

import {
  createWebHistory,
  createRouter,
  createWebHashHistory,
} from "vue-router";
import ButtonTest from "@/view/buttonTest.vue";
import InputTest from "@v/inputTest.vue";
import SwitchTest from "@v/SwitchTest.vue";
import DividerTest from "@v/dividerTest.vue";
import tableTest from "@v/tableTest.vue";
import test from "@v/test.vue";
const routes = [
  { path: "/button", name: "button", component: ButtonTest },
  { path: "/input", component: InputTest },
  { path: "/switch", component: SwitchTest },
  { path: "/test", component: test },
  { path: "/table", component: tableTest },
  { path: "/divider", component: DividerTest },
  { path: "/", redirect: "/button" },
] as any;

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

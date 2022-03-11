import {
  createWebHistory,
  createRouter,
  createWebHashHistory,
} from "vue-router";
import { routeConvert } from "./../utils/route";
import ButtonTest from "@/view/buttonTest.vue";
import InputTest from "@v/inputTest.vue";
import SwitchTest from "@v/SwitchTest.vue";
import DividerTest from "@v/dividerTest.vue";
import tableTest from "@v/tableTest.vue";
import test from "@v/test.vue";

// let routes = [
//   "buttonTest",
//   "inputTest",
//   "switchTest",
//   "dividerTest",
//   "tableTest",
//   "cardTest",
// ];
// let routeList = routeConvert(routes);
// console.log(routeList);
// function dynamicRoute(routeList) {
//   routeList.map((route) => {
//     let url = `./../views/${route.component}.vue`;
//     route.component = () => import(url);
//     console.log(route);
//     router.addRoute("snowball", route);
//   });
// }

const routes = [
  { path: "/button", name: "button", component: ButtonTest },
  { path: "/input", component: InputTest },
  { path: "/switch", component: SwitchTest },
  { path: "/test", component: test },
  { path: "/table", component: tableTest },
  { path: "/divider", component: DividerTest },
  { path: "/card", component: () => import("./../view/cardTest.vue") },
  { path: "/", redirect: "/button" },
] as any;
const router = createRouter({
  history: createWebHistory(),
  routes,
});
// router.beforeEach((to) => {
//   dynamicRoute(routeList);
// });
export default router;

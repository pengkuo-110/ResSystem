import { createRouter, createWebHashHistory } from "vue-router";
const home = () => import("../pages/home");
const login = () => import("../pages/login");

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
// router.beforeEach((to,from) => {

// });
export default router;

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];
const router = {
  history: createWebHistory(),
  routes
};
export default createRouter(router)
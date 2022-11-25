import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import MainView from "../views/MainView.vue";
import VocView from "../views/VocView.vue";
import StoreView from "../views/StoreView.vue";
import DrinkView from "../views/DrinkView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/",
        component: MainView,
      },
      {
        path: "/voc",
        component: VocView,
      },
      {
        path: "/drink",
        component: DrinkView,
      },
      {
        path: "/store",
        component: StoreView,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

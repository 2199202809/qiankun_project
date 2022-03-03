import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

/*
因为qiankun是通过监听路由结合注册微应用时填写的激活规则来进行确定渲染的微应用
所以需要给路由增加基础路径，基础路径需要和微应用的激活规则相匹配
*/
const router = createRouter({
  history: createWebHistory(
    window.__POWERED_BY_QIANKUN__ ? "/micro-user/" : "/"
  ),
  routes,
});

export default router;

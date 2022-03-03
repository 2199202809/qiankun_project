import Layout from "@/layout/index.vue";
import NotRights from "@/pages/error/403.vue";
import NotFound from "@/pages/error/404.vue";

export const BaseRoute = [
  {
    path: "/",
    component: Layout,
  },
];

export const errorRouter = [
  {
    path: "/error",
    component: Layout,
    children: [
      {
        path: "/403",
        name: "403",
        component: NotRights,
      },
      {
        /*
         * 匹配所有路由
         * 详情请见官方文档：
         * https://router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route
         */
        path: "/:pathMatch(.*)*",
        name: "404",
        component: NotFound,
      },
    ],
  },
];

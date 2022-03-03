import Layout from "@/layout/index.vue";

export default {
  path: "/system",
  component: Layout,
  children: [
    {
      path: "setting",
      component: () => import("@/pages/system/setting/index.vue"),
    },
  ],
};

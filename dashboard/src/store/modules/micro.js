import router from "@/router";
import Layout from "@/layout/index.vue";
import { registerMicroApps, start } from "qiankun";

export default {
  namespaced: true,
  state() {
    return {
      isLoadMicro: false, // 微应用路由是否加载完成
    };
  },
  mutations: {
    changeLoadStatus(state, payload) {
      state.isLoadMicro = payload;
    },
    startMicroApps(state, payload) {
      // 注册微应用
      registerMicroApps(payload);
      // 启动微服务
      start({ sandbox: { strictStyleIsolation: true } });
    },
  },
  actions: {
    // 加载微应用路由
    loadMicroRouter({ commit }) {
      return new Promise((res) => {
        // 模拟异步请求
        setTimeout(() => {
          const microRouter = [
            {
              name: "micro-user",
              entry: "//localhost:8001",
              container: "#view-main",
              activeRule: "/micro-user",
            },
            {
              name: "micro-salary",
              entry: "//localhost:8002",
              container: "#view-main",
              activeRule: "/micro-salary",
            },
          ];

          microRouter.forEach((micro) => {
            /*
             给每一个微应用都添加一个可以与之相匹配的路由,防止渲染404页面
             通过addRoute添加的路由不会立马生效，需要触发一次新的导航，才会生效
             所以还需要更改路由拦截代码
            */
            router.addRoute({
              path: `${micro.activeRule}/:morePath*`,
              component: Layout,
            });
          });

          commit("changeLoadStatus", true);
          commit("startMicroApps", microRouter);
          res();
        }, 1000);
      });
    },
  },
};

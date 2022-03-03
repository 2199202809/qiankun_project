import store from "@/store";

export default function setupGuard(router) {
  router.beforeEach(async (to) => {
    if (!store.state.micro.isLoadMicro) {
      await store.dispatch("micro/loadMicroRouter");
      /**
       * 不能写成 return { ...to, replace:true }
       * 因为路由是动态添加的，导致第一次没有匹配的路由，则会匹配到404路由
       * 且当有path和name时，跳转的路径以name为主
       * 所以只能以路径作为跳转依据
       */
      return { path: to.path, replace: true };
    } else {
      return true;
    }
  });
}

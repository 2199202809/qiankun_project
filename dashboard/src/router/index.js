import { createRouter, createWebHistory } from "vue-router";
import { BaseRoute, errorRouter } from "./baseRouter";
import setupGuard from "./guard";

/**
 * Vite 实现从文件系统中导入多个模块
 * docs: https://vitejs.cn/guide/features.html#glob-import
 *
 * 以下代码等价于webpack的：
 * const req = require.context('./modules',true,/\.js$/)
 * req.keys().forEach(path => asyncRoutes.push(req(path).default))
 *
 * 读取./modules文件夹中的js文件
 */
let asyncRoutes = [];
const modules = import.meta.globEager("./modules/*.js");
for (const path in modules) {
  asyncRoutes.push(modules[path].default);
}
let routes = asyncRoutes.concat([...BaseRoute, ...errorRouter]);
// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

setupGuard(router);

export default router;

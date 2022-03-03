import { createStore } from "vuex";

const modules = {};
const req = import.meta.globEager("./modules/*.js");
for (const path in req) {
  // 用文件名代表模块名
  // /modules/user.js ==> user
  let pathName = path.split("modules/")[1].split(".")[0];
  if (!modules[pathName]) modules[pathName] = req[path].default;
}

const store = createStore({
  state() {
    return {};
  },
  modules,
});
export default store;

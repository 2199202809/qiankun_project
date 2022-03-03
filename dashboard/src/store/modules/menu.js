export default {
  namespaced: true,
  state() {
    return {
      activeMenu: location.pathname,
    };
  },
  mutations: {
    changeActiveMenu(state, payload) {
      state.activeMenu = payload;
    },
  },
  actions: {},
};

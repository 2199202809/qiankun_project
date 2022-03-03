<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    :default-active="activeMenu"
    text-color="#fff"
    router
    @select="menuSelect"
  >
    <el-menu-item index="/micro-user/">
      <span>用户微应用</span>
    </el-menu-item>
    <el-menu-item index="/micro-salary/">
      <span>薪资微应用</span>
    </el-menu-item>
    <el-menu-item index="/system/setting/">
      <span>薪资微应用</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const activeMenu = computed(() => store.state.menu.activeMenu)
function menuSelect(index) {
  store.commit('menu/changeActiveMenu', index)
}

</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
}
</style>
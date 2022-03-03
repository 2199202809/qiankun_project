<template>
  <el-container>
    <el-header>
      <HeaderWrap />
    </el-header>
    <el-container class="layout-main">
      <el-aside class="nav-bar">
        <NavBar />
      </el-aside>
      <!-- 微应用容器 -->
      <div id="view-main" />
      <!-- 主应用自己的路由渲染 -->
      <router-view />
      <!--
          该处请注意，请不要写成以下结构
          <div id="view-main">
              <router-view/>
          </div>
          这种结构会导致加载完微应用后，无法在使用主应用的路由
      -->
    </el-container>
  </el-container>
</template>



<script setup>
import NavBar from './NavBar.vue'
import HeaderWrap from './HeaderWrap.vue'

</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
}

.nav-bar {
  height: calc(100vh - 60px);
}
</style>
<template>
  <div class="sidebar">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-aside width="200px">
        <el-col :span="24">
          <el-menu :default-active="onRoutes" class="">
            <el-menu-item index="1">
              <router-link to="/user-list">UserList</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/">Home</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/about">About</router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {
  get onRoutes() {
    return this.$route.path;
  }
}
</script>

<style lang="scss" scoped>
</style>

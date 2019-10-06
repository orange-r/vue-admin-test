<template>
  <div class="app-wrapper">
    <el-container style="height: 500px; border: 1px solid #eee">
      <sidebar class="sidebar-container" />

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <span>Header</span>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sidebar from './components/Sidebar/index.vue'

@Component({
  components: {
    Sidebar,
  },
})
export default class Layout extends Vue {
}
</script>

<style lang="scss" scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
</style>

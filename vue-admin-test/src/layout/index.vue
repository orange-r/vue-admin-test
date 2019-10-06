<template>
  <div class="app-wrapper">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
       <sidebar class="sidebar-container" />
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
</style>

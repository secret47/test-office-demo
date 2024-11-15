<template>
    <div class="layout">
      <el-container>
        <el-aside width="300px" class="side">
          <menu></menu>
        </el-aside>
        <el-container class="container">
          <el-header>Header</el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  
  <script setup>
  import menu from './components/menu.vue';
  </script>
  
  <style lang="scss" scoped>
  .layout {
    width: 100%;
    height: 100%;
  
    @media (max-width: 768px) {
      // 在小屏幕设备上调整布局
     .side {
        width: 100%;
        height: auto;
        background: #dedede;
      }
     .container {
        width: 100%;
        height: 100%;
      }
    }
  
   .el-container {
      width: 100%;
      height: 100%;
    }
  
   .side {
      height: 100%;
      background: #dedede;
    }
  
   .container {
      width: calc(100% - 300px);
      height: 100%;
  
     .el-header {
        width: 100%;
        height: 100px;
        background: #ffffff;
      }
  
     .el-main {
        background: #eeeeee;
      }
    }
  }
  </style>
<template>
    <el-menu class="menu">
        <el-sub-menu index="1">
            <template #title>基础管理</template>
            <el-menu-item index="1-1">蜂场管理</el-menu-item>
            <el-menu-item index="1-2">蜂箱管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>认养管理</template>
            <el-menu-item index="2-1">认养设置</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script setup>
import { ref } from 'vue';
const isCollapse = ref(false);
</script>

<style lang="scss" scoped>
.menu:not(.el-menu--collapse) {
    width: 300px;
    min-height: 400px;
}
</style>
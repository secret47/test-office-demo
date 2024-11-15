<template>
    {{ appStore.isMenuCollapsed }}
    <el-menu class="menu" :collapse="appStore.isMenuCollapsed">
        <el-sub-menu index="1">
            <template #title> <el-icon><icon-menu /></el-icon>基础管理</template>
            <el-menu-item index="1-1">蜂场管理</el-menu-item>
            <el-menu-item index="1-2">蜂箱管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title> <el-icon><icon-menu /></el-icon>认养管理</template>
            <el-menu-item index="2-1">认养设置</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title> <el-icon><icon-menu /></el-icon>订单管理</template>
            <el-menu-item index="3-1">订单列表</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
            <template #title> <el-icon><icon-menu /></el-icon>系统管理</template>
            <el-menu-item index="4-1">素材管理</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script setup>
import { ref } from 'vue';
import { useAppStore } from '@/store/module/app';
import {
  Menu as IconMenu,
} from '@element-plus/icons-vue'

const appStore = useAppStore()

const isCollapse = ref(false);
appStore.isMenuCollapsed = isCollapse; // 确保 appStore.isMenuCollapsed 与 isCollapse 同步
</script>

<style lang="scss" scoped>
.menu:not(.el-menu--collapse) {
    width: 300px;
    min-height: 400px;
    border-right: 0;
}
.el-menu--collapse{
    border-right: 0;
}
</style>
<template>
    <el-menu class="menu">
        <el-sub-menu index="1" :collapse="appStore.isMenuCollapsed">
            <template #title>基础管理</template>
            <el-menu-item index="1-1">蜂场管理</el-menu-item>
            <el-menu-item index="1-2">蜂箱管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>认养管理</template>
            <el-menu-item index="2-1">认养设置</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>订单管理</template>
            <el-menu-item index="3-1">订单列表</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
            <template #title>系统管理</template>
            <el-menu-item index="2-1">素材管理</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script setup>
import { ref } from 'vue';
import { useAppStore } from '@/store/module/app';


const appStore = useAppStore()

const isCollapse = ref(false);
</script>

<style lang="scss" scoped>
.menu:not(.el-menu--collapse) {
    width: 300px;
    min-height: 400px;
}
</style>
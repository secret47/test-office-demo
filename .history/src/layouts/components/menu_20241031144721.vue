<template>
    {{ appStore.isMenuCollapsed }}
    <el-menu class="menu" :collapse="appStore.isMenuCollapsed">
        <el-sub-menu :index="1">
            <template #title>
                <el-icon><icon-menu /></el-icon>
                <span>{{ menuTitle('基础管理') }}</span>
            </template>
            <el-menu-item :index="1-1">
                <template #title>
                    <el-icon><icon-menu /></el-icon>
                    <span>{{ menuTitle('蜂场管理') }}</span>
                </template>
            </el-menu-item>
            <el-menu-item :index="1-2">
                <template #title>
                    <el-icon><icon-menu /></el-icon>
                    <span>{{ menuTitle('蜂箱管理') }}</span>
                </template>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu :index="2">
            <template #title>
                <el-icon><icon-menu /></el-icon>
                <span>{{ menuTitle('认养管理') }}</span>
            </template>
            <el-menu-item :index="2-1">
                <template #title>
                    <el-icon><icon-menu /></el-icon>
                    <span>{{ menuTitle('认养设置') }}</span>
                </template>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu :index="3">
            <template #title>
                <el-icon><icon-menu /></el-icon>
                <span>{{ menuTitle('订单管理') }}</span>
            </template>
            <el-menu-item :index="3-1">
                <template #title>
                    <el-icon><icon-menu /></el-icon>
                    <span>{{ menuTitle('订单列表') }}</span>
                </template>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu :index="4">
            <template #title>
                <el-icon><icon-menu /></el-icon>
                <span>{{ menuTitle('系统管理') }}</span>
            </template>
            <el-menu-item :index="4-1">
                <template #title>
                    <el-icon><icon-menu /></el-icon>
                    <span>{{ menuTitle('素材管理') }}</span>
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAppStore } from '@/store/module/app';
import {
    Menu as IconMenu,
} from '@element-plus/icons-vue'

const appStore = useAppStore()

// 计算属性，根据侧边栏收缩状态生成合适的菜单标题内容
const menuTitle = (text) => {
    return computed(() => {
        return appStore.isMenuCollapsed? '' : text;
    })
}
</script>

<style lang="scss" scoped>
.menu:not(.el-menu--collapse) {
    width: 300px;
    min-height: 400px;
    border-right: 0;
}
.el-menu--collapse {
    border-right: 0;
    width: 60px; // 设置收缩时的宽度，可根据实际需求调整
}
</style>
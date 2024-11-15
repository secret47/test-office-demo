<template>
    <el-menu class="menu" :collapse="appStore.isMenuCollapsed" :style="{ width: appStore.sidebarWidth + 'px' }">
        <el-sub-menu index="1">
            <template #title>
                <MenuTitle text="基础管理" />
            </template>
            <el-menu-item index="1-1">
                <template #title>
                    <MenuTitle text="蜂场管理" />
                </template>
            </el-menu-item>
            <el-menu-item index="1-2">
                <template #title>
                    <MenuTitle text="蜂箱管理" />
                </template>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <MenuTitle text="认养管理" />
            </template>
            <el-menu-item index="2-1">
                <template #title>
                    <MenuTitle text="认养设置" />
                </template>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>
                <MenuTitle text="订单管理" />
            </template>
            <el-menu-item index="3-1">
                <template #title>
                    <MenuTitle text="订单列表" />
                </template>
            </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
            <template #title>
                <MenuTitle text="系统管理" />
            </template>
            <el-menu-item index="4-1">
                <template #title>
                    <MenuTitle text="素材管理" />
                </template>
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script setup>
import {ref} from "vue"
import { useAppStore } from '@/store/module/app';
import MenuTitle from './MenuTitle.vue';
import { useRouter, useRoute } from 'vue-router';
const appStore = useAppStore();

const router = useRouter();
let menubar = ref({});
// let routes = router.options.routes[6];

console.log(router.options)

</script>

<style lang="scss" scoped></style>
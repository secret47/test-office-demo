<template>
    <el-menu class="menu" :collapse="appStore.isMenuCollapsed" :style="{ width: appStore.sidebarWidth + 'px' }">
        <el-sub-menu :index="item.index" v-for="(item, index) in menubar" :key="item.index">
            <template #title>
                <MenuTitle :text="item.title" />
            </template>
            <el-menu-item :index="subItem.index" v-for="(subItem, subIndex) in item.children" :key="subItem.index">
                <template #title>
                    <MenuTitle :text="subItem.meta.title" />
                </template>
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script setup>
import { ref } from "vue";
import { useAppStore } from '@/store/module/app';
import MenuTitle from './MenuTitle.vue';
import { useRouter, useRoute } from 'vue-router';

const appStore = useAppStore();
const router = useRouter();

// 筛选出需要在侧边栏显示的路由来构建menubar
const menubar = ref(router.options.routes.filter(route => route.meta && route.meta.isMenu));

console.log(router.options);
</script>

<style lang="scss" scoped></style>
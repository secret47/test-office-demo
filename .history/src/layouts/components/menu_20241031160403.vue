<template>
    <el-menu class="menu" :collapse="appStore.isMenuCollapsed" :style="{ width: appStore.sidebarWidth + 'px' }">
        <!-- 遍历一级路由，筛选出有子路由且meta中有title的路由作为侧边栏一级菜单 -->
        <el-sub-menu :index="item.name" v-for="(item, index) in filteredRoutes.children" :key="item.name">
            <template #title>
                <MenuTitle :text="item.meta.title" />
            </template>
            <!-- 遍历一级路由的子路由，作为侧边栏二级菜单 -->
            <el-menu-item :index="subItem.name" v-for="(subItem, subIndex) in item.children" :key="subItem.name">
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

// 筛选出需要在侧边栏显示的一级路由（有子路由且meta中有title）
const filteredRoutes = ref(router.options.routes.filter(route => route.children && route.children.length > 0 && route.meta && route.meta.title));

console.log(filteredRoutes);
</script>

<style lang="scss" scoped>
.menu {
    background-color: #f5f5f5;
    transition: width 0.3s ease;
}

.menu.collapsed {
    border-right: 0;
    justify-content: center;
}
</style>
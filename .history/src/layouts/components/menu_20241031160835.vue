<template>
    <el-menu class="menu" :collapse="appStore.isMenuCollapsed" :style="{ width: appStore.sidebarWidth + 'px' }">
        <!-- 遍历筛选后的路由，生成侧边栏菜单 -->
        <el-sub-menu :index="item.name" v-for="(item, index) in filteredRoutes" :key="item.name">
            <template #title>
                <MenuTitle :text="item.meta.title" />
            </template>
            <!-- 遍历当前一级路由的子路由，作为二级菜单 -->
            <el-menu-item :index="subItem.name" v-for="(subItem, subIndex) in item.children" :key="subItem.name">
                <template #title>
                    <MenuTitle :text="subItem.meta.title" />
                </template>
                <!-- 如果二级路由还有子路由，继续遍历作为三级菜单 -->
                <el-sub-menu v-if="subItem.children && subItem.children.length > 0" :index="subItem.name + '_sub'" :key="subItem.name + '_sub'">
                    <template #title>
                        <MenuTitle :text="subItem.meta.title +'(展开)' " />
                    </template>
                    <el-menu-item :index="subSubItem.name" v-for="(subSubItem, subSubIndex) in subItem.children" :key="subSubItem.name">
                        <template #title>
                            <MenuTitle :text="subSubItem.meta.title" />
                        </template>
                    </el-menu-item>
                </el-sub-menu>
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

// 筛选出 "dashboard" 路径下的路由及其子路由作为侧边栏菜单数据
const filteredRoutes = ref(router.options.routes.find(route => route.path === "/dashboard").children.filter(childRoute => childRoute.meta && childRoute.meta.title));

console.log(router.options);
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
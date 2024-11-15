<template>
    <el-menu class="menu" :collapse="appStore.isMenuCollapsed" :style="{ width: appStore.sidebarWidth + 'px' }">
        <el-sub-menu index="1" v-for="(item,index) in menubar">
            <template #title>
                <MenuTitle :="item.title" />
            </template>
            <el-menu-item index="1-1" v-for="(i,i) in item.children">
                <template #title>
                    <MenuTitle :text="i.meta.title" />
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

let routes = router.options.routes[1];

let menubar = ref(routes);

console.log(router.options)

</script>

<style lang="scss" scoped></style>
<template>
    <el-breadcrumb class="breadcrumb">
        <el-breadcrumb-item v-for="(breadcrumb, index) in breadcrumbStore.breadcrumbList" :key="index" :to="{ path: breadcrumb.path }">
            {{ breadcrumb.meta.title }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup>
import { useAppStore } from '@/store/module/app';

const appStore = useAppStore();
</script>

<style lang="scss" scoped>
.breadcrumb {
    margin-bottom: 10px;
}
</style>
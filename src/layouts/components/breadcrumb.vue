<template>
    <el-breadcrumb class="breadcrumb">
        <el-breadcrumb-item v-for="(breadcrumb, index) in appStore.breadcrumbList" :key="index" :to="{ path: breadcrumb.path }">
            {{ breadcrumb.name }}
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
<template>
    <div class="layout">
        <el-container>
            <el-aside width="300px" class="side">
                <div class="logo"></div>
                <MenuComponent />
            </el-aside>
            <el-container class="container">
                <el-header>
                    <HeaderComponent></HeaderComponent>
                </el-header>
                <el-main>
                    <div class="bread">
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{ path: '/' }">控制台</el-breadcrumb-item>
                            <el-breadcrumb-item><a href="/">基础管理</a></el-breadcrumb-item>
                            <el-breadcrumb-item>蜂场管理</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <div class="main">
                        <router-view></router-view>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import MenuComponent from "./components/menu.vue"
import HeaderComponent from "./components/header.vue"
import { ref } from 'vue';
const isCollapse = ref(false);
const toggleCollapse = () => {
    isCollapse.value = !isCollapse.value;
};
</script>

<style lang="scss" scoped>
.layout {
    width: 100%;
    height: 100%;

    .el-container {
        width: 100%;
        height: 100%;
    }

    .side {
        height: 100%;

        .logo {
            width: 100%;
            height: 100px;
        }
    }

    .container {
        width: calc(100% - 300px);
        height: 100%;

        .el-header {
            width: 100%;
            height: 100px;
            background: #ffffff;
        }

        .el-main {
            background: #F2F3F8;
            padding-top: 0;
            .bread {
                width: 100%;
                height: 70px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .main {
                width: 100%;
                height: calc(100% - 70px);
                background: #ffffff;
                border-radius: 10px;
            }
        }
    }
}
</style>
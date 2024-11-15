<template>
    <div class="layout">
        <el-container>
            <el-aside width="300px" class="side">
                <div class="logo"></div>
                <MenuComponent />
            </el-aside>
            <el-container class="container">
                <el-header>
                    <el-icon @click="toggleCollapse" class="toggle-icon">
                        <i class="toggle-icon-class"></i>
                    </el-icon>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import MenuComponent from "./components/menu.vue"
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
            background: #eeeeee;
        }
    }
}
</style>
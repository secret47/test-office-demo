<template>
    <div class="layout">
        <el-container>
            <el-aside width="200px" class="side">Aside</el-aside>
            <el-container class="container">
                <el-header>Header</el-header>
                <el-main><router-view></router-view></el-main>
            </el-container>
        </el-container>
    </div>
</template>
<style lang="scss">
    .layout{
        width:100%;
        height: 100%;
        .side{
            height:100%;
            background: #dedede;
        }
    }
</style>
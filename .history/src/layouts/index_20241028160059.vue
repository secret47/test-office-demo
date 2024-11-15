<template>
    <div class="layout">
        <el-container>
            <el-aside width="300px" class="side">Aside</el-aside>
            <el-container class="container">
                <el-header>Header</el-header>
                <el-main><router-view></router-view></el-main>
            </el-container>
        </el-container>
    </div>
</template>
<style lang="scss">
.layout {
    width: 100%;
    height: 100%;

    .el-container {
        width: 100%;
        height: 100%
    }

    .side {
        height: 100%;
        background: #dedede;
    }

    .container {
        width: calc(100% - 300px);
        height: 100%;
        background: #eeaaea
    }
}
</style>
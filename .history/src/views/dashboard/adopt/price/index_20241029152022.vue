<template>
    <div class="main-container">
        <div class="searchBox">
            <el-button type="primary" class="new" @click="openCreateDialog">新建蜂场</el-button>
        </div>
        <div class="list">
            <div class="tables">
                <el-table border :data="farmList"> <el-table-column prop="farmId" label="农场ID"
                        width="180"></el-table-column>
                    <el-table-column prop="farmName" label="蜂场名称" width="180"></el-table-column>
                    <el-table-column prop="address" label="蜂场地址"></el-table-column>
                    <el-table-column prop="hiveNums" label="蜂箱数量">
                        <template #default="scope">
                            {{ scope.row.hiveNums }}
                            <el-button>管理</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="speciesName" label="物种名称"></el-table-column>
                    <el-table-column prop="nectarName" label="花蜜名称"></el-table-column>
                    <el-table-column prop="introduce" label="介绍"></el-table-column>
                    <el-table-column label="操作">
                        <template #default="scope">
                            <el-link type="primary">更新蜂箱</el-link>
                            &nbsp;
                            <el-link type="primary">查看</el-link>
                            &nbsp;
                            <el-link type="danger">删除</el-link>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="pages">
                <el-pagination layout="prev, pager, next" :total="40" />
            </div>
        </div>
    </div>
</template>
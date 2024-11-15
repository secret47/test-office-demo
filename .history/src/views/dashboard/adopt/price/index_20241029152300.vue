<template>
    <div class="main-container">
        <div class="searchBox">
            <el-button type="primary" class="new" @click="openCreateDialog">新建规格</el-button>
        </div>
        <div class="list">
            <div class="tables">
                <el-table border :data="adoptList">
                    <el-table-column prop="adoptTime" label="认养时间" width="180"></el-table-column>
                    <el-table-column prop="adoptPrice" label="认养价格" width="180"></el-table-column>
                    <el-table-column prop="introduce" label="认养介绍"></el-table-column>
                    <el-table-column label="操作">
                        <template #default="scope">
                            <el-link type="primary">更新</el-link>
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
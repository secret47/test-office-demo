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
<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const adoptList = ref([
    { adoptTime: '2023-04-01', adoptPrice: 1000, introduce: '这是一段认养介绍' },
    { adoptTime: '2023-04-02', adoptPrice: 1500, introduce: '这是另一段认养介绍' },
    // 更多数据...
]);

const openCreateDialog = () => {
    // 打开新建规格对话框的逻辑
    ElMessage.success('打开新建规格对话框');
};

const handleUpdate = (scope) => {
    // 更新操作的逻辑
    ElMessage.info(`更新认养ID: ${scope.row.id}`);
};

const handleView = (scope) => {
    // 查看操作的逻辑
    ElMessage.warning(`查看认养ID: ${scope.row.id}`);
};

const handleDelete = (scope) => {
    // 删除操作的逻辑
    ElMessage.error(`删除认养ID: ${scope.row.id}`);
};
</script>
<template>
    <div class="hivebox-container">
        <el-card class="hivebox-card">
            <template #header>
                <div class="card-header">
                    <span>蜂箱管理</span>
                    <el-button type="primary" @click="handleAdd">添加蜂箱</el-button>
                </div>
            </template>

            <el-table :data="hiveboxList" border style="width: 100%">
                <el-table-column prop="id" label="编号" width="100" />
                <el-table-column prop="temperature" label="温度" width="120">
                    <template #default="scope">
                        {{ scope.row.temperature }}°C
                    </template>
                </el-table-column>
                <el-table-column prop="humidity" label="湿度" width="120">
                    <template #default="scope">
                        {{ scope.row.humidity }}%
                    </template>
                </el-table-column>
                <el-table-column prop="adoptStatus" label="认养状态" width="120">
                    <template #default="scope">
                        <el-tag :type="scope.row.adoptStatus ? 'success' : 'info'">
                            {{ scope.row.adoptStatus ? '已认养' : '未认养' }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="adoptSwitch" label="认养开关" width="120">
                    <template #default="scope">
                        <el-switch
                            v-model="scope.row.adoptSwitch"
                            @change="handleSwitchChange(scope.row)"
                        />
                    </template>
                </el-table-column>
                <el-table-column prop="adopter" label="认养人" width="150" />
                <el-table-column prop="adoptTime" label="认养时间" width="180" />
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const hiveboxList = ref([
    {
        id: 'HB001',
        temperature: 25.6,
        humidity: 65,
        adoptStatus: true,
        adoptSwitch: true,
        adopter: '张三',
        adoptTime: '2024-01-15 14:30:00'
    },
    {
        id: 'HB002',
        temperature: 26.1,
        humidity: 62,
        adoptStatus: false,
        adoptSwitch: true,
        adopter: '',
        adoptTime: ''
    }
])

const handleAdd = () => {
    // 添加蜂箱逻辑
}

const handleEdit = (row) => {
    // 编辑蜂箱逻辑
}

const handleDelete = (row) => {
    ElMessageBox.confirm(
        '确认删除该蜂箱吗？',
        '警告',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    ).then(() => {
        // 删除蜂箱逻辑
        ElMessage.success('删除成功')
    })
}

const handleSwitchChange = (row) => {
    // 处理认养开关变化逻辑
}
</script>

<style lang="scss" scoped>
.hivebox-container {

    .hivebox-card {
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}
</style>

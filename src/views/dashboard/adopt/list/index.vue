<template>
    <div class="main-container">
        <div class="searchBox">
            <div class="item">
                <el-input v-model="searchInput" placeholder="输入" class="input-with-select">
                    <template #prepend>
                        <el-select v-model="searchType" placeholder="请选择" style="width: 115px">
                            <el-option label="用户名" value="username" />
                            <el-option label="蜂箱编号" value="hiveId" />
                        </el-select>
                    </template>
                    <template #append>
                        <el-button :icon="Search" @click="handleSearch" />
                    </template>
                </el-input>
            </div>
        </div>
        <div class="list">
            <div class="tables">
                <el-table border :data="adoptList">
                    <el-table-column prop="username" label="用户名" width="120"></el-table-column>
                    <el-table-column prop="hiveId" label="蜂箱编号" width="120"></el-table-column>
                    <el-table-column prop="farmName" label="蜂场名称" width="120"></el-table-column>
                    <el-table-column prop="adoptTime" label="认养时间" width="180"></el-table-column>
                    <el-table-column prop="expireTime" label="到期时间" width="180"></el-table-column>
                    <el-table-column prop="status" label="状态" width="100">
                        <template #default="scope">
                            <el-tag :type="scope.row.status === '有效' ? 'success' : 'danger'">
                                {{ scope.row.status }}
                            </el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="200">
                        <template #default="scope">
                            <el-link type="primary" @click="handleView(scope.row)">查看</el-link>
                            &nbsp;
                            <el-link type="primary" @click="handleEdit(scope.row)">编辑</el-link>
                            &nbsp;
                            <el-link type="danger" @click="handleDelete(scope.row)">删除</el-link>
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
import { ref, reactive } from "vue"
import { Search } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const searchInput = ref('')
const searchType = ref('username')

const adoptList = reactive([
    {
        username: "张三",
        hiveId: "HIVE001",
        farmName: "蜂场A",
        adoptTime: "2023-01-01",
        expireTime: "2024-01-01",
        status: "有效"
    },
    {
        username: "李四",
        hiveId: "HIVE002",
        farmName: "蜂场B",
        adoptTime: "2023-02-01",
        expireTime: "2023-08-01",
        status: "已过期"
    }
])

const handleSearch = () => {
    ElMessage.success('搜索功能待实现')
}

const handleView = (row) => {
    ElMessage.info(`查看用户 ${row.username} 的认养信息`)
}

const handleEdit = (row) => {
    ElMessage.info(`编辑用户 ${row.username} 的认养信息`)
}

const handleDelete = (row) => {
    ElMessageBox.confirm(
        `确定要删除用户 ${row.username} 的认养记录吗?`,
        '警告',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    ).then(() => {
        ElMessage.success('删除成功')
    }).catch(() => {
        ElMessage.info('已取消删除')
    })
}
</script>

<style lang="scss" scoped>

</style>

<template>
    <div class="main-container">
        <div class="searchBox">
            <div class="item">
                <el-input v-model="input3" placeholder="输入" class="input-with-select">
                    <template #prepend>
                        <el-select v-model="select" placeholder="请选择" style="width: 115px">
                            <el-option label="用户名" value="1" />
                            <el-option label="联系方式" value="2" />
                        </el-select>
                    </template>
                    <template #append>
                        <el-button :icon="Search" @click="seachInfo" />
                    </template>
                </el-input>
            </div>
        </div>
        <div class="list">
            <div class="tables">
                <el-table border :data="userList">
                    <el-table-column prop="username" label="用户名" width="120"></el-table-column>
                    <el-table-column prop="phone" label="联系方式" width="120"></el-table-column>
                    <el-table-column prop="adoptHistory" label="认养历史">
                        <template #default="scope">
                            <div v-for="(item, index) in scope.row.adoptHistory" :key="index">
                                {{ item.farmName }} - {{ item.adoptTime }}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="address" label="地址" width="200"></el-table-column>
                    <el-table-column label="操作" width="120">
                        <template #default="scope">
                            <el-link type="primary" @click="handleView(scope.row)">查看</el-link>
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
import { ElMessageBox, ElMessage } from 'element-plus'
import { Search } from '@element-plus/icons-vue'


const userList = reactive([
    {
        username: "用户A",
        phone: "13800138000",
        adoptHistory: [
            {
                farmName: "蜂场A",
                adoptTime: "2023-01-01"
            },
            {
                farmName: "蜂场B",
                adoptTime: "2023-06-01"
            }
        ],
        address: "浙江省杭州市西湖区"
    },
    {
        username: "用户B",
        phone: "13900139000",
        adoptHistory: [
            {
                farmName: "蜂场C",
                adoptTime: "2023-03-15"
            }
        ],
        address: "江苏省南京市玄武区"
    }
])

const handleView = (row) => {
    ElMessage.info(`查看用户: ${row.username}`)
}

const handleDelete = (row) => {
    ElMessageBox.confirm(
        `确定要删除用户 ${row.username} 吗?`,
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

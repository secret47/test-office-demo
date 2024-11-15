<template>
    <div class="main-container">
        <div class="searchBox">
            <div class="item">
                <el-input v-model="searchInput" placeholder="输入" class="input-with-select">
                    <template #prepend>
                        <el-select v-model="searchType" placeholder="请选择" style="width: 115px">
                            <el-option label="订单号" value="orderId" />
                            <el-option label="用户名" value="username" />
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
                <el-table border :data="expressList">
                    <el-table-column prop="orderId" label="订单号" width="180" />
                    <el-table-column prop="username" label="用户名称" width="120" />
                    <el-table-column prop="phone" label="联系电话" width="120" />
                    <el-table-column prop="address" label="收货地址" />
                    <el-table-column prop="expressNo" label="物流单号" width="180" />
                    <el-table-column prop="shipTime" label="发货时间" width="180" />
                    <el-table-column prop="status" label="物流状态" width="100">
                        <template #default="scope">
                            <el-tag :type="getStatusType(scope.row.status)">
                                {{ scope.row.status }}
                            </el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="120">
                        <template #default="scope">
                            <el-link type="primary" @click="handleView(scope.row)">查看</el-link>
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
import { ElMessage } from 'element-plus'

const searchInput = ref('')
const searchType = ref('orderId')

const expressList = reactive([
    {
        orderId: 'ORDER20230001',
        username: '张三',
        phone: '13888888888',
        address: '浙江省杭州市西湖区',
        expressNo: 'SF1234567890',
        shipTime: '2023-08-01 10:00:00',
        status: '已发货'
    },
    {
        orderId: 'ORDER20230002',
        username: '李四',
        phone: '13999999999',
        address: '江苏省南京市玄武区',
        expressNo: 'SF1234567891',
        shipTime: '2023-08-02 14:00:00',
        status: '运输中'
    },
    {
        orderId: 'ORDER20230003',
        username: '王五',
        phone: '13777777777',
        address: '浙江省宁波市海曙区',
        expressNo: 'SF1234567892',
        shipTime: '2023-08-03 16:00:00',
        status: '已签收'
    }
])

const handleSearch = () => {
    ElMessage.success('搜索功能待实现')
}

const handleView = (row) => {
    ElMessage.info(`查看订单: ${row.orderId} 的物流信息`)
}

const getStatusType = (status) => {
    const statusMap = {
        '已发货': 'info',
        '运输中': 'warning',
        '已签收': 'success'
    }
    return statusMap[status] || 'info'
}
</script>

<style lang="scss" scoped>

</style>

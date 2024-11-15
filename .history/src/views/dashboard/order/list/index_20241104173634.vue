<template>
    <div class="main-container">
        <div class="searchBox">
            <div class="item">
                <el-input v-model="input3" placeholder="输入" class="input-with-select">
                    <template #prepend>
                        <el-select v-model="select" placeholder="请选择" style="width: 115px">
                            <el-option label="Restaurant" value="1" />
                            <el-option label="Order No." value="2" />
                            <el-option label="Tel" value="3" />
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
                <el-table border :data="orderList">
                    <el-table-column prop="id" label="订单号" />
                    <el-table-column prop="name" label="姓名" />
                    <el-table-column prop="tel" label="电话" />
                    <el-table-column prop="address" label="地址" />
                    <el-table-column prop="time" label="下单时间" />
                    <el-table-column prop="status" label="状态" />
                    <el-table-column prop="remark" label="备注" />
                    <el-table-column label="操作">
                        <template #default="scope">
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
import { Search } from '@element-plus/icons-vue'
import { ref, reactive } from "vue"
import Swal from 'sweetalert2';


const orderList = reactive([
    {
        id: 1,
        name: '张三',
        tel: '13888888888',
        address: '北京市海淀区',
        time: '2021-09-01 12:00:00',
        status: '待接单',
        remark: '无'
    }
])

const seachInfo = () => {
    Swal.fire({
        title: 'Title',
        text: 'This is an alert message!',
        icon: 'success',
    });
}

const input3 = ref('')
const select = ref('')
</script>
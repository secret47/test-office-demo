<template>
    <div class="main-container">
        <el-table :data="farmList" style="width: 100%">
            <el-table-column prop="date" label="Date" width="180"></el-table-column>
            <el-table-column prop="name" label="Name" width="180"></el-table-column>
            <el-table-column prop="address" label="Operations"></el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <el-link type="primary">查看</el-link>
                    <el-link type="danger">删除</el-link>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script setup>
import { ref, reactive } from "vue"

const farmList = reactive([
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    }
])

</script>
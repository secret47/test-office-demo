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
                        <el-button :icon="Search" />
                    </template>
                </el-input>
            </div>
        </div>
        <div class="list">
            <div class="tables">
                <el-table border :data="orderList">

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
import { ref,reactive } from "vue"

const orderList  = reactive([
    {
        id:1,
        name:'张三',
        tel:'13888888888',
        address:'北京市海淀区',
        time:'2021-09-01 12:00:00',
        status:'待接单',
        remark:'无'
    }
])
const input3 = ref('')
const select = ref('')
</script>
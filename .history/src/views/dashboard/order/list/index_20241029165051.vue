<template>
    <div class="main-container">
        <div class="searchBox">
            <el-input v-model="input3" placeholder="Please input" class="input-with-select">
                <template #prepend>
                    <el-select v-model="select" placeholder="Select" style="width: 115px">
                        <el-option label="Restaurant" value="1" />
                        <el-option label="Order No." value="2" />
                        <el-option label="Tel" value="3" />
                    </el-select>
                </template>
                <template #append>
                    <el-button />
                </template>
            </el-input>
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
</script>
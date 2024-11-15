<template>
    <div class="main-container">
        <div class="searchBox">
            <el-button type="primary" class="new" @click="openCreateDialog">新建蜂场</el-button>
        </div>
        <div class="list">
            <div class="tables">
                <el-table border :data="farmList"> <el-table-column prop="farmId" label="农场ID"
                        width="180"></el-table-column>
                    <el-table-column prop="farmName" label="蜂场名称" width="180"></el-table-column>
                    <el-table-column prop="address" label="蜂场地址"></el-table-column>
                    <el-table-column prop="hiveNums" label="蜂箱数量"></el-table-column>
                    <el-table-column prop="speciesName" label="物种名称"></el-table-column>
                    <el-table-column prop="nectarName" label="花蜜名称"></el-table-column>
                    <el-table-column prop="introduce" label="介绍"></el-table-column>
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

    <el-dialog v-model="showCreateNew" title="新建蜂场" width="50%">
        <span>This is a message</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="showCreateNew = false">Cancel</el-button>
                <el-button type="primary" @click="showCreateNew = false">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>

</template>
<script setup>
import { ref, reactive } from "vue"

const farmList = reactive([
    {
        farmId: "1",
        farmName: "农场A",
        provice: "省份A",
        city: "城市A",
        district: "区域A",
        address: "详细地址A",
        introduce: "这是农场A的介绍",
        hiveNums: "100",
        speciesName: "物种A",
        nectarName: "花蜜A",
        lng: "123.456",
        lat: "78.910"
    },
    {
        farmId: "2",
        farmName: "农场B",
        provice: "省份B",
        city: "城市B",
        district: "区域B",
        address: "详细地址B",
        introduce: "这是农场B的介绍",
        hiveNums: "200",
        speciesName: "物种B",
        nectarName: "花蜜B",
        lng: "123.457",
        lat: "78.911"
    },
    {
        farmId: "3",
        farmName: "农场C",
        provice: "省份C",
        city: "城市C",
        district: "区域C",
        address: "详细地址C",
        introduce: "这是农场C的介绍",
        hiveNums: "300",
        speciesName: "物种C",
        nectarName: "花蜜C",
        lng: "123.458",
        lat: "78.912"
    }
])

const showCreateNew = ref(false)


const openCreateDialog = () =>{
    showCreateNew.value = true;
}
</script>
<template>
    <div class="login">
        <el-form :model="userInfo" label-width="120px">
            <el-form-item :label="$t('username')">
                <el-input v-model="userInfo.username" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="userInfo.password" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
const userInfo = reactive({
    username:"",
    password:""
})
</script>
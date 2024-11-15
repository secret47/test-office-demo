<template>
    <div class="login">
        <div class="loginBox">
            <el-form :model="userInfo" label-width="120px">
            <el-form-item :label="$t('username')">
                <el-input v-model="userInfo.username" />
            </el-form-item>
            <el-form-item :label="$t('password')">
                <el-input v-model="userInfo.password" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary">{{ $t('login') }}</el-button>
            </el-form-item>
        </el-form>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
const userInfo = reactive({
    username: "",
    password: ""
})
</script>
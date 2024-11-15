<template>
    <div class="login">
        <div class="header">
            <div class="logo"></div>
            <div class="language"></div>
        </div>
        <div class="loginBox">
            <div class="title">
                {{ $t('title') }}
            </div>
            <el-form :model="userInfo" label-width="120px">
                <el-form-item>
                    <el-input v-model="userInfo.username" :placeholder="$t('username')" prefix-icon="user" />
                </el-form-item>
                <el-form-item>
                    <el-input v-model="userInfo.password" :placeholder="$t('password')" type="password" show-password
                        prefix-icon="lock" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" long  class="logBtn">{{ $t('login') }}</el-button>
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
<style lang="scss" scoped>
.header {
    width: 100%;
    height: 80px;
    background: #ffffff;
}

.loginBox {
    width: 600px;
    /* 调整为更合理的宽度 */
    margin: 300px auto 0;
    padding: 20px;

    .logBtn{
        width:100%;
        height: 40px;
    }
}

/* 使用 ::v-deep 来穿透 scoped 作用域 */
.loginBox ::v-deep .el-input__inner {
    height: 50px;
    /* 调整为更合理的高度 */
    width: 100%;
    /* 宽度设置为100%，填满父容器 */

}
</style>
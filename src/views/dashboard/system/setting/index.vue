<template>
    <div class="setting-container">
        <!-- 用户信息卡片 -->
        <el-card class="user-card">
            <template #header>
                <div class="card-header">
                    <span>账户信息</span>
                </div>
            </template>
            <el-form :model="userForm" label-width="100px">
                <el-form-item label="用户名">
                    <el-input v-model="userForm.username" disabled></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="userForm.email"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="userForm.phone"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="updateUserInfo">保存修改</el-button>
                </el-form-item>
            </el-form>
        </el-card>

        <!-- 系统信息卡片 -->
        <el-card class="system-card">
            <template #header>
                <div class="card-header">
                    <span>系统信息</span>
                </div>
            </template>
            <el-descriptions :column="1" border>
                <el-descriptions-item label="系统版本">v1.0.0</el-descriptions-item>
                <el-descriptions-item label="Node版本">v16.0.0</el-descriptions-item>
                <el-descriptions-item label="操作系统">CentOS 7.6</el-descriptions-item>
                <el-descriptions-item label="服务器IP">192.168.1.1</el-descriptions-item>
            </el-descriptions>
        </el-card>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

// 用户表单数据
const userForm = reactive({
    username: 'admin',
    email: 'admin@example.com',
    phone: '13800138000'
})

// 密码表单数据
const passwordForm = reactive({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
})

// 密码表单校验规则
const passwordRules = {
    oldPassword: [
        { required: true, message: '请输入原密码', trigger: 'blur' }
    ],
    newPassword: [
        { required: true, message: '请输入新密码', trigger: 'blur' },
        { min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
    ],
    confirmPassword: [
        { required: true, message: '请确认密码', trigger: 'blur' },
        {
            validator: (rule, value, callback) => {
                if (value !== passwordForm.newPassword) {
                    callback(new Error('两次输入的密码不一致'))
                } else {
                    callback()
                }
            },
            trigger: 'blur'
        }
    ]
}

const passwordFormRef = ref(null)

// 更新用户信息
const updateUserInfo = () => {
    ElMessage.success('用户信息更新成功')
}

// 修改密码
const changePassword = () => {
    passwordFormRef.value.validate((valid) => {
        if (valid) {
            ElMessage.success('密码修改成功')
            passwordForm.oldPassword = ''
            passwordForm.newPassword = ''
            passwordForm.confirmPassword = ''
        }
    })
}
</script>

<style lang="scss" scoped>
.setting-container {
    padding: 20px;
    
    .user-card,
    .password-card,
    .system-card {
        margin-bottom: 20px;
    }

    .card-header {
        font-weight: bold;
    }
}
</style>

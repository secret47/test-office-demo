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
      <el-form :model="userInfo" :rules="rules" ref="loginForm" label-width="100px">
        <el-form-item label="Username" prop="username">
          <el-input v-model="userInfo.username" :placeholder="$t('username')" prefix-icon="user" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="userInfo.password"
            :placeholder="$t('password')"
            type="password"
            show-password
            prefix-icon="lock"
          />
        </el-form-item>
        <el-form-item>
          <div class="forget">
            <el-checkbox v-model="rememberPassword">记住密码</el-checkbox>
            <el-link right type="warning" :underline="false" @click="handleForgetPassword">忘记密码？</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            long
            class="logBtn"
            :loading="isLoading"
            @click="handleLogin"
          >
            {{ $t('login') }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { userLogin } from "@/api/index";
import { ElMessage } from 'element-plus';

const userInfo = reactive({
  username: "",
  password: "",
});
const rememberPassword = ref(false);
const isLoading = ref(false);
const loginForm = ref(null);

const rules = {
  username: [
    { required: true, message: $t('pleaseInputUsername'), trigger: "blur" },
  ],
  password: [
    { required: true, message: $t('pleaseInputPassword'), trigger: "blur" },
  ],
};

const handleLogin = () => {
  loginForm.value.validate((valid) => {
    if (valid) {
      isLoading.value = true;
      userLogin(userInfo)
        .then((res) => {
          console.log(res);
          // 处理登录成功逻辑，例如跳转到首页
          ElMessage.success("登录成功");
          // 假设有一个路由跳转方法
          // router.push('/');
        })
        .catch((error) => {
          console.error(error);
          ElMessage.error("登录失败");
        })
        .finally(() => {
          isLoading.value = false;
        });
    } else {
      ElMessage.error("请填写完整的表单");
    }
  });
};

const handleForgetPassword = () => {
  // 处理忘记密码逻辑
  ElMessage.info("忘记密码功能暂未实现");
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
  background: #ffffff;
}

.loginBox {
  width: 600px;
  margin: 300px auto 0;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .title {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
  }

  .forget {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .logBtn {
    width: 100%;
    height: 40px;
  }
}

/* 使用 ::v-deep 来穿透 scoped 作用域 */
.loginBox ::v-deep .el-input__inner {
  height: 50px;
  width: 100%;
}
</style>
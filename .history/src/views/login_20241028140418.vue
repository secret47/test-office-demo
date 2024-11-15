<template>
  <div class="login">
    <div class="header">
      <div class="logo"></div>
      <div class="language"></div>
    </div>
    <div class="loginBox">
      <h2>Boxboard</h2>
      <p>Welcome back, you've been missed!</p>
      <div class="social-login">
        <el-button type="primary" icon="el-icon-google">Sign In with Google</el-button>
        <el-button type="primary" icon="el-icon-apple">Sign In with Apple ID</el-button>
      </div>
      <el-form :model="userInfo" label-width="120px">
        <el-form-item>
          <el-input v-model="userInfo.email" :placeholder="t('email')" prefix-icon="mail" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="userInfo.password" :placeholder="t('password')" type="password" show-password prefix-icon="lock" />
        </el-form-item>
        <el-form-item>
          <div class="remember-section">
            <el-checkbox v-model="userInfo.rememberMe">Remember Me</el-checkbox>
            <el-link @click="forgotPassword" right type="warning" :underline="false">Forgot Password?</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" long class="logBtn">Sign Up</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
const userInfo = reactive({
  email: '',
  password: '',
  rememberMe: false
});
const t = (key) => {
  // 这里可以根据你的国际化需求实现 t 函数，返回对应的翻译文本
  return key;
};
const forgotPassword = () => {
  // 实现忘记密码的逻辑
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
  margin: 150px auto 0;
  padding: 20px;

  h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 30px;
  }

 .social-login {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
  }

 .remember-section {
    display: flex;
    align-items: center;
    margin-top: 15px;
  }

 .logBtn {
    width: 100%;
    height: 40px;
  }

  // 使用 ::v-deep 来穿透 scoped 作用域
  ::v-deep.el-input__inner {
    height: 45px;
    width: 100%;
  }
}
</style>
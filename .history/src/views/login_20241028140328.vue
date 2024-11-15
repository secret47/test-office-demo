<!-- <template>
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
                    <div class="forget">
                        <div><el-checkbox>记住密码</el-checkbox></div>
                        <div><el-link right type="warning" :underline="false">忘记密码？</el-link></div>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" long class="logBtn">{{ $t('login') }}</el-button>
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

    .title {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 20px;
    }


    .forget{
        display: flex;
        div{
            width:50%;
            flex:1;
        }
    }

    .logBtn {
        width: 100%;
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
</style> -->

<template>
    <div class="login-page">
      <h2 class="title">Boxboard</h2>
      <p class="welcome-message">Welcome back, you've been missed!</p>
      <div class="social-login">
        <el-button class="google-login" type="primary" icon="el-icon-google" @click="signInWithGoogle">
          Sign In with Google
        </el-button>
        <el-button class="apple-login" type="primary" icon="el-icon-apple" @click="signInWithApple">
          Sign In with Apple ID
        </el-button>
      </div>
      <div class="form-section">
        <el-input v-model="email" placeholder="Your Email" class="input-field"></el-input>
        <el-input v-model="password" type="password" placeholder="Password" class="input-field"></el-input>
        <el-checkbox v-model="rememberMe" class="remember-checkbox">Remember Me</el-checkbox>
        <el-link @click="forgotPassword" class="forgot-link">Forgot Password?</el-link>
        <el-button type="primary" @click="signUp" class="signup-button">Sign Up</el-button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        rememberMe: false
      };
    },
    methods: {
      signInWithGoogle() {
        // 实现使用 Google 登录的逻辑
      },
      signInWithApple() {
        // 实现使用 Apple ID 登录的逻辑
      },
      forgotPassword() {
        // 实现忘记密码的逻辑
      },
      signUp() {
        // 实现注册的逻辑
      }
    }
  };
  </script>
  
  <style scoped>
  .login-page {
    background-color: #f5f5f5;
    padding: 50px;
    text-align: center;
  }
  
  .title {
    font-size: 32px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .welcome-message {
    font-size: 18px;
    color: #666;
    margin-bottom: 30px;
  }
  
  .social-login {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
  }
  
  .google-login,
  .apple-login {
    padding: 10px 20px;
    font-size: 16px;
  }
  
  .form-section {
    background-color: #fff;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .input-field {
    width: 300px;
  }
  
  .remember-checkbox {
    margin-top: 15px;
  }
  
  .forgot-link {
    display: block;
    margin-top: 10px;
    font-size: 14px;
    color: #007bff;
    cursor: pointer;
  }
  
  .signup-button {
    margin-top: 20px;
  }
  </style>
<template>
    <div class="login-container">
      <div class="login-box">
        <div class="logo">
          Boxboard
        </div>
        <h2>Sign In</h2>
        <p>Welcome back, you've been missed!</p>
  
        <el-form ref="loginForm" :model="loginForm" label-position="top">
          <el-form-item label="Your Email">
            <el-input v-model="loginForm.email" placeholder="Enter your email"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input
              v-model="loginForm.password"
              type="password"
              placeholder="Enter your password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="loginForm.rememberMe">Remember Me</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" long @click="handleLogin">Sign In</el-button>
          </el-form-item>
          <div class="social-login">
            <span>Sign In with Google</span>
            <span>Sign In with Apple ID</span>
          </div>
          <div class="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <div class="sign-up">
            <a href="#">Don't have an account yet? Sign Up</a>
          </div>
        </el-form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const loginForm = ref({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const handleLogin = () => {
    console.log('Login with:', loginForm.value);
    // Perform login logic here
  };
  </script>
  
  <style scoped>
  .login-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
  }
  
  .login-box {
    width: 400px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  .logo {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
  }
  
  .el-form {
    margin-bottom: 20px;
  }
  
  .social-login {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  
  .social-login span {
    font-size: 14px;
    color: #409eff;
    cursor: pointer;
  }
  
  .forgot-password,
  .sign-up {
    font-size: 14px;
    color: #409eff;
    cursor: pointer;
    text-align: center;
    margin-top: 10px;
  }
  
  .forgot-password a,
  .sign-up a {
    color: #409eff;
    text-decoration: none;
  }
  
  .forgot-password a:hover,
  .sign-up a:hover {
    text-decoration: underline;
  }
  </style>
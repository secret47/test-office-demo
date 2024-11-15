<template>
    <div class="login-container">
      <div class="login-content">
        <div class="logo">Boxboard</div>
        <h2>Sign In</h2>
        <p>Welcome back, you've been missed!</p>
  
        <el-form :model="loginForm" class="login-form" label-position="top">
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
            <el-button type="text" class="forgot-password" @click="$router.push('/forgot-password')">Forgot Password?</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login-button" @click="handleLogin">Sign In</el-button>
          </el-form-item>
          <div class="social-login">
            <el-button class="social-button" type="text" icon="el-icon-google" @click="handleSocialLogin('google')">Sign In with Google</el-button>
            <el-button class="social-button" type="text" icon="el-icon-apple" @click="handleSocialLogin('apple')">Sign In with Apple ID</el-button>
          </div>
          <div class="sign-up">
            <span>Don't have an account yet?</span>
            <el-button type="text" class="signup-button" @click="$router.push('/signup')">Sign Up</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const loginForm = ref({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const router = useRouter();
  
  const handleLogin = () => {
    console.log('Login with:', loginForm.value);
    // Perform login logic here
  };
  
  const handleSocialLogin = (provider) => {
    console.log('Social login with:', provider);
    // Perform social login logic here
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
  }
  
  .login-content {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 480px;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }
  
  p {
    font-size: 16px;
    color: #666666;
    margin-bottom: 32px;
  }
  
  .login-form {
    margin-bottom: 24px;
  }
  
  .el-button {
    font-size: 14px;
  }
  
  .forgot-password {
    float: right;
    color: #409eff;
  }
  
  .social-login {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
  
  .social-button {
    margin-right: 12px;
    color: #ffffff;
    background-color: #409eff;
    border-color: #409eff;
  }
  
  .social-button:last-child {
    margin-right: 0;
  }
  
  .signup-button {
    color: #409eff;
  }
  
  .sign-up {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
  </style>
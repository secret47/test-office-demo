<template>
    <div>
      <h2>Boxboard</h2>
      <p>Welcome back, you've been missed!</p>
      <el-button type="primary" icon="el-icon-google" @click="signInWithGoogle">Sign In with Google</el-button>
      <el-button type="primary" icon="el-icon-apple" @click="signInWithApple">Sign In with Apple ID</el-button>
      <div style="border-top: 1px solid #ccc; padding-top: 10px;">
        <el-input v-model="email" placeholder="Your Email"></el-input>
        <el-input v-model="password" type="password" placeholder="Password"></el-input>
        <el-checkbox v-model="rememberMe">Remember Me</el-checkbox>
        <el-link @click="forgotPassword">Forgot Password?</el-link>
        <el-button type="primary" @click="signUp">Sign Up</el-button>
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
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }
  
  h2 {
    font-size: 24px;
    color: #333;
  }
  
  p {
    font-size: 16px;
    color: #666;
  }
  
  .el-button {
    margin-right: 10px;
    margin-bottom: 15px;
  }
  
  .el-input {
    width: 250px;
    margin-bottom: 10px;
  }
  
  .el-checkbox {
    margin-bottom: 10px;
  }
  
  .el-link {
    font-size: 14px;
    color: #007bff;
    cursor: pointer;
  }
  
  .el-button[type="primary"] {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .el-button[type="primary"]:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }
  </style>
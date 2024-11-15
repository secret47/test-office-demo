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
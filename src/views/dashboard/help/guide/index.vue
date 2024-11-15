<template>
    <div class="guide-container">
        <el-card class="guide-card">
            <template #header>
                <div class="card-header">
                    <span>系统使用指南</span>
                </div>
            </template>
            
            <el-collapse>
                <el-collapse-item title="1. 系统概述" name="1">
                    <div class="guide-content">
                        <p>本系统是一个综合性的后台管理系统,主要包含以下功能模块:</p>
                        <ul>
                            <li>订单管理:订单列表查看、物流管理等</li>
                            <li>用户管理:用户信息维护、权限管理等</li>
                            <li>系统管理:系统设置、参数配置等</li>
                        </ul>
                    </div>
                </el-collapse-item>

                <el-collapse-item title="2. 快速入门" name="2">
                    <div class="guide-content">
                        <h4>2.1 登录系统</h4>
                        <p>使用管理员账号和密码登录系统。首次登录请及时修改默认密码。</p>
                        
                        <h4>2.2 界面说明</h4>
                        <p>系统采用左侧菜单布局,顶部显示面包屑导航和用户信息。</p>
                    </div>
                </el-collapse-item>

                <el-collapse-item title="3. 功能介绍" name="3">
                    <div class="guide-content">
                        <h4>3.1 订单管理</h4>
                        <p>可以查看所有订单信息,支持订单状态更新、物流信息维护等操作。</p>

                        <h4>3.2 用户管理</h4>
                        <p>提供用户信息的增删改查功能,可以管理用户权限和状态。</p>

                        <h4>3.3 系统设置</h4>
                        <p>包含账户信息修改、密码更新、系统参数配置等功能。</p>
                    </div>
                </el-collapse-item>

                <el-collapse-item title="4. 常见问题" name="4">
                    <div class="guide-content">
                        <h4>4.1 密码忘记怎么办?</h4>
                        <p>请联系系统管理员重置密码。</p>

                        <h4>4.2 系统使用建议</h4>
                        <p>建议使用Chrome、Firefox等主流浏览器访问系统,以获得最佳使用体验。</p>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </el-card>
    </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
.guide-container {
    padding: 20px;
    
    .guide-card {
        .card-header {
            font-weight: bold;
        }
        
        .guide-content {
            line-height: 1.8;
            color: #606266;
            
            h4 {
                margin: 16px 0 8px;
                color: #303133;
            }
            
            ul {
                padding-left: 20px;
                margin: 8px 0;
            }
        }
    }
}
</style>

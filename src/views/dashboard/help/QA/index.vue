<template>
    <div class="qa-container">
        <el-card class="qa-card">
            <template #header>
                <div class="card-header">
                    <span>常见问题解答</span>
                </div>
            </template>

            <el-collapse>
                <el-collapse-item title="1. 如何修改密码?" name="1">
                    <div class="qa-content">
                        <p>进入"系统管理->系统设置"页面,在密码修改区域输入原密码和新密码即可完成修改。</p>
                    </div>
                </el-collapse-item>

                <el-collapse-item title="2. 忘记密码怎么办?" name="2">
                    <div class="qa-content">
                        <p>请联系系统管理员重置密码。重置后请及时登录并修改为新的密码。</p>
                    </div>
                </el-collapse-item>

                <el-collapse-item title="3. 系统支持哪些浏览器?" name="3">
                    <div class="qa-content">
                        <p>推荐使用以下浏览器:</p>
                        <ul>
                            <li>Google Chrome (推荐)</li>
                            <li>Firefox</li>
                            <li>Microsoft Edge</li>
                        </ul>
                        <p>为了获得最佳使用体验,建议使用最新版本的浏览器。</p>
                    </div>
                </el-collapse-item>

                <el-collapse-item title="4. 如何导出数据?" name="4">
                    <div class="qa-content">
                        <p>在相应的数据列表页面,点击导出按钮即可将当前数据导出为Excel文件。</p>
                    </div>
                </el-collapse-item>

                <el-collapse-item title="5. 遇到技术问题怎么办?" name="5">
                    <div class="qa-content">
                        <p>如遇到技术问题,请按以下步骤处理:</p>
                        <ol>
                            <li>查看使用指南是否有相关说明</li>
                            <li>检查网络连接是否正常</li>
                            <li>尝试清除浏览器缓存后重试</li>
                            <li>联系技术支持人员</li>
                        </ol>
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
.qa-container {
    padding: 20px;
    
    .qa-card {
        .card-header {
            font-weight: bold;
        }
        
        .qa-content {
            line-height: 1.8;
            color: #606266;
            
            ul, ol {
                padding-left: 20px;
                margin: 8px 0;
            }
        }
    }
}
</style>

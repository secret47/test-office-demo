<template>
    <div class="library-container">
        <el-card class="library-card">
            <template #header>
                <div class="card-header">
                    <span>资源库</span>
                    <el-button type="primary" @click="handleUpload">上传资源</el-button>
                </div>
            </template>

            <el-tabs v-model="activeTab">
                <el-tab-pane label="图片" name="images">
                    <div class="resource-grid">
                        <el-empty v-if="imageList.length === 0" description="暂无图片资源" />
                        <div v-else class="image-item" v-for="(item, index) in imageList" :key="index">
                            <el-image 
                                :src="item.url" 
                                fit="cover"
                                :preview-src-list="[item.url]">
                            </el-image>
                            <div class="image-info">
                                <span class="filename">{{ item.name }}</span>
                                <el-button type="danger" size="small" @click="handleDelete(item.id)">删除</el-button>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <el-tab-pane label="视频" name="videos">
                    <div class="resource-grid">
                        <el-empty v-if="videoList.length === 0" description="暂无视频资源" />
                        <div v-else class="video-item" v-for="(item, index) in videoList" :key="index">
                            <video :src="item.url" controls></video>
                            <div class="video-info">
                                <span class="filename">{{ item.name }}</span>
                                <el-button type="danger" size="small" @click="handleDelete(item.id)">删除</el-button>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-card>

        <el-dialog v-model="uploadDialogVisible" title="上传资源" width="500px">
            <el-upload
                class="upload-demo"
                drag
                action="/api/upload"
                :on-success="handleUploadSuccess"
                :on-error="handleUploadError"
                multiple>
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                    将文件拖到此处，或<em>点击上传</em>
                </div>
                <template #tip>
                    <div class="el-upload__tip">
                        支持jpg/png/mp4等格式文件
                    </div>
                </template>
            </el-upload>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const activeTab = ref('images')
const uploadDialogVisible = ref(false)
const imageList = ref([])
const videoList = ref([])

const handleUpload = () => {
    uploadDialogVisible.value = true
}

const handleUploadSuccess = (response) => {
    ElMessage.success('上传成功')
    uploadDialogVisible.value = false
    // 刷新资源列表
}

const handleUploadError = () => {
    ElMessage.error('上传失败')
}

const handleDelete = (id) => {
    ElMessage.success('删除成功')
    // 从列表中移除资源
}
</script>

<style lang="scss" scoped>
.library-container {
    padding: 20px;
    
    .library-card {
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .resource-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
            padding: 20px 0;
            
            .image-item, .video-item {
                border: 1px solid #eee;
                border-radius: 4px;
                overflow: hidden;
                
                .el-image {
                    width: 100%;
                    height: 150px;
                }
                
                video {
                    width: 100%;
                    height: 150px;
                    object-fit: cover;
                }
                
                .image-info, .video-info {
                    padding: 8px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    
                    .filename {
                        font-size: 14px;
                        color: #606266;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
}
</style>

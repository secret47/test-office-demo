<template>
    <div class="header">
        <div class="collapseIcon">
            <el-icon style="cursor: pointer;" @click="toggleMenu">
                <Expand />
            </el-icon>
        </div>
        <div class="user">
            <el-icon>
                <FullScreen />
            </el-icon>
            &nbsp;
            <el-icon>
                <Setting />
            </el-icon>
            &nbsp;
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <i class="el-icon-user"></i>
                    {{ username }}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="userCenter">个人中心</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { ElMessage } from 'element-plus';
import menu from "./menu.vue"


const username = ref('用户名'); // 这里应该从后端获取真实的用户名


const isMenuExpanded = ref(true);

const menuRef = defineProps({
    menuRef: {
        type: Object,
        required: true
    }
}).menuRef;
const toggleMenu = () => {
    // isMenuExpanded.value = !isMenuExpanded.value;
    console.log(menuRef, "? ")
    if (menuRef.value) {
        menuRef.value.toggleCollapse();
    }
};

const handleCommand = (command) => {
    if (command === 'logout') {
        // 执行退出操作
        ElMessage.success('退出成功');
        // 这里可以添加跳转到登录页面的逻辑
    } else if (command === 'userCenter') {
        // 跳转到个人中心页面
        ElMessage.info('跳转到个人中心');
        // 这里可以添加跳转逻辑
    }
};
</script>

<style lang="scss" scoped>
.header {
    display: flex;
}

.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}


.collapseIcon {
    width: 100px;
    height: 100px;
    display: flex;
    // justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
}

.user {
    margin-left: auto;
    display: flex;
    /* 水平居中 */
    align-items: center;
}
</style>

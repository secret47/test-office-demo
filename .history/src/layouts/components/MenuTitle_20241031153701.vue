<template>
    <span class="menu-title">
        <el-icon class="menu-icon"><icon-menu /></el-icon>
        <span v-if="!isCollapsed">{{ text }}</span>
    </span>
</template>

<script setup>
import { Menu as IconMenu } from '@element-plus/icons-vue';
import { useAppStore } from '@/store/module/app';
import { computed } from "vue"


const { isMenuCollapsed } = useAppStore();
const props = defineProps({
    text: {
        type: String,
        required: true
    }
});

const isCollapsed = computed(() => isMenuCollapsed.value);
</script>

<style scoped>
.menu-title {
    display: flex;
    align-items: center;
}

.menu-icon {
    min-width: 20px;
    /* 根据图标实际大小调整，确保收缩时图标能完整显示 */
    margin-right: 5px;
    /* 图标与文字之间的间距，可根据需求调整 */
}

/* 侧边栏收缩时的样式调整 */
.menu-title.collapsed {
    justify-content: center;
    /* 让图标在收缩状态下水平居中 */
}
</style>
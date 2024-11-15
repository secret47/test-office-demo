<template>
    <span class="menu-title">
        <el-icon class="menu-icon"><icon-menu /></el-icon>
        --
        <span v-if="!isCollapsed">{{ text }}</span>
    </span>
</template>

<script setup>
import { computed } from 'vue';
import { Menu as IconMenu } from '@element-plus/icons-vue';
import { useAppStore } from '@/store/module/app';

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
    margin-right: 5px;
}

.menu-title.collapsed {
    justify-content: center;
}
</style>
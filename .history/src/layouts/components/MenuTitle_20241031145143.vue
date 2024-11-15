<template>
    <span>
        <el-icon><icon-menu /></el-icon>
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
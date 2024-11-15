<template>
    <div ref="chartRef" :style="{ width: width + 'px', height: height + 'px' }"></div>
</template>

<script setup>
import { onMounted, ref, watch, defineProps } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
    optisons: {
        type: Object,
        default: () => ({})
    },
    width: {
        type: Number,
        default: 400
    },
    height: {
        type: Number,
        default: 400
    }
});



const chartRef = ref(null);
const chartInstance = ref(null);

onMounted(() => {
    // 初始化图表
    chartInstance.value = echarts.init(chartRef.value);
    chartInstance.value.setOption(props.optisons);
});


// 监听props.options的变化，更新图表
watch(() => props.options, (newOptions) => {
    if (chartInstance.value !== null) {
        chartInstance.value.setOption(newOptions);
    }
});


// 监听宽高变化，更新图表
watch([width, height], () => {
    if (chartInstance.value !== null) {
        chartInstance.value.resize();
    }
}, { immediate: true });

// 在组件卸载时，销毁图表实例
onBeforeUnmount(() => {
    if (chartInstance.value !== null) {
        chartInstance.value.dispose();
    }
});

</script>
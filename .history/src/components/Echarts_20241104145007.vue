<template>
    <div ref="chartRef" style="width: 100%; height: 400px;"></div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import * as echarts from 'echarts';
  
  const chartRef = ref(null);
  const chartInstance = ref(null);
  
  onMounted(() => {
    chartInstance.value = echarts.init(chartRef.value);
    // 设置图表的配置项和数据
    const options = {
      // ...ECharts 配置项
    };
    chartInstance.value.setOption(options);
  });
  
  // 在组件卸载时，销毁图表实例
  onBeforeUnmount(() => {
    if (chartInstance.value !== null) {
      chartInstance.value.dispose();
    }
  });
  </script>
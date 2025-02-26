<script setup lang="ts">
import { ref } from 'vue'

const throttleCount1 = ref(0)
const throttleCount2 = ref(0)
const throttleCount3 = ref(0)
const throttleCount4 = ref(0)

const handleThrottleClick1 = () => {
  throttleCount1.value++
}

const handleThrottleClick2 = () => {
  throttleCount2.value++
}

const handleThrottleClick3 = () => {
  throttleCount3.value++
}

const handleThrottleClick4 = () => {
  throttleCount4.value++
}
</script>

<template>
  <section class="section">
    <h2>v-throttle 指令</h2>

    <!-- 基础用法 -->
    <div class="demo-box">
      <h3>基础用法</h3>
      <p class="description">默认配置：300ms 延迟，开始和结束时都执行</p>
      <p>点击次数：{{ throttleCount1 }}</p>
      <button v-throttle="handleThrottleClick1">
        节流按钮（默认300ms）
      </button>
    </div>

    <!-- 仅开始执行 -->
    <div class="demo-box">
      <h3>仅开始执行</h3>
      <p class="description">配置：1000ms 延迟，仅在开始时执行</p>
      <p>点击次数：{{ throttleCount2 }}</p>
      <button
        v-throttle="{
          handler: handleThrottleClick2,
          options: { wait: 1000, leading: true, trailing: false },
        }"
      >
        节流按钮（1000ms，仅开始执行）
      </button>
    </div>

    <!-- 仅结束执行 -->
    <div class="demo-box">
      <h3>仅结束执行</h3>
      <p class="description">配置：500ms 延迟，仅在结束时执行</p>
      <p>点击次数：{{ throttleCount3 }}</p>
      <button
        v-throttle="{
          handler: handleThrottleClick3,
          options: { wait: 500, leading: false, trailing: true },
        }"
      >
        节流按钮（500ms，仅结束执行）
      </button>
    </div>

    <!-- 快速响应 -->
    <div class="demo-box">
      <h3>快速响应</h3>
      <p class="description">配置：100ms 延迟，开始和结束时都执行，适用于需要较快响应的场景</p>
      <p>点击次数：{{ throttleCount4 }}</p>
      <button
        v-throttle="{
          handler: handleThrottleClick4,
          options: { wait: 100, leading: true, trailing: true },
        }"
      >
        节流按钮（100ms，快速响应）
      </button>
    </div>
  </section>
</template>

<style scoped>
.description {
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
}
</style>

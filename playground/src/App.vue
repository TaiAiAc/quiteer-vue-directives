<script setup lang="ts">
import { reactive, ref } from 'vue'

// 控制加载状态
const loading = ref(false)
const loadingWithText = reactive({ text: '加载中...', show: false })
const loadingWithBackground = reactive({ background: 'rgba(0, 0, 0, 0.7)', show: false })

// 模拟异步操作
const showBasicLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

const showTextLoading = () => {
  loadingWithText.show = true
  setTimeout(() => {
    loadingWithText.show = false
  }, 2000)
}

const showBackgroundLoading = () => {
  loadingWithBackground.show = true
  setTimeout(() => {
    loadingWithBackground.show = false
  }, 2000)
}

// 多行文本示例
const longText = ref('这是一段很长的文本，用来演示多行文本截断的效果。这是一段很长的文本，用来演示多行文本截断的效果。这是一段很长的文本，用来演示多行文本截断的效果。')

// 交叉观察示例
const onShow = () => {
  console.log('元素进入视口')
}

const onHide = () => {
  console.log('元素离开视口')
}
</script>

<template>
  <div class="container">
    <h1>Vue 指令示例</h1>

    <section class="section">
      <h2>v-loading 指令</h2>

      <!-- 基础用法 -->
      <div v-loading="loading" class="demo-box">
        <h3>基础用法</h3>
        <p>默认的加载效果</p>
        <button @click="showBasicLoading">
          显示加载
        </button>
      </div>

      <!-- 自定义文本 -->
      <div v-loading="loadingWithText" class="demo-box">
        <h3>自定义文本</h3>
        <p>显示自定义的加载文本</p>
        <button @click="showTextLoading">
          显示加载
        </button>
      </div>

      <!-- 自定义背景色 -->
      <div v-loading="loadingWithBackground" class="demo-box">
        <h3>自定义背景色</h3>
        <p>使用深色背景的加载效果</p>
        <button @click="showBackgroundLoading">
          显示加载
        </button>
      </div>
    </section>

    <section class="section">
      <h2>v-ellipsis 指令</h2>

      <!-- 单行截断 -->
      <div class="demo-box">
        <h3>单行截断</h3>
        <p v-ellipsis="1">
          {{ longText }}
        </p>
      </div>

      <!-- 多行截断 -->
      <div class="demo-box">
        <h3>多行截断（3行）</h3>
        <p v-ellipsis="3">
          {{ longText }}
          {{ longText }}
          {{ longText }}
          {{ longText }}
        </p>
      </div>
    </section>

    <section class="section">
      <h2>v-intersecting 指令</h2>

      <!-- 基础用法 -->
      <div class="demo-box scroll-container">
        <div v-intersecting="{ show: onShow, hide: onHide }" class="scroll-item">
          滚动容器中的元素
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.section {
  margin-bottom: 40px;
}

.demo-box {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  min-height: 100px;
}

button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #45a049;
}

.scroll-container {
  height: 200px;
  overflow-y: auto;
}

.scroll-item {
  margin-top: 180px;
  padding: 20px;
  background-color: #f0f0f0;
  text-align: center;
}
</style>

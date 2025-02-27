<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
const loadingWithText = ref({
  show: false,
  text: '加载中...'
})
const loadingWithBackground = ref({
  show: false,
  background: 'rgba(0, 0, 0, 0.7)'
})

const showBasicLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

const showTextLoading = () => {
  loadingWithText.value.show = true
  setTimeout(() => {
    loadingWithText.value.show = false
  }, 2000)
}

const showBackgroundLoading = () => {
  loadingWithBackground.value.show = true
  setTimeout(() => {
    loadingWithBackground.value.show = false
  }, 2000)
}
</script>

<template>
  <section class="section">
    <h2>v-loading 指令</h2>

    <!-- 基础用法 -->
    <div v-loading="{ a: '' }" class="demo-box">
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
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchText1 = ref('')
const searchResult1 = ref('')
const searchText2 = ref('')
const searchResult2 = ref('')
const searchText3 = ref('')
const searchResult3 = ref('')
const searchText4 = ref('')
const searchResult4 = ref('')

const handleSearch1 = () => {
  searchResult1.value = `搜索：${searchText1.value}`
}

const handleSearch2 = () => {
  searchResult2.value = `搜索：${searchText2.value}`
}

const handleSearch3 = () => {
  searchResult3.value = `搜索：${searchText3.value}`
}

const handleSearch4 = () => {
  searchResult4.value = `搜索：${searchText4.value}`
}
</script>

<template>
  <section class="section">
    <h2>v-debounce 指令</h2>

    <!-- 基础用法 -->
    <div class="demo-box">
      <h3>基础用法</h3>
      <p class="description">
        默认配置：300ms 延迟，不立即执行
      </p>
      <div class="search-box">
        <input
          v-model="searchText1"
          v-debounce="handleSearch1"
          type="text"
          placeholder="输入搜索内容（默认300ms）"
        >
        <p>{{ searchResult1 }}</p>
      </div>
    </div>

    <!-- 立即执行 -->
    <div class="demo-box">
      <h3>立即执行模式</h3>
      <p class="description">
        配置：500ms 延迟，立即执行第一次输入
      </p>
      <div class="search-box">
        <input
          v-model="searchText2"
          v-debounce="{
            handler: handleSearch2,
            options: { wait: 500, immediate: true },
          }"
          type="text"
          placeholder="输入搜索内容（500ms，立即执行）"
        >
        <p>{{ searchResult2 }}</p>
      </div>
    </div>

    <!-- 短延迟 -->
    <div class="demo-box">
      <h3>短延迟响应</h3>
      <p class="description">
        配置：100ms 延迟，不立即执行，适用于快速响应场景
      </p>
      <div class="search-box">
        <input
          v-model="searchText3"
          v-debounce="{
            handler: handleSearch3,
            options: { wait: 100, immediate: false },
          }"
          type="text"
          placeholder="输入搜索内容（100ms）"
        >
        <p>{{ searchResult3 }}</p>
      </div>
    </div>

    <!-- 长延迟 -->
    <div class="demo-box">
      <h3>长延迟响应</h3>
      <p class="description">
        配置：1000ms 延迟，不立即执行，适用于需要减少服务器请求的场景
      </p>
      <div class="search-box">
        <input
          v-model="searchText4"
          v-debounce="{
            handler: handleSearch4,
            options: { wait: 1000, immediate: false },
          }"
          type="text"
          placeholder="输入搜索内容（1000ms）"
        >
        <p>{{ searchResult4 }}</p>
      </div>
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

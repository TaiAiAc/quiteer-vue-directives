<script setup lang="ts">
import { ref } from 'vue'

const isVisible = ref(false)
const customMessage = ref('')

const handleShow = () => {
  customMessage.value = '元素进入视口'
}

const handleHide = () => {
  customMessage.value = '元素离开视口'
}
</script>

<template>
  <section class="section">
    <h2>v-intersecting 指令</h2>

    <!-- 基础用法 -->
    <div class="demo-box">
      <h3>基础用法</h3>
      <p>{{ isVisible ? '元素可见' : '元素不可见' }}</p>
      <div
        v-intersecting="{
          show: () => isVisible = true,
          hide: () => isVisible = false,
        }"
        class="intersection-box"
      >
        <p>向下滚动页面，观察元素的可见状态变化</p>
      </div>
    </div>

    <!-- 自定义回调 -->
    <div class="demo-box">
      <h3>自定义回调函数</h3>
      <p>{{ customMessage || '滚动页面观察变化' }}</p>
      <div
        v-intersecting:show="handleShow"
        v-intersecting:hide="handleHide"
        class="intersection-box"
      >
        <p>使用 show/hide 参数分别处理进入和离开视口的情况</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intersection-box {
  margin-top: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  text-align: center;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

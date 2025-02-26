<script setup lang="ts">
import LoadingDemo from './components/LoadingDemo.vue'
import ThrottleDemo from './components/ThrottleDemo.vue'
import DebounceDemo from './components/DebounceDemo.vue'
import EllipsisDemo from './components/EllipsisDemo.vue'
import IntersectingDemo from './components/IntersectingDemo.vue'
</script>

<template>
  <div class="container">
    <h1>Vue 指令示例</h1>
    <LoadingDemo />
    <ThrottleDemo />
    <DebounceDemo />
    <EllipsisDemo />
    <IntersectingDemo />
  </div>
</template>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.section {
  margin-bottom: 40px;
}

.demo-box {
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
}

.search-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 300px;
}

button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>

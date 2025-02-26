<script setup lang="ts">
const onLoad = () => {
  console.log('图片加载成功')
}

const onError = () => {
  console.log('图片加载失败')
}
</script>

<template>
  <div class="section">
    <h2>图片懒加载指令 (v-lazy)</h2>

    <div class="demo-box">
      <h3>基础用法</h3>
      <div class="image-container">
        <img
          v-lazy="{
            loading: 'https://raw.githubusercontent.com/quiteer/quiteer-vue-directives/main/playground/public/loading.png',
            error: 'https://raw.githubusercontent.com/quiteer/quiteer-vue-directives/main/playground/public/error.png',
          }"
          src="https://picsum.photos/400/300"
          alt="Random Image 1"
        >
      </div>
    </div>

    <div class="demo-box">
      <h3>带回调函数的用法</h3>
      <div class="image-container">
        <img
          v-lazy="{
            loading: 'https://raw.githubusercontent.com/quiteer/quiteer-vue-directives/main/playground/public/loading.png',
            error: 'https://raw.githubusercontent.com/quiteer/quiteer-vue-directives/main/playground/public/error.png',
            onLoad,
            onError,
          }"
          src="https://picsum.photos/400/300"
          alt="Random Image 2"
        >
      </div>
    </div>

    <div class="demo-box">
      <h3>多图片懒加载</h3>
      <div class="image-grid">
        <img
          v-for="i in 6"
          :key="i"
          v-lazy="{
            loading: 'https://raw.githubusercontent.com/quiteer/quiteer-vue-directives/main/playground/public/loading.png',
            error: 'https://raw.githubusercontent.com/quiteer/quiteer-vue-directives/main/playground/public/error.png',
          }"
          :src="`https://picsum.photos/200/150?random=${i}`"
          :alt="`Random Image ${i + 2}`"
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  margin: 20px 0;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.image-grid img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>

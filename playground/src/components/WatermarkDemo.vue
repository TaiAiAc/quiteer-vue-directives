<template>
  <div class="section">
    <h2>v-watermark 指令示例</h2>

    <div class="demo-box">
      <h3>基础用法</h3>
      <div v-watermark="'示例水印'" class="watermark-container">
        <p>这是一个基础的水印示例，显示默认样式的水印。</p>
        <p>水印会自动重复平铺在整个容器中。</p>
      </div>
    </div>

    <div class="demo-box">
      <h3>自定义文本水印</h3>
      <div
        v-watermark="{
          text: 'CONFIDENTIAL',
          fontSize: '16px',
          color: 'rgba(255, 0, 0, 0.1)',
          rotate: -45,
          gap: 100,
          zIndex: 100,
        }"
        class="watermark-container"
      >
        <p>这是一个自定义样式的水印示例。</p>
        <p>可以自定义水印的文本、字体大小、颜色、旋转角度等属性。</p>
      </div>
    </div>

    <div class="demo-box">
      <h3>图片水印</h3>
      <div
        v-watermark="{
          // 使用简单的 SVG 图标作为水印
          image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6Ii8+PC9zdmc+',
          // 设置图片水印的尺寸
          imageWidth: 24,
          imageHeight: 24,
          // 设置图片水印的透明度
          imageOpacity: 0.1,
          // 设置水印的旋转角度
          rotate: -30,
          // 设置水印之间的间距
          gap: 80,
        }"
        class="watermark-container"
      >
        <p>这是一个图片水印示例。</p>
        <p>可以使用图片URL或Base64字符串作为水印，并自定义图片大小、透明度等属性。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.watermark-container {
  padding: 120px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 200px;
}

.watermark-container p {
  margin: 10px 0;
  line-height: 1.5;
}

.demo-box {
  margin-bottom: 30px;
}

h3 {
  margin-bottom: 16px;
  color: #333;
}
</style>

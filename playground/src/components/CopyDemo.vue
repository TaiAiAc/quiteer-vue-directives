<template>
  <div class="section">
    <h2>v-copy 指令示例</h2>

    <div class="demo-box">
      <h3>基础用法 - 复制元素内容</h3>
      <div v-copy class="copy-text">
        点击复制这段文本内容
      </div>
    </div>

    <div class="demo-box">
      <h3>复制指定文本</h3>
      <button v-copy="'这是要复制的指定文本内容'">
        点击复制
      </button>
    </div>

    <div class="demo-box">
      <h3>自定义配置</h3>
      <button
        v-copy="{
          text: '使用自定义配置的复制内容',
          successText: '已成功复制到剪贴板',
          errorText: '复制失败，请重试',
          onSuccess: () => console.log('复制成功'),
          onError: (error:any) => console.error('复制失败', error),
        }"
      >
        复制（自定义配置）
      </button>
    </div>
  </div>
</template>

<style scoped>
.copy-text {
  padding: 12px;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin: 10px 0;
  display: inline-block;
}

.copy-text:hover {
  background-color: #e8e8e8;
}

h3 {
  margin-bottom: 16px;
  color: #333;
}
</style>

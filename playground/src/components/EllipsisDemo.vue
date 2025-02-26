<script setup lang="ts">
const longText = '这是一段很长的文本，用于演示文本截断效果。当文本内容超过指定的行数时，多余的部分将被省略号替代。这样可以保持界面的整洁性，同时也能让用户知道还有更多的内容。'
</script>

<template>
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
      </p>
    </div>
  </section>
</template>

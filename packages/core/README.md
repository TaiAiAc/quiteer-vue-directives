# @quiteer/directives

一个基于 Vue 3 的自定义指令集合，提供了一系列实用的指令来增强您的 Vue 应用程序。

## 特性

- 🚀 基于 Vue 3
- 📦 支持按需引入
- 🎨 使用 TypeScript 编写，提供完整的类型定义
- 🔧 简单易用，即插即用

## 安装

```bash
npm install @quiteer/directives
# 或者
pnpm add @quiteer/directives
# 或者
yarn add @quiteer/directives
```

## 使用

### 全局注册

```typescript
import { createApp } from 'vue'
import QuiteerDirectives from '@quiteer/directives'
import App from './App.vue'

const app = createApp(App)
app.use(QuiteerDirectives)
app.mount('#app')
```

## 指令列表

### v-loading

为元素添加加载状态指示器。

#### 基础用法

```vue
<template>
  <div v-loading="isLoading">
    内容
  </div>
</template>
```

#### 自定义配置

```vue
<script setup lang="ts">
const loadingConfig = {
  show: true,
  text: '加载中...',
  background: 'rgba(0, 0, 0, 0.7)',
  spinner: '<div class="custom-spinner"></div>'
}
</script>

<template>
  <div v-loading="loadingConfig">
    内容
  </div>
</template>
```

#### 配置项

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| show | 是否显示加载状态 | boolean | false |
| text | 加载提示文本 | string | - |
| background | 遮罩层背景色 | string | 'rgba(255, 255, 255, 0.9)' |
| spinner | 自定义加载图标的 HTML | string | - |

### v-intersecting

监听元素是否进入视口的指令。

#### 基础用法

```vue
<script setup lang="ts">
const handleShow = (isIntersecting: boolean) => {
  console.log('元素进入视口')
}

const handleHide = (isIntersecting: boolean) => {
  console.log('元素离开视口')
}
</script>

<template>
  <!-- 元素进入视口时触发 -->
  <div v-intersecting:show="handleShow">
    内容
  </div>

  <!-- 元素离开视口时触发 -->
  <div v-intersecting:hide="handleHide">
    内容
  </div>

  <!-- 同时监听进入和离开 -->
  <div v-intersecting="{ show: handleShow, hide: handleHide }">
    内容
  </div>
</template>
```

## License

[ISC](LICENSE)

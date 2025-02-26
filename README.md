# quiteer-vue-directives

一个实用的 Vue 3 自定义指令集合，提供了一系列常用的功能指令。

## 安装

```bash
# npm
npm install @quiteer/directives

# yarn
yarn add @quiteer/directives

# pnpm
pnpm add @quiteer/directives
```

## 使用

在你的 Vue 应用中注册指令：

```ts
import { createApp } from 'vue'
import QuiteerDirectives from '@quiteer/directives'

const app = createApp(App)
app.use(QuiteerDirectives)
```

## 指令列表

### v-loading

为元素添加加载状态。

```vue
<template>
  <div v-loading="isLoading">
    内容
  </div>
</template>
```

配置选项：
- `value`: Boolean 类型，控制加载状态的显示/隐藏
- `text`: 加载提示文本，默认为 "加载中..."
- `background`: 加载遮罩层背景色，默认为 "rgba(255, 255, 255, 0.8)"
- `spinner`: 自定义加载图标的类名

### v-copy

点击元素复制文本内容。

```vue
<template>
  <!-- 基础用法 - 复制元素内容 -->
  <div v-copy>
    点击复制这段文本
  </div>

  <!-- 复制指定文本 -->
  <button v-copy="'要复制的文本内容'">
    点击复制
  </button>

  <!-- 自定义配置 -->
  <button
    v-copy="{
      text: '使用自定义配置的复制内容',
      successText: '已成功复制到剪贴板',
      errorText: '复制失败，请重试',
      onSuccess: () => console.log('复制成功'),
      onError: (error) => console.error('复制失败', error),
    }"
  >
    复制（自定义配置）
  </button>
</template>
```

配置选项：
- `text`: 要复制的文本内容
- `successText`: 复制成功时的提示文本
- `errorText`: 复制失败时的提示文本
- `onSuccess`: 复制成功的回调函数
- `onError`: 复制失败的回调函数

### v-throttle

为事件添加节流功能，在指定时间内只执行一次事件处理函数。

```vue
<template>
  <button v-throttle="{ fn: handleClick, wait: 1000 }">
    节流按钮
  </button>
</template>
```

配置选项：
- `fn`: 要执行的函数
- `wait`: 节流等待时间，单位为毫秒，默认为 300ms
- `leading`: 是否在延迟开始前执行，默认为 true
- `trailing`: 是否在延迟结束后执行，默认为 true

### v-debounce

为事件添加防抖功能，在连续触发事件时，只在最后一次触发后执行事件处理函数。

```vue
<template>
  <input v-debounce="{ fn: handleInput, wait: 500 }">
</template>
```

配置选项：
- `fn`: 要执行的函数
- `wait`: 防抖等待时间，单位为毫秒，默认为 300ms
- `immediate`: 是否立即执行，默认为 false

### v-watermark

为元素添加水印效果。

```vue
<template>
  <!-- 基础用法 -->
  <div v-watermark="'示例水印'">
    内容
  </div>

  <!-- 自定义文本水印 -->
  <div
    v-watermark="{
      text: 'CONFIDENTIAL',
      fontSize: '16px',
      color: 'rgba(255, 0, 0, 0.1)',
      rotate: -45,
      gap: 100,
      zIndex: 100,
    }"
  >
    内容
  </div>

  <!-- 图片水印 -->
  <div
    v-watermark="{
      image: 'watermark.png',
      imageWidth: 24,
      imageHeight: 24,
      imageOpacity: 0.1,
      rotate: -30,
      gap: 80,
    }"
  >
    内容
  </div>
</template>
```

配置选项：
- `text`: 水印文本内容
- `image`: 水印图片的 URL 或 Base64 字符串
- `imageWidth`: 图片水印的宽度，默认为 30px
- `imageHeight`: 图片水印的高度，默认为 30px
- `imageOpacity`: 图片水印的透明度，默认为 0.1
- `fontSize`: 字体大小，默认为 '14px'
- `color`: 字体颜色，默认为 'rgba(0, 0, 0, 0.1)'
- `rotate`: 旋转角度，默认为 -30 度
- `gap`: 水印之间的间距，默认为 100px
- `zIndex`: 水印层级，默认为 1000

### v-intersecting

监听元素是否进入视口，可用于实现懒加载、无限滚动等功能。

```vue
<template>
  <div
    v-intersecting="{
      handler: handleIntersect,
      options: {
        threshold: 0.5,
        root: null,
        rootMargin: '0px',
      },
    }"
  >
    监听元素
  </div>
</template>
```

配置选项：
- `handler`: 元素进入/离开视口时的回调函数
- `options`: IntersectionObserver 的配置选项
  - `threshold`: 触发回调的可见比例阈值，默认为 0
  - `root`: 指定根元素，默认为浏览器视口
  - `rootMargin`: 根元素的外边距，默认为 '0px'

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build
```

## 在线示例

访问我们的 [在线示例](https://quiteer-vue-directives.vercel.app) 查看所有指令的实际效果和用法示例。

## License

[MIT](./LICENSE)

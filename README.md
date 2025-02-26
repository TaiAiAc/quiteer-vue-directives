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

### v-copy

点击元素复制文本内容。

```vue
<template>
  <button v-copy="textToCopy">
    点击复制
  </button>
</template>
```

### v-throttle

为事件添加节流功能。

```vue
<template>
  <button v-throttle="{ fn: handleClick, wait: 1000 }">
    节流按钮
  </button>
</template>
```

### v-debounce

为事件添加防抖功能。

```vue
<template>
  <input v-debounce="{ fn: handleInput, wait: 500 }">
</template>
```

### v-ellipsis

文本超出显示省略号。

```vue
<template>
  <div v-ellipsis="{ line: 2 }">
    长文本内容
  </div>
</template>
```

### v-intersecting

监听元素是否进入视口。

```vue
<template>
  <div v-intersecting="handleIntersect">
    监听元素
  </div>
</template>
```

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build
```

## 文档

详细的使用文档和 API 说明请查看 [@quiteer/directives 文档](./packages/core/README.md)。

## License

[MIT](./LICENSE)

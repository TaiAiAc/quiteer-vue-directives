# quiteer-vue-directives

一个基于 Vue 3 的自定义指令集合，提供了一系列实用的指令来增强您的 Vue 应用程序。

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

```ts
import { createApp } from 'vue'
import { directives } from '@quiteer/directives'

const app = createApp(App)
app.use(directives)
```

## 指令列表

### v-loading
加载状态指示器，为元素添加加载中状态的遮罩层。

```vue
<!-- 基础用法 -->
<div v-loading="true">
内容
</div>

<!-- 自定义配置 -->
<div v-loading="{
  show: true,
  text: '加载中...',
  background: 'rgba(0, 0, 0, 0.7)',
  spinner: '<div class="custom-spinner"
></div>'
}">内容</div>
```

### v-intersecting
元素可见性监听，当元素进入或离开视口时触发回调。

```vue
<!-- 监听元素显示 -->
<div v-intersecting:show="handleShow">
内容
</div>

<!-- 监听元素隐藏 -->
<div v-intersecting:hide="handleHide">
内容
</div>

<!-- 同时监听显示和隐藏 -->
<div v-intersecting="{
  show: handleShow,
  hide: handleHide
}"
>
内容
</div>
```

### v-debounce
防抖指令，用于限制事件的触发频率，避免频繁触发。

```vue
<!-- 基础用法 -->
<button v-debounce="handleClick">
点击
</button>

<!-- 自定义配置 -->
<button v-debounce="{
  handler: handleClick,
  options: {
    wait: 500,
    immediate: true
  }
}"
>
点击
</button>
```

### v-throttle
节流指令，用于限制事件在一定时间内只能触发一次。

```vue
<!-- 基础用法 -->
<button v-throttle="handleClick">
点击
</button>

<!-- 自定义配置 -->
<button v-throttle="{
  handler: handleClick,
  options: {
    wait: 500,
    leading: true,
    trailing: true
  }
}"
>
点击
</button>
```

### v-ellipsis
文本省略指令，用于多行文本的省略显示。

```vue
<!-- 单行省略 -->
<div v-ellipsis="1">
长文本内容
</div>

<!-- 多行省略 -->
<div v-ellipsis="3">
长文本内容
</div>
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

[ISC](LICENSE)

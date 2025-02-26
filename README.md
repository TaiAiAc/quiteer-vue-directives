# quiteer-vue-directives

一个基于 Vue 3 的自定义指令集合，提供了一系列实用的指令来增强您的 Vue 应用程序。

## 项目结构

```
├── packages
│   └── core                # 核心指令库
│       ├── directive      # 指令实现
│       └── index.ts       # 入口文件
├── playground             # 示例项目
│   └── src
│       ├── App.vue       # 示例应用
│       └── main.ts       # 入口文件
└── pnpm-workspace.yaml    # 工作区配置
```

## 指令列表

- [v-loading](./packages/core/README.md#v-loading) - 加载状态指示器
- [v-intersecting](./packages/core/README.md#v-intersecting) - 元素可见性监听

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
# vue-demo

bep-ui是一个基于vue3 + element plus 二次开发，以schema驱动快速生成管理台表单、表格页面的UI库

[组件使用示例](https://fernabby.github.io/vue-demo/#/examples/form/base)

## 安装

```shell
# 选择一个你喜欢的包管理器

# NPM
$ npm install bep-ui --save

# Yarn
$ yarn add bep-ui

# pnpm
$ pnpm install bep-ui
```

## 使用

bep-ui是基于vue3 + element-plus,所以在使用bep-ui时，请先安装element-plus组件库

```json
{
  "peerDependencies": {
    "biz-gadgets": "^1.0.5",
    "element-plus": ">=2.7.3",
    "vue": ">=3.4.0"
  }
}
```

安装完成后，在main.ts文件引入样式文件

```typescript
import 'bep-ui/dist/es/style.css'
```

### 完整引入

```typescript
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import bepUI from 'bep-ui'
import 'bep-ui/dist/es/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(bepUI, {
  size: 'small',
  renderers: {
    // 自定义组件渲染器
    // 键值为组件名 组件
    SingleSelect: Component
  }
})
app.mount('#app')
```

### 按需导入

您需要使用额外的插件来导入要使用的组件
在用到的页面直接引入

```typescript
import { bepFormPlus } from 'bep-ui'
```

## 示例界面

### 表单

#### 基础表单

![基础表单](./public/sources/base-form.png)

#### 搜索表单

![搜索表单](./public/sources/search-form.png)

### 表格

#### 基础表格

![基础表格](./public/sources/base-table.png)

#### 数据展示表单

![数据展示表格](./public/sources/data-table.png)

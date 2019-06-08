---
title: Layout - 布局容器
---
# 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构:

`<g-layout>`：外层容器。

`<g-header>`：顶栏容器。

`<g-sider>`：侧边栏容器。

`<g-content>`：主要区域容器。

`<g-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。
:::

## 常见页面布局

### 基础布局

#### 浏览
<br/>
<ClientOnly>
<layout-demo-1></layout-demo-1>
</ClientOnly>

#### 代码
```html
<g-layout style="color: white;">
   <g-header style="height: 50px; background:deepskyblue;">
       header
   </g-header>
   <g-content style="height: 100px; background:lightskyblue;">
       content
   </g-content>
   <g-footer style="height: 50px; background:deepskyblue;">
       footer
   </g-footer>
</g-layout>
```
### 内侧边栏

#### 浏览
<br/>
<ClientOnly>
<layout-demo-2></layout-demo-2>
</ClientOnly>

#### 代码
```html
<g-layout style="color: white; overflow:hidden;">
    <g-header style="height: 50px; background:deepskyblue;">
        header
    </g-header>
    <g-layout>
        <g-sider style=" background: #7cb8ff; width:200px; color: black;">
            sider
        </g-sider>
        <g-content style="height: 100px; background:lightskyblue;">
            content
        </g-content>
    </g-layout>
    <g-footer style="height: 50px; background:deepskyblue;">
        footer
    </g-footer>
</g-layout>
```
### 外侧边栏

#### 浏览
<br/>
<ClientOnly>
<layout-demo-3></layout-demo-3>
</ClientOnly>

#### 代码
```html
<g-layout style="color: white; overflow:hidden;">
    <g-sider style=" background: #7cb8ff; width:200px; color: black;">
        sider
    </g-sider>
    <g-layout>
        <g-header style="height: 50px; background:deepskyblue;">
            header
        </g-header>
        <g-content style="height: 100px; background:lightskyblue;">
            content
        </g-content>
        <g-footer style="height: 50px; background:deepskyblue;">
            footer
        </g-footer>
    </g-layout>
</g-layout>
```
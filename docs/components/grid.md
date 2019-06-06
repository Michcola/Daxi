---
title: Grid - 网格
---
# 网格
Grid - 网格，通过基础的 24 分栏，迅速简便地创建网格布局，可设置 gutter 和空白，默认支持响应式。

:::tip
建议使用该组件推荐设置，CSS示例已更新
:::

#### CSS示例
```CSS
* { box-sizing: border-box; }
.demoRow { margin: 10px 0; }
.demoCol { height: 50px; border: 1px solid #ccc; background: #7CB8FF; display: flex; justify-content: center; align-items: center; }

```
## 使用方法

#### 浏览
<br/>
<ClientOnly>
<grid-demo-1></grid-demo-1>
</ClientOnly>

#### 代码

```html
<g-row class="demoRow">
    <g-col span="8"><div class="demoCol">8</div></g-col>
    <g-col span="8"><div class="demoCol">8</div></g-col>
    <g-col span="8"><div class="demoCol">8</div></g-col>
</g-row>
<g-row class="demoRow">
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
</g-row>
<g-row class="demoRow">
    <g-col span="4"><div class="demoCol">4</div></g-col>
    <g-col span="4"><div class="demoCol">4</div></g-col>
    <g-col span="4"><div class="demoCol">4</div></g-col>
    <g-col span="4"><div class="demoCol">4</div></g-col>
    <g-col span="4"><div class="demoCol">4</div></g-col>
    <g-col span="4"><div class="demoCol">4</div></g-col>
</g-row>
<g-row class="demoRow">
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
</g-row>
</div>
```
## 设置 gutter
   
#### 浏览
<br/>
<ClientOnly>
<grid-demo-2></grid-demo-2>
</ClientOnly>

#### 代码
```html
<g-row class="demoRow" gutter="10">
    <g-col span="8"><div class="demoCol">8</div></g-col>
    <g-col span="8"><div class="demoCol">8</div></g-col>
    <g-col span="8"><div class="demoCol">8</div></g-col>
</g-row>
<g-row class="demoRow" gutter="10">
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
    <g-col span="6"><div class="demoCol">6</div></g-col>
</g-row>
<g-row class="demoRow" gutter="10">
    <g-col span="4"><div class="demoCol">4</div></g-col>
    <g-col span="4"><div class="demoCol">4</div></g-col>
    <g-col span="4"><div class="demoCol">4</div></g-col>
    <g-col span="4"><div class="demoCol">4</div></g-col>
    <g-col span="4"><div class="demoCol">4</div></g-col>
    <g-col span="4"><div class="demoCol">4</div></g-col>
</g-row>
<g-row class="demoRow" gutter="10">
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
</g-row>

```
## 设置空白
   
#### 浏览
<br/>
<ClientOnly>
<grid-demo-3></grid-demo-3>
</ClientOnly>

#### 代码
```html
<g-row class="demoRow" gutter="10">
    <g-col span="8"><div class="demoCol">8</div></g-col>
    <g-col span="8" offset="8"><div class="demoCol">8</div></g-col>
</g-row>
<g-row class="demoRow" gutter="10">
    <g-col span="6" offset="6"><div class="demoCol">6</div></g-col>
    <g-col span="6" offset="6"><div class="demoCol">6</div></g-col>
</g-row>
<g-row class="demoRow" gutter="10">
    <g-col span="4"><div class="demoCol">4</div></g-col>
    <g-col span="4" offset="4"><div class="demoCol">4</div></g-col>
    <g-col span="4" offset="8"><div class="demoCol">4</div></g-col>
</g-row>
<g-row class="demoRow" gutter="10">
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2" offset="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2" offset="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2" offset="2"><div class="demoCol">2</div></g-col>
    <g-col span="2"><div class="demoCol">2</div></g-col>
    <g-col span="2" offset="2"><div class="demoCol">2</div></g-col>
</g-row>
```
---
title: Popover - 弹出层
---
# 弹出层

常用于展示鼠标 click 或者 鼠标 hover 时的提示信息。

## 鼠标 click

#### 浏览
<br/>
<ClientOnly>
<popover-demo-1></popover-demo-1>
</ClientOnly>

#### 代码

```html
<g-popover>
    <g-button>上方弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>
<g-popover position="bottom">
    <g-button>下方弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>
<g-popover position="left">
    <g-button>左边弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>
<g-popover position="right">
    <g-button>右边弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>
```
## 鼠标 hover

#### 浏览
<br/>
<ClientOnly>
<popover-demo-2></popover-demo-2>
</ClientOnly>

#### 代码

```html
<g-popover trigger="hover">
    <g-button>上方弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>
<g-popover position="bottom" trigger="hover">
    <g-button>下方弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>
<g-popover position="left" trigger="hover">
    <g-button>左边弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>
<g-popover position="right" trigger="hover">
    <g-button>右边弹出</g-button>
    <template slot="content"> 弹出内容</template>
</g-popover>
```
## 嵌套操作
popover 弹出层内容支持 html
#### 浏览
<br/>
<ClientOnly>
<popover-demo-3></popover-demo-3>
</ClientOnly>

#### 代码

```html
<g-popover>
    <template slot="content" slot-scope="{close}">
        这是一段内容确定关闭吗？
        <div style="text-align: right">
        <g-button @click="close">关闭</g-button>
        <g-button >取消</g-button>
        </div>
    </template>
    <g-button>嵌套操作</g-button>
</g-popover>
```
---
title: Tabs 标签页
---
# 标签页

分隔内容上有关联但属于不同类别的数据集合。

## 基础用法

基础的、简洁的标签页。

#### 浏览
<br/>
<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

#### 代码

``` html
<g-tabs :selected="selected">
    <g-tabs-head>
        <g-tabs-item name="1">Tab1</g-tabs-item>
        <g-tabs-item name="2">Tab2</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
        <g-tabs-pane name="1">Tab1 content 1</g-tabs-pane>
        <g-tabs-pane name="2">Tab2 content 2</g-tabs-pane>
    </g-tabs-body>
</g-tabs>
```

``` js
data:{
  selected: '1'
}
```

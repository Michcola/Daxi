---
title: Button - 按钮
sidebarDepth: 2
---
# 按钮

提供独立按钮和组合按钮，按钮可以添加图标，调整图标位置等。

## 独立按钮 

#### 浏览
<br/>
<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

#### 代码

``` html
<g-button>默认按钮</g-button>
<g-button icon="settings">设置</g-button>
<g-button icon="thumbs-up">喜欢</g-button>
<g-button icon="download">下载</g-button>
<g-button :loading="true">加载中</g-button>
<g-button disabled>默认按钮</g-button>
```
## 按钮组合

#### 浏览
<br/>
<ClientOnly>
<buttonGroup-demos></buttonGroup-demos>
</ClientOnly>

#### 代码

``` html
<g-button-group>
<g-button icon="left"  icon-position="left">上一页</g-button>
<g-button>1</g-button>
<g-button>2</g-button>
<g-button>3</g-button>
<g-button>...</g-button>
<g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
```

---
title: Toast - 弹出提示
---
# Toast 弹出提示
:::tip
若点击按钮无显示，则需要设置
:::
``` CSS
.g-toast {
    z-index: 30;
}
```
## 设置弹出位置
默认顶部弹出

默认5s后关闭
#### 浏览
<br/>
<ClientOnly>
<toast-demo-1></toast-demo-1>
</ClientOnly>

#### 代码

```html
<div>
    <g-button @click="$toast('点击弹出提示')">顶部弹出</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'bottom'})">底部弹出</g-button>
</div>
```
## 设置手动关闭

#### 浏览
<br/>
<ClientOnly>
<toast-demo-2></toast-demo-2>
</ClientOnly>

#### 代码

``` js{4}
methods: {
    onClickButton() {
        this.$toast('需要手动关闭提示哦~', {
            autoClose: false
        })
    }
}
```
```html
<div>
    <g-button @click="onClickButton">顶部弹出</g-button>
</div>
```
:::tip
autoClsoe 取值为 false（手动关闭）或数字（几秒后自动关闭，默认为5）
:::
## 个性化设置

#### 浏览
<br/>
<ClientOnly>
<toast-demo-3></toast-demo-3>
</ClientOnly>

#### 代码

``` js
methods: {
    onClickButton() {
        this.$toast('<span style="color:deepskyblue">我喜欢唱,跳,rap</span>', {
            autoClose: false,
            enableHTML: true,
            closeButton: {
                text: '知道了',
                callback: () => {
                    console.log('Oops?')
                }
            }
        })
    }
}
```
```html
<div>
    <g-button @click="onClickButton">顶部弹出</g-button>
</div>
```
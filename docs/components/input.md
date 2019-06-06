---
title: Input - 输入框
---
# 输入框

提供常用输入框，支持双向绑定。

## 示例 

#### 浏览
<br/>
<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

#### 代码

``` html
<g-input value="正常"></g-input>
<g-input value="只读" readonly></g-input>
<g-input value="不可选" disabled></g-input>
<g-input value="123木头人" error="错误"></g-input>
```
## 支持双向绑定

#### 浏览
<br/>
<ClientOnly>
<input-model-demos></input-model-demos>
</ClientOnly>

#### 代码

``` html
<g-input v-model="message"></g-input>
<div>
    message: {{message}}
</div>
```

```vue
data(){
    return {
        message:''
    }
}
```

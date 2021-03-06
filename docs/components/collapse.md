---
title: Collapse - 折叠面板
---
# 折叠面板
通过折叠面板收纳内容区域
## 基础用法
可同时展开多个面板，面板之间不影响

#### 浏览
<br/>
<ClientOnly>
<collapse-demo-1></collapse-demo-1>
</ClientOnly>


#### 代码

```html
<g-collapse :selected.sync="selectedTab">
    <g-collapse-item title="一致性 Consistency" name="1">
        与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；<br>
        在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
    </g-collapse-item>
    <g-collapse-item title="反馈 Feedback" name="2">
        控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；<br>
        页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
    </g-collapse-item>
    <g-collapse-item title="效率 Efficiency" name="3">
        简化流程：设计简洁直观的操作流程；<br>
        清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；<br>
        帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
    </g-collapse-item>
    <g-collapse-item title="可控 Controllability" name="4">
        用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；<br>
        结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
    </g-collapse-item>
</g-collapse>
```
``` js
data() {
    return {
        selectedTab: ['1']
    }
}
```
## 手风琴效果
每次只能展开一个面板
#### 浏览
<br/>
<ClientOnly>
<collapse-demo-2></collapse-demo-2>
</ClientOnly>

#### 代码

```html
<g-collapse :selected.sync="selectedTab" single>
    <g-collapse-item title="一致性 Consistency" name="1">
        与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；<br>
        在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
    </g-collapse-item>
    <g-collapse-item title="反馈 Feedback" name="2">
        控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；<br>
        页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
    </g-collapse-item>
    <g-collapse-item title="效率 Efficiency" name="3">
        简化流程：设计简洁直观的操作流程；<br>
        清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；<br>
        帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
    </g-collapse-item>
    <g-collapse-item title="可控 Controllability" name="4">
        用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；<br>
        结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
    </g-collapse-item>
</g-collapse>
```
``` js
data() {
    return {
        selectedTab: ['1']
    }
}
```


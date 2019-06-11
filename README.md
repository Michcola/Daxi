

<p align="center">
  <a href="https://Michcola.github.io/Daxi/">
    <img width="200" src="https://Michcola.github.io/Daxi/daxi.png">
  </a>
</p>

<h1 align="center">
  <a href="https://Michcola.github.io/Daxi/" target="_blank">Daxi-UI</a>
</h1>

<div align="center">

An easy UI components based on Vue.

[![Build Status](https://travis-ci.org/Michcola/Daxi.svg?branch=master)](https://travis-ci.org/Michcola/Daxi)
[![npm package](https://img.shields.io/npm/v/daxi.svg?style=flat-square)](https://www.npmjs.com/package/daxi)
![](https://img.shields.io/badge/language-JavaScript-yellow.svg)
![](https://img.shields.io/badge/license-MIT-000000.svg)
    
</div>

<div align="center">
Daxi UI 是一个好用的 UI 框架，提供了一些常用组件，适合 PC 端和移动端使用。

组件：按钮、输入框、网格、布局、Toast、Tabs、Popover、手风琴
</div>

## 介绍

这是我在学习Vue过程中做的一个UI框架,希望对你有用~
> 本组件库仅供学习交流，请勿在生产环境中使用

## 开始使用


 1. 添加 CSS 样式,使用本框架前,请在css中开启border-box
    ```css
    *,*::before,*::after{box-sizing: border-box;}
    ```
    IE8 及以上浏览器都支持此样式~
 2. 安装 daxi
    ```
    npm install daxi
    ```
    或者
    ```
    yarn add daxi
    ```
 3. 引入 daxi
    ```
    import {Button,ButtonGroup,Icon} from 'daxi'
    import 'daxi/dist/index.css';
    
    export default {
      name: 'app',
      components: {
        HelloWorld,
        'g-button':Button
      }
    }
    ```
    

## 文档
[官方文档](https://michcola.github.io/Daxi/)
## 提问
[Issues](https://github.com/Michcola/Daxi/issues)
## 提交记录
[Commits](https://github.com/Michcola/Daxi/commits/master)
## 联系方式
邮箱:[843298603@foxmail.com](mailto:843298603@foxmail.com)
## 贡献代码
[Pull request](https://github.com/Michcola/Daxi/pulls)

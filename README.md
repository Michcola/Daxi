# 达西-一个 Vue UI 组件

[![Build Status](https://travis-ci.org/Michcola/Daxi.svg?branch=master)](https://travis-ci.org/Michcola/Daxi)

## 介绍

这是我在学习Vue过程中做的一个UI框架,希望对你有用~

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

# 达西-一个 Vue UI 组件

[![Build Status](https://travis-ci.org/Michcola/Daxi.svg?branch=master)](https://travis-ci.org/Michcola/Daxi)

## 介绍

这是我在学习Vue过程中做的一个UI框架,希望对你有用~

## 开始使用


1. 添加 CSS 样式 

    使用本框架前,请在css中开启border-box
    
    ```css
    *,*::before,*::after{box-sizing: border-box;}
    ```
    IE8 及以上浏览器都支持此样式~
    
    你还需要设置默认颜色等变量 (后续会改为SCSS变量)
    ```css
    html{
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: #fff;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    
    ```
    IE15 及以上浏览器都支持此样式~
    
2. 安装 daxi
    ```
    npm i --save daxi
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

## 提问

## 变更记录

## 联系方式

## 贡献代码


# 前言

这些年前端框架层出不穷，前端技术更迭超快，angular、react、vue成为市场主流框架。为了追赶技术，自己也花了点时间了解各大框架，最后决定深入的学习vue.js。由国人大牛尤雨溪独立开发维护的一套渐进式前端框架。从看官网敲API语法到构建整体框架花了不少时间，vue-router和vuex对于没有深入学习后端的人来说吃透的确不是那么容易。所以借这个项目一步一步的去探索vue.js的精华所在。

### 技术栈

> vue2.0 + vue-router + vuex + axios + es6 + webpack

## 项目构建

### 2017、7、27  

##### git -- 项目插件
```
在github创建项目（vue-eleme）项目地址：https://github.com/liuqiyu/vue-eleme.git

打开cmd，随意进入项目管理的目录。git clone https://github.com/liuqiyu/vue-eleme.git。克隆项目

cd vue-eleme。进入项目
    
```

##### vue-cli脚手架搭建
```
## 全局安装 vue-cli
cnpm install vue-cli -g

## 创建webpack模板
vue init webpack

## 安装依赖
cnpm install

## 本地运行

cnpm run dev

## 编译打包

cnpm run build
打包后再上传文件到github中，使用github-page预览项目需要在/config/index.js修改配置-build-assetsPublicPath：'./
```
[预览地址](https://liuqiyu.github.io/vue-eleme/dist/#/')


##### 使用sass css预处理器  地址：https://vue-loader.vuejs.org/zh-cn/configurations/pre-processors.html
```
cnpm install node-sass --save-dev  (注：sass-loader依赖于node-sass)

cnpm install sass-loader --save-dev

<style lang="sass">
  /* write sass here */
</style>

```

##### 使用axios  -- axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端
```
### 安装 
  cnpm install axios --save

### 使用
  main.js
  import axios from 'axios'
  Vue.prototype.$http = axios
  
### example:
  
  this.$http.get('./static/data/allcity.json').then(function (response) {
    vm.sortgroupcity = response.data;
  }).catch(function (error) {
    console.log(error);
  });
```

##### /home -- 首页
```
  # 页面解析
  
  ### 公用头部   -- 此组件在/src/components/header中，案例大部分页面能应用
  
  ### 热门城市
    
  ### 按字母排序城市列表
  
  本页，引入axios插件，在static中插件静态的data/json文件，使用axios进行请求数据，并渲染在页面中。详情请看/src/page/home/home.vue
  
  ### 获取本机ip地址
  
  需要jsonp跨域
  
  cnpm install jsonp --save // https://github.com/mzabriskie/axios/blob/master/COOKBOOK.md#jsonp
  
  var jsonp = require('jsonp');
  
  jsonp('http://www.example.com/foo', null, function (err, data) {
    if (err) {
      console.error(err.message);
    } else {
      console.log(data);
    }
  });
  
 
```


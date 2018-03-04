## `vue-music`简介
+ 利用`vue`全家桶做的音乐app
+ 实现动画切换，页面上下滚动等动效
+ 音乐播放，歌词滚动，歌曲切换等播放效果
+ 歌手排行，歌曲推荐，个人中心等页面

## 技术栈
### 前端
+ `vue`全家桶，包括`vue`,`vue-router`,`vuex`和`vue-lazyload`
+ `better-scroll`移动端滚动插件
+ `Stylus`,CSS的预处理器
+ `ES6`箭头函数,`Class`等新方法

### 后端
+ `Node.js`基于`V8`引擎的后端服务
+ `Express`,`Node.js`的辅助框架
+ `jsonp`和`axios`抓取QQ音乐的数据

## 提交记录
+ 每次提交记录都在`static/commitRecords`文件夹下
+ 提交记录是将每次完成的重要信息简单总结，方便查看每次的完成内容

## 项目运行
+ `git clone git@github.com:Dawnight/vue-music.git`
+ `cd vue-music`
+ `npm install`
+ 进入`static/expressServer`文件夹下,启动本地资源服务器`npm start`

## 备注
+ 由于QQ音乐接口改变，所以采用本地第二个服务器来获取数据资源
+ `static/localServer`是一个本地测试使用文件夹，无需关心

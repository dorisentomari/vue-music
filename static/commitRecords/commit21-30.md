### 提交记录:21-30
#### 第21次提交:获取QQ音乐歌手详情信息
+ 在`api/singer`内创建一个获取歌手详情信息的方法
+ 在`singer-detail`组件内获取数据

#### 第22次提交:创建`music-list`组件和`song-list`组件
+ 在`singer-detail`组件内部显示`music-list`组件
+ 在`music-list`组件内部显示`song-list`组件，并用`scroll`组件包裹，让`song-list`组件可以滚动

#### 第23次提交:完成音乐列表页面`music-list`
+ 主要是通过滚动，完成放大图片，显示`随机播放按钮`的功能
+ 使用方法就是，采用`this.$refs`对`dom`进行操作
+ 封装一个自动给css样式`transform`属性添加不同浏览器前缀的方法，抽象出来，提高代码复用性

#### 第24次提交:开始制作播放器**核心**
+ 在`common/js/config`文件中定义播放需要的不同模式
+ 在`store/getter`,`store/state`,`store/mutations`和`store/mutations-types`文件中定义播放器不同情况下需要的一些播放设置，包括`playing`正在播放，`fullScreen`全屏播放，`playlist`播放列表，`sequenceList`排序列表，`mode`播放模式，`currentIndex`当前索引和`currentSong`当前歌曲

#### 第25次提交:建立`vuex`管理模型
+ 建立`player`组件，由于不受其他组件及路由的影响，所以直接放在`App.vue`文件内使用
+ 在`song-list`组件内发射出一个`select`事件
+ `song-list`的父组件`music-list`组件进行接收事件，通过`vuex`的`getActions`，对传递的数据进行管理
+ 在`store/actions`中建立一个方法对`select`事件进行管理




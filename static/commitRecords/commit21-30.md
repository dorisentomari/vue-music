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

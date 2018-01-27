### 提交记录:11-20
#### 第11次提交:`loading`组件
+ 创建`loading`组件，在`recommend`组件的`discList`的长度为空的时候，显示

#### 第12次提交:获取歌手信息
+ 利用封装好的`jsonp`方法跨域获取`y.qq.com`的歌手信息
+ 和之前获取数据的方式一致，但是对获取到的数据结构需要进行修改，不能直接使用

#### 第13次提交:修改获取到歌手数据的数据结构
+ 获取到歌手数据后，需要将数据改成有序的数组对象
+ 按照`热门a-zA-Z`的顺序排列
+ 新建一个`Singer`的类，用来抽象出循环遍历时重复的部分，提高代码复用

#### 第14次提交:在页面上显示歌手信息
+ 双重循环
+ 懒加载
+ 存留一个bug未解决
+ 更新提交:bug已经解决，原因是`singer`组件的变量`singers`变量赋值写错
+ 头像显示问题，头像类名英文单词拼写错误

#### 第15次提交:歌手页面显示字母快速导航
+ 在`scroll`组件建立两个跳转的方法
+ 在`common/js/dom`库中建立一个修改设置dom属性的方法
+ 在`listview`组件内写入具体的操作方法
+ 遗留问题1:`scroll`库的标签包含方法
+ 遗留问题2:具体如何使用`scroll`跳转字母元素的计算方法

#### 第16次提交:歌手页面字母导航
+ 解决遗留问题1，`listview`组件的滚动异常，原因是标签嵌套有问题
+ 歌手字母导航，需要定义事件，监听滚动事件，整体比较麻烦，难度较高

#### 第17次提交:优化歌手页面字母快速导航
+ 字母被点击时，被点击的字母高亮
+ 在`热`和`Z`这两个字母的最上方和最下方取消事件效果

#### 第18次提交:歌手页面子路由
+ 新建`SingerDetail`组件，作为`Singer`组件的子路由
+ `ListView`组件发射出一个`select`事件，然后`SingerDetail`组件接收`select`事件，然后将显示`SingerDetail`组件
+ 显示`SingerDetail`组件的时候比较生硬，做一个动画效果，过渡一下

#### 第19次提交:使用`vuex`做状态管理
+ 在`store`文件夹下新建状态管理的文件
  * `index.js`入口文件
  * `state.js`状态
  * `mutations.js`mutations
  * `mutations-types.js`与`mutations`相关的一些名字，存储一些常量
  * `actions.js`异步操作，对mutations进行封装
  * `getters.js`对一些state做映射
+ `vuex`初始化
+ `store/index.js`是`vuex`的入口文件
+ `strict`为严格模式，开发模式打开，上心后关闭
+ `createLog()`为`vuex`的一个插件，用于在控制台输出日志

#### 第20次提交:调错并通过`vuex`传递数据
+ `import store from './store'`必须使用小写的`store`，大写的会报错
+ 在`singer`组件内使用`mapMutations`发射数据
+ 在`singer-detail`组件的计算属性使用`mapGetters`接收数据

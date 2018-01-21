## vueApp
### 提交记录
#### 第1次提交
+ 记录: 
  + 项目初始化配置完成
  + 引入已经写好的`stylus`样式
  + 载入`stylus`和`stylus-loader`
  + 对`webpack.base.conf.js`的引用路径进行简单配置
+ 项目初始化: `vue init webpack vue-app`
+ 关于使用`stylus`
  + 安装`stylus@0.54.5 stylus-loader@2.1.1`到`package.json`文件
  + 不需要手动载入`loader`，安装完成后，项目会自动载入`stylus`和`stylus-loader`，不会报错

+ 路径引用
  + A文件要引用B文件，可以直接使用相对路径引用
  + 与课程标准一致的是修改`build/webpack.base.conf.js`文件
  + 在导出的`module`的`resolve`里添加`'common': resolve('src/common')`
```
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'common': resolve('src/common')
    }
  },
```

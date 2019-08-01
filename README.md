# 使用typescript编写一个可发布的axios库

## 初始化

- 使用```typescript-library-starter```进行项目的初始化
- src目录下进行编写代码
- 使用webpack和express配置一个后端服务进行调试

## 基础请求代码

- 编写入口文件（index.js）
- 使用XMLHttpRequest发送请求，封装成方法暴露出去方便调用（xhr.ts）

## 处理URL的参数（url.ts）

- 判断是否为空
- 判断是否为数组，遍历数组，进行判断是否为对象还是时间戳
- 判断是否还有hash,判断是否原url上含有参数

## 处理请求的body参数和请求的headers（header.ts和data.ts）

- 判断data是对象将其JSON.stringify
- 通过req.getAllResponseHeaders()获取headers并将其转化成为对象
- 判断其content-type的值进行赋值（大小写的转换）
- 监听req的状态改变对response进行组装（xhr.ts）
- 通过改造xhr.ts为promise函数将response进行抛出
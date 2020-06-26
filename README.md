# express-template

自定义一个express模板,供每次使用时快速拉取代码,避免重复配置浪费时间;

# 内部配置了public文件夹

通过static访问public文件下的内容(app->public)

配置文件位置:init->static.js

# 内部配置了art-template模板

配置文件位置:init->view.js

# 自动加载文件

app文件夹(service/controller/model)等下创建文件后,无需手动配置,会自动加载;

# 使用方法:

Example:
```
//获得contrlloer文件下user.js文件下的index函数
const fn1 = app.controller.user.index

////获得service文件下user.js文件下的index函数
const fn2 = app.service.user.index
```
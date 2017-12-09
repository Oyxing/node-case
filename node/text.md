//引入 exporess
    
    var express = require('express');
//实例化express 的对象
   
    var app = express();
//配置视图引擎

    app.set('view engine','ejs')

//调用对应的方法
//根据路由地址 返回数据信息
```
//输出 html 文件
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
});
//输出文本
app.get('/contact',function(req,res){
    res.send('this is contact package' + req.url)
});
// 路由参数
// render   输出 ejs 文件
app.get('/profile/:id',function(req,res){
    res.render('profile',{name:req.params.id})
});

app.get('/if_foreach',function(req,res){
    var data = [{name:[{name:'小明1'},{name:'小明2'}],age:'20'},{name:[{name:'小红1'},{name:'小红2'}],age:'30'}]
    res.render('if_foreach',{data:data})
});
```
//监听服务器端口
```
app.listen(3000);
```
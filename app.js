//引入 exporess
var express = require('express');
//实例化express 的对象
var app = express();
//配置视图引擎
app.set('view engine','ejs')

//服务器识别外部样式表
//     文件路径    把静态文件转换到服务器上
app.use('/assets',express.static('assets'))

//调用对应的方法
//根据路由地址 返回数据信息
app.get('/',function(req,res){
    res.render('index')
});
app.get('/contact',function(req,res){
    res.render('contact')
});
// 路由参数
app.get('/profile/:id',function(req,res){
    res.render('profile',{name:req.params.id})
});
app.get('/if_foreach',function(req,res){
    var data = [{name:[{name:'小明1'},{name:'小明2'}],age:'20'},{name:[{name:'小红1'},{name:'小红2'}],age:'30'}]
    res.render('if_foreach',{data:data})
});

//监听服务器端口
app.listen(3000);
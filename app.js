//引入模块
var express = require('express')
var fs = require('fs')
var path = require('path')
var bodyParser = require('body-parser')
var session = require('express-session')
var arttemplate = require('art-template')

//创建服务器对象
var app = express()

//设置ejs模板
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(bodyParser.urlencoded({extended:false}))
//托管静态资源
app.use('/assets', express.static('assets'))
app.use('/static', express.static('static'))

app.use(session({
  secret:'wsy key',
  resave:false,
  saveUninitialized:false
}))
//设置中间件
app.listen(3000, () => {
  console.log('the server is running at http://127.0.0.1:3000');
})

fs.readdir(path.join(__dirname,'routers'),(err,data)=>{
  if(err) return console.log(err.message);
  data.forEach(function (item, index) {
      app.use(require('./routers/'+item))
  });
})
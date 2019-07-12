var express = require('express')
var cateCtrl = require('../controllers/cateCtrl')
var router = express.Router()

router.get('/categories', cateCtrl.catePage)        //显示分类目录页面
      .get('/getData', cateCtrl.getData)            //获取数据库数据
      .post('/addCate',cateCtrl.addCate)            //添加数据
      .get('/delCate',cateCtrl.delcate)             //删除数据
      .get('/getEdit',cateCtrl.getEdit)             //跳转编辑页面，并获得相应数据
      .post('/editCate',cateCtrl.editCate)          //编辑数据
      .get('/delMoreCate',cateCtrl.delMoreCate)     //批量删除数据

module.exports = router
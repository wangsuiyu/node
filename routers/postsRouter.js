var express = require('express')

var postsCtrl = require('../controllers/postsCtrl')

var router = express.Router()
       //显示添加文章页面
router.get('/postadd',postsCtrl.postAddPage)
       //实现添加文章
      .post('/postAddData',postsCtrl.postAddData)
       //显示所有文章页面
      .get('/posts',postsCtrl.postsPage)
       //实现获得所有文章
      .get('/getPostAllData',postsCtrl.getPostAllData)
       //实现文章分页
      .get('/getPaginationData',postsCtrl.getPostAllData)
       //实现删除文章
      .get('/delpostsData',postsCtrl.delpostsData)
       //显示编辑文章页面
      .get('/postedit',postsCtrl.posteditPage) 
       //提交更新数据
      .post('/updatePostsData',postsCtrl.updatePostsData) 


module.exports = router
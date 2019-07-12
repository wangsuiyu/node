var express = require('express')
var comCtrl = require('../controllers/comCtrl')
var router = express.Router()
       //显示评论页面
router.get('/comments',comCtrl.commentPage)
       //获得所有评论数据
      .get('/getComments',comCtrl.getComments)
       //实现分页评论
      .get('/getcommentAllData',comCtrl.getComments)
       //删除评论数据
      .get('/delCommentData',comCtrl.delCommentData) 
       //批准评论
      .get('/approvedComment',comCtrl.approvedComment) 
       //拒绝评论
      .get('/rejectedComment',comCtrl.rejectedComment) 
       //批量删除评论
      .get('/delMoreComments',comCtrl.delMoreComments) 
       //批量批准评论
      .get('/appMoreComments',comCtrl.appMoreComments) 
       //批量拒绝评论
      .get('/recMoreComments',comCtrl.recMoreComments) 

module.exports = router
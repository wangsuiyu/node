var comModel = require('../models/comModel')

module.exports = {
    commentPage(req, res) {
        if (!req.session.isLogin) {
            res.redirect('/login')
            return
        }
        res.render('comments', { user:req.session.user})
    },
    getComments(req, res) {
        let {currentPage} = req.query
        currentPage = currentPage? currentPage:1
        comModel.getComments(currentPage,(err, results) => {
            if (err) return res.json({
                "code": 1,
                "msg": "请求失败"
            })
            res.json({
                "code": 0,
                "msg": "请求成功",
                "data":results[0],
                'count':results[1][0].totalCount
            })
        })
    },
    delCommentData(req,res){
        let {id} = req.query
        comModel.delCommentData(id,results=>{
            if(results) res.json({
                "code":1,
                "msg":"评论删除失败"
            })

            res.json({
                "code":0,
                "msg":"评论删除成功"
            })
        })
    },
    approvedComment(req,res){
        let {id} = req.query
        comModel.approvedComment(id,results=>{
            if(results) return res.json({
                "code":1,
                "mag":"评论批准失败"
            })
            res.json({
                "code":0,
                "mag":"评论批准成功"
            })
        })
    },
    rejectedComment(req,res){
        let {id} = req.query
        comModel.rejectedComment(id,results=>{
            if(results) return res.json({
                "code":1,
                "mag":"拒绝批准失败"
            })
            res.json({
                "code":0,
                "mag":"拒绝批准成功"
            })
        })
    },
    delMoreComments(req,res){
        let {id} = req.query
        comModel.delMoreComments(id,results=>{
            if(results) return res.json({
                "code":1,
                "mag":"批量删除失败"
            })
            res.json({
                "code":0,
                "mag":"批量删除成功"
            })
        })
    },
    appMoreComments(req,res){
        let {id} = req.query
        comModel.appMoreComments(id,results=>{
            if(results) return res.json({
                "code":1,
                "mag":"批量批准失败"
            })
            res.json({
                "code":0,
                "mag":"批量批准成功"
            })
        })
    },
    recMoreComments(req,res){
        let {id} = req.query
        comModel.recMoreComments(id,results=>{
            if(results) return res.json({
                "code":1,
                "mag":"批量拒绝失败"
            })
            res.json({
                "code":0,
                "mag":"批量拒绝成功"
            })
        })
    }
   
}
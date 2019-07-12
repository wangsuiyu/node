var postsModel = require('../models/postsModel')
module.exports = {
    postAddPage(req, res) {
        if (!req.session.isLogin) {
            res.redirect('/login')
            return
        }
        postsModel.getCateData((err, results) => {
            if (err) return console.log(err.message);
            res.render('post-add', {
                data: results,
                user:req.session.user
            })
        })
    },
    postAddData(req, res) {
        let art = req.body
        art.user_id = req.session.user.id
        postsModel.postAddData(art, results => {
            if (results) return res.json({
                "code": 1,
                "msg": "添加失败"
            })
            res.json({
                "code": 0,
                "msg": "添加成功"
            })
        })
    },
    postsPage(req, res) {
        if (!req.session.isLogin) {
            res.redirect('/login')
            return
        }
        
        postsModel.getHeadDate((err,data)=>{
           if(err) return res.send('404')
           res.render('posts', {data:data, user:req.session.user})
        })
       
    },
    getPostAllData(req, res) {
        let currentPage = req.query.currentPage
        currentPage = currentPage ? currentPage : 1
        postsModel.getPostAllData(currentPage, (err, results) => {
            if (err) return res.json({
                "code": 1,
                "msg": "请求失败"
            })
            res.json({
                "code": 0,
                "msg": "请求成功",
                "data": results[0],
                "count": results[1][0].totalCount
            })
        })
    },
    delpostsData(req,res){
        let {id} = req.query
        postsModel.delpostsData(id,results=>{
            if(results) return res.json({
                "code":1,
                "msg":"删除文章失败"
            })
            res.json({
                "code":0,
                "msg":"删除文章成功"
            })
        })
    },
    posteditPage(req,res){
        if(!req.session.isLogin){
           res.redirect('/login')
           return
        }
        let {id} = req.query
     
        postsModel.getEditPostData(id,(err,results)=>{
           if(err) res.send('404')
           res.render('postedit',{post:results[0][0],cate:results[1], user:req.session.user})
        })
       
    },
    updatePostsData(req,res){
        let post = req.body
        postsModel.updatePostsData(post,results=>{
            if(results) return res.json({
                "code":1,
                "msg":"用户更新失败"
            })
            res.json({
                "code":0,
                "msg":"用户更新成功"
            })
        })
    }
}
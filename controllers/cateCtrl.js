var cateModel = require('../models/cateModel')
module.exports = {
    catePage(req, res) {
        if(!req.session.isLogin){
            res.redirect('/login')
            return
        }
        res.render('categories', {user:req.session.user})
    },
    getData(req, res) {
        cateModel.getData((err, results) => {
            if (err) return res.json({
                "code": 1,
                "msg": "请求失败"
            })
            res.json({
                "code": 0,
                "msg": "请求成功",
                "data": results
            })
        })
    },
    addCate(req, res) {
        var cate = req.body
        cateModel.addCate(cate, results => {
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
    delcate(req,res){
        let {id} = req.query
        cateModel.delCate(id,results=>{
            if(results) return res.json({
                "code":1,
                "msg":"删除失败"
            })
            res.json({
                "code":0,
                "msg":"删除成功"
            })
        })
    },
    getEdit(req,res){
        let {id} = req.query
        cateModel.getEdit(id,(err,results)=>{
            if(err) return res.json({
                "code":1,
                "msg":"请求失败"
            })
            res.json({
                "code":0,
                "msg":"请求成功",
                "data":results
            })
        })
    },
    editCate(req,res){
        var cate = req.body
        cateModel.editCate(cate,results=>{
            if(results) return res.json({
                "code":1,
                "msg":"编辑失败"
            })
            res.json({
                "code":0,
                "msg":"编辑成功"
            })
        })
    },
    delMoreCate(req,res){
        var {id} = req.query
        cateModel.delMoreCate(id,results=>{
            if(results) return res.json({
                "code":1,
                "msg":"批量删除失败"
            })
            res.json({
                "code":0,
                "msg":"批量删除成功"
            })
        })
    }
}
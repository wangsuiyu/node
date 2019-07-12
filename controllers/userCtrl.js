var userModel = require('../models/userModel')
module.exports = {
    userPage(req, res) {
        if(!req.session.isLogin){
            res.redirect('/login')
            return
        }
        res.render('users', { user:req.session.user})
    },
    userData(req, res) {
        userModel.userData((err, results) => {
            if (err) return res.json({
                "code": 1,
                "msg": "请求失败"
            })

            res.json({
                "code": 0,
                "msg": "请求成功",
                "data":results
            })
        })
    },
    addUser(req,res){
        var user = req.body
        user.status = 'unactivated'
        user.avatar = '/static/uploads/avatar.jpg'
        userModel.addUser(user,results=>{
            if(results) return res.json({
                "code":1,
                "msg":'添加失败'
            })

            res.json({
                "code":0,
                "msg":'添加成功'
            })
        })
    },
    delUser(req,res){
        var id = req.query.id

        userModel.delUser(id,results=>{
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
    editData(req,res){
        var id = req.query.id
        userModel.editData(id,(err,results)=>{
            if(err) return res.json({
                "code":1,
                "msg":"请求失败",
            })

            res.json({
                "code":0,
                "msg":"请求成功",
                "data":results[0]
            })
        })
    },
    editUser(req,res){
        var user = req.body
        console.log(user);
        userModel.editUser(user,results=>{
            if(results) return res.json({
                "code":1,
                "msg":"更新失败"
            })
            res.json({
                "code":0,
                "msg":"更新成功"
            })
        })
    },
    delDataUsers(req,res){
        var {id} = req.query;
        userModel.delDataUsers(id,results=>{
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
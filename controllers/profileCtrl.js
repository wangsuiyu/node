var formidable = require('formidable')

var profileModel = require('../models/profileModel')

module.exports = {
    profilePage(req, res) {
        //个人用户界面
        if(!req.session.isLogin){
            res.redirect('/login')
            return
        }
        res.render('profile', { user:req.session.user})
    },
    profileData(req, res) {
        //个人用户获取相应的用户信息
        let {email} = req.session.user
        profileModel.profileData(email,(err, results) => {
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
    uploadImg(req, res) {
        //上传图片
        var form = new formidable.IncomingForm()
        form.encoding = 'utf-8'
        form.keepExtensions = true
        form.uploadDir = 'assets/img'
        form.maxFieldsSize = 20 * 1024 * 1024
        form.maxFileSize = 200 * 1024 * 1024
        form.maxFields = 1000
        form.parse(req, function (err, fields, files) {
            if (err) return res.json({
                "code": 1,
                "msg": "上传失败"
            })
            res.json({
                "code": 0,
                "msg": "上传成功",
                "src": files.avatar.path
            })
        })
       



    },
    updateProfile(req,res){
        //更新个人用户
        var user = req.body
        profileModel.updateProfile(user,results=>{
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
    passwordPage(req,res){
        //获取重置密码页面
        if(!req.session.isLogin){
            res.redirect('/login')
            return
        }
        res.render('password-reset',{ user:req.session.user})
    },
    passwordReset(req,res){
        let {email} = req.session.user
        profileModel.getPassword(email,(err,results)=>{
            if(err) return console.log(err.message);
            //获取数据库动态密码
            let {password} = results[0]
            //接收发送过来的数据
            var  data = req.body
            let {passwordold,passwordconfirm} = data
            profileModel.passwordReset(email,passwordconfirm,results=>{
            //如果数据密码与旧密码不一致，返回给浏览器信息
            if(password!=passwordold){
                return res.json({
                 "code":2,
                 "msg":"密码输入错误"
             })
             }
            //调用方法来重置密码
            if(results) return res.json({
                "code":1,
                "msg":"重置密码错误"
            })
            res.json({
                "code":0,
                "msg":"重置密码成功"
            })
            
        })
        })
     
        
    
    }
}
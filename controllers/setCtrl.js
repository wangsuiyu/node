var setModel = require('../models/setModel')
module.exports = {
    navMenusPage(req,res){
       if(!req.session.isLogin){
           res.redirect('/login')
           return
       }
       res.render('nav-menus',{ user:req.session.user})
    },
    getNavMenusData(req,res){
        setModel.getNavMenusData((err,data)=>{
            if(err) return res.json({
                "code":1,
                "msg":"获取数据失败"
            })
            res.json({
                "code":0,
                "msg":"获取数据成功",
                "data":JSON.parse(data[0].value)
            })
        })
    },
    addNavMenus(req,res){
        let nav = req.body
        setModel.addNavMenus(nav,results=>{
            if(results) return res.json({
                "code":1,
                "msg":"添加数据失败"
            })
            res.json({
                "code":0,
                "msg":"添加数据成功"
            })
        })
    },
    delNavMenus(req,res){
        let id = req.query.id
        setModel.delNavMenus(id,results=>{
            if(results) return res.json({
                "code":1,
                "msg":"删除数据失败"
            })
            res.json({
                "code":0,
                "msg":"删除数据成功"
            })
        })
    },
    slidesPage(req,res){
        if(!req.session.isLogin){
            res.redirect('/login')
            return
        }
        res.render('slides',{ user:req.session.user})
    },
    getSlidesData(req,res){
        setModel.getSlidesData((err,data)=>{
            if(err) return res.json({
                "code":1,
                "msg":"获取数据失败"
            })
            res.json({
                "code":0,
                "msg":"获取数据成功",
                "data":JSON.parse(data[0].value)
            })
        })
    },
    addSlides(req,res){
        let slides = req.body
        setModel.addSlides(slides,results=>{
            if(results) return res.json({
                "code":1,
                "msg":"添加数据失败"
            })
            res.json({
                "code":0,
                "msg":"添加数据成功"
            })
        })
    },
    delSlides(req,res){
        let {id} = req.query
        setModel.delSlides(id,results=>{
            if(results) return res.json({
                "code":1,
                "msg":"删除数据失败"
            })
            res.json({
                "code":0,
                "msg":"删除数据成功"
            })
        })
    },
    settingsPage(req,res){
        if(!req.session.isLogin){
            res.redirect('/login')
            return
        }
       
        setModel.getSettingsData((err,data)=>{
            if(err) return res.send('404')
            res.render('settings',{res:data, user:req.session.user})
        })
    },
    updateSettingsData(req,res){
        let set = req.body
        set.comment_status = set.comment_status == "on" ? 0:1
        set.comment_reviewed = set.comment_reviewed == "on" ? 0:1
        
        setModel.updateSettingsData(set,results=>{
            if(results) return res.json({
                "code":1,
                "msg":"数据更新失败"
            })
            res.json({
                "code":0,
                "msg":"数据更新成功"
            })
        })
    }
}
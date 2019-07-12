var indexModel = require('../models/indexModel')
module.exports = {
    indexPage(req,res){
        if(!req.session.isLogin){
            res.redirect('/login')
            return
        }
        indexModel.getIndexData((err,data)=>{
            if(err) return res.senn('404')
            res.render('index',{
                ...data[0][0],
                ...data[1][0],
                ...data[2][0],
                ...data[3][0],
                ...data[4][0],
                user:req.session.user
            })
        })
    }
}
var loginModel = require('../models/loginModel')

module.exports = {
    loginPage(req, res) {
        res.render('login', {})
    },
    comeIndex(req, res) {
        var user = req.body
        loginModel.comeIndex(user, (err, results) => {
            if (err) return res.json({
                "code": 1,
                "msg": "登录失败"
            })
            if (!results.length) return res.json({
                "code": 2,
                "msg": "登录失败"
            })
            if (results.length) {
                req.session.isLogin = true
                req.session.user = results[0]
                res.json({
                    "code": 0,
                    "msg": "登录成功"
                })
            }
        })
    },
    loginOut(req, res) {
        req.session.destroy(err => {
            if (err) return console.log(err.message);
            res.redirect('/login')
        })
    }


}
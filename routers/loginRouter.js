var express = require('express')
var loginCtrl = require('../controllers/loginCtrl')
var router = express.Router()
router.get('/login',loginCtrl.loginPage)
      .post('/comeIndex',loginCtrl.comeIndex)
      .get('/loginOut',loginCtrl.loginOut)

module.exports = router
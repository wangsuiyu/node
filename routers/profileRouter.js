var express = require('express')
var profileCtrl = require('../controllers/profileCtrl')


var router = express.Router()

router.get('/profile', profileCtrl.profilePage)
      .get('/profileData', profileCtrl.profileData)
      .post('/uploadImg', profileCtrl.uploadImg)
      .post('/updateProfile',profileCtrl.updateProfile)
      .get('/passwordPage',profileCtrl.passwordPage)
      .post('/passwordReset',profileCtrl.passwordReset)
      
module.exports = router
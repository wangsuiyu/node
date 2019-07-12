var express = require('express')
var setCtrl = require('../controllers/setCtrl')
var router = express.Router()

router.get('/nav-menus',setCtrl.navMenusPage)
      .get('/getNavMenusData',setCtrl.getNavMenusData)
      .post('/addNavMenus',setCtrl.addNavMenus)
      .get('/delNavMenus',setCtrl.delNavMenus)
     
      .get('/slides',setCtrl.slidesPage)
      .get('/getSlidesData',setCtrl.getSlidesData)
      .post('/addSlides',setCtrl.addSlides)
      .get('/delSlides',setCtrl.delSlides)

      .get('/settings',setCtrl.settingsPage)
      .post('/updateSettingsData',setCtrl.updateSettingsData)


module.exports = router
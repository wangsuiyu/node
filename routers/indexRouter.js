var express = require('express')
var control = require('../controllers/indexCtrl')
var router = express.Router()

router.get('/',(req,res)=>{
    control.indexPage(req,res)
})

module.exports = router
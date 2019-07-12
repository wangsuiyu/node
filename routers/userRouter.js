var express = require('express')
var usersCtrl = require('../controllers/userCtrl')
var router = express.Router()
router.get('/users',(req,res)=>{
    usersCtrl.userPage(req,res)
})
.get('/userData',(req,res)=>{
    usersCtrl.userData(req,res)
})
.post('/addUser',(req,res)=>{
    usersCtrl.addUser(req,res)
})
.get('/delUser',(req,res)=>{
    usersCtrl.delUser(req,res)
})
.get('/editData',(req,res)=>{
    usersCtrl.editData(req,res)
})
.post('/editUser',(req,res)=>{
    usersCtrl.editUser(req,res)
})
.get('/delDataUsers',(req,res)=>{
    usersCtrl.delDataUsers(req,res)
})
module.exports = router
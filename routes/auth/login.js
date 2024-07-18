const express=require('express')
const loginFunction=require('C:\\Users\\Owner\\Desktop\\project4\\controller\\auth\\login.js')
const  loginRouter=express.Router()
loginRouter.post('/login',loginFunction)
 module.exports=  loginRouter
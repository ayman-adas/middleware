const express=require('express')
const registerFunction=require('C:\\Users\\Owner\\Desktop\\project4\\controller\\auth\\register.js')
const  registerRouter=express.Router()
registerRouter.post('/register',registerFunction)
 module.exports=  registerRouter
const express=require('express')
const createFunction=require('../../controller/items/create_item')
const authentication = require('../../middleware/authentication')
const authorization = require('../../middleware/authorized')
const  CreateItemRouter=express.Router()
CreateItemRouter.post('/item/create',authentication,authorization("Write"),createFunction)
 module.exports=CreateItemRouter
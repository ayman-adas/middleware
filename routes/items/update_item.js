const express=require('express')
const updateItem=require('../../controller/items/update_item')
const authentication = require('../../middleware/authentication')
const authorization = require('../../middleware/authorized')
const  updateItemRouter=express.Router()
updateItemRouter.post('/item/update',authentication,updateItem)
 module.exports=updateItemRouter
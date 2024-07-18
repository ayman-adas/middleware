const express=require('express')
const deleteFunction=require('../../controller/items/delete_item')
const authentication = require('../../middleware/authentication')
const authorization = require('../../middleware/authorized')
const  deleteItemRouter=express.Router()
deleteItemRouter.post('/item/delete',authentication,deleteFunction)
 module.exports=deleteItemRouter
const express=require('express')
const displayFunction=require('../../controller/items/display_items')
const  displayItemRouter=express.Router()
displayItemRouter.get('/item',displayFunction)
 module.exports=displayItemRouter
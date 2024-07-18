const express=require('express')
const loginRouter=require('./routes/auth/login')
const registerRouter=require('./routes/auth/register')
const CreateItemRouter=require('./routes/items/create_item')
const deleteItemRouter=require('./routes/items/delete_item')
const displayItemRouter=require('./routes/items/display_item')
const updateItemRouter=require('./routes/items/update_item')

const app=express();
app.use(express.json());

require('dotenv').config()
app.use(loginRouter)
app.use(registerRouter)
app.use(CreateItemRouter)
app.use(deleteItemRouter)
app.use(displayItemRouter)
app.use(updateItemRouter)

// const dotenv=require('dotenv').config()
 // remove this after you've confirmed it is working
console.log( process.env.SECRET_KEY)
app.listen(2003,()=> console.log("listen"))
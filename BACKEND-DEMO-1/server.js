//create http server
 //import express module
 import exp from 'express'
 import {userApp} from './APIS/userapi.js'
 import {productApp} from './APIS/productapi.js'

 //create server
 const app = exp()//creates http server

 //Assign port number
 app.listen(3000,()=>{'HTTP server listening on port 3000'})

 //body parsing middleware
 app.use(exp.json())

 //forward req
app.use('/user-api',userApp)
app.use('/products-api',productApp)

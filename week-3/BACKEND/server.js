import exp from 'express'
import userApp from './APIs/userapi.js'
import productApp from './APIs/productApi.js'
import {connect} from 'mongoose'
const app = exp()
const port = 4000

//connect to mongodb server
async function connection(){
   try{
    await connect('mongodb://localhost:27017/anuragdb')
    console.log("Connection successfull")

   app.listen(port,()=>{
    console.log("Serevr is listening on port 3000...")
})
   }
   catch(obj){
    console.log('error in connection',obj)
   }

}
connection()

app.use(exp.json())

app.use('/users-api',userApp)

app.use('/products-api',productApp)


 
app.use(errorHandler)
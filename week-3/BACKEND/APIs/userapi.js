import exp from 'express'
import { userModel } from '../models/usermodel.js'

const userApp = exp.Router()



// get users
userApp.get('/users', async (req, res) => {
  const userslist = await userModel.find()
  res.status(200).json({
    message: "users data",
    payload: userslist
  })
})

// create user
userApp.post('/users', async (req, res) => {
  
    let newUser = req.body

    const newDocUser = new userModel(newUser);
    await newDocUser.save();

    res.status(200).json({
      message: "new user created",
      payload: newDocUser
    });
})
//read user by objectid
userApp.get("/users/:id", async(req, res) => {
    //get objectid from req
    let objectid=req.params.id //params for objectid
    //get user from DB
    let user=await userModel.findById(objectid) //find by id
    res.status(200).json({
        message:"user fetched successfully",
        data:user
    })
})
//update user
userApp.put('/users/:id', async(req, res) => {
   //get objectid from uri params
   let objectid=req.params.id
   //get modified user from req
   let modifiedUser=req.body
   //update user in DB
   let updatedUser=await userModel.updateOne({
       _id:objectid
   },modifiedUser)
   //send response to client
   res.status(200).json({
       message:"user updated successfully",
       data:updatedUser
   })
})

userApp.delete('/users/:id',async(req,res)=>{
    let deleteId = req.params.id
    let deleteUser = await userModel.findByIdAndDelete(deleteId)

    res.status(200).json({message:"user deleted",payload:deleteUser})
})

 

export default userApp

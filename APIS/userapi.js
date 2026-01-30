import exp from 'express';
//creating mini ecpresss application(seperate route)
export const userApp = exp.Router()

let users = [];

 //GET req handling route
userApp.get('/users', (req, res) => { 
  res.status(200).json({message: "all users",payload: users});
});


//POST req handling route
userApp.post('/users', (req, res) => {
  let newUser = req.body;
  users.push(newUser);

  res.status(201).json({ newUSer:newUser}); 
});

 //PUT req handling route
 userApp.put('/users',(req,res)=>{

    //get modified user from req
    let updateUser = req.body

    //find the user exist in array
    let userind = users.findIndex((userObj)=>userObj.id===updateUser.id)

    //if user not found,send res as "user not found"
    if(userind===-1)
    {
      res.status(404).json({message:"Users not found"})
    }
    //if user found, then modify the user
    else{
      //send res as user modified
      res.status(200).json({message:"user modified"})
      let deletedUser = users.splice(userind,1,updateUser)
    }
 })

 //DELETE req handling route using id
 userApp.delete('/users/:id',(req,res)=>{
     let id = Number(req.params.id)

    let userid = users.find((userObj)=>userObj.id===id)

    if(!userid)
    {
      res.status(404).json({message:"Users not found"})
    }
    else{
      
      let deletedUser = users.splice(users.indexOf(userid),1)
      res.status(200).json({message:"user deleted",payload:deletedUser})
    }
 })

 //GET req handling using id
userApp.get('/users/:id',(req,res)=>{
  
  let id = Number(req.params.id)

  let user1 = users.find((userObj)=>userObj.id===id)

  if(!user1){
    return res.status(404).json({message:"User not found"})
  }
  res.status(200).json({message:"user found",payload:user1})
 })
 
 

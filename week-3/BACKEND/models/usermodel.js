import {Schema,model} from 'mongoose'
//create user schema (username password, age)
const userSchema =new Schema({
   userName:{
    type:String,
    required:[true,"Username is required"],
    minlength:[6,"Username must be at least 6 characters long"],
    maxlength:[20,"Username must be at most 20 characters long"]
},
   password:{type:String,
    required:[true,"Password is required"],
    minlength:[6,"Password must be at least 6 characters long"],
    maxlength:[20,"Password must be at most 20 characters long"]},
   age:{
    type:Number,
    required:[true,"Age is required"],
    min:[18,"Age must be at least 18"],
    max:[25,"Age must be at most 25"]
}
},{
    strict:'throw',//it will throw an error if any extra field is added
    timestamps:true//it will add createdAt and updatedAt fields automatically
})

 
//create user model schema
 export const userModel=model("user",userSchema)

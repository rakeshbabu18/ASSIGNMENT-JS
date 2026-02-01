import {Schema,model} from 'mongoose'
//create users schema
const userSchema = new Schema({
    userName:{type:String,required:[true,"username is required"],
    minlength:[3,"USer name must be greater than 6"],
    maxlength:[20,"uswr nam eshould not be grater than 20"]
    },
    password:{type:String,required:[true,"password is required"],
    minlength:[7,"password must be greater than 6"],
    maxlength:[20,"password eshould not be grater than 20"]
    },
    age:{type:Number, 
    min:[10,"Age must be greater than 10"],
    max:[60,"uswr nam eshould not be grater than 60"]
    }
})

 
//create user model schema
 export const userModel=model("user",userSchema)

import {Schema,model} from 'mongoose'

const productSchema = new Schema({
    productName:{type:String,required:[true,"Invalid product"]},
    productPrice:{type:Number,required:[true,"Invalid product"]},
    brand:{type:String}

},{ strict:'throw',timestamps:true})

export const productModel = model("products",productSchema)
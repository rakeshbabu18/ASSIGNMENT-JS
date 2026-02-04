import exp from 'express'
import { productModel } from '../models/productModel.js'

const productApp = exp.Router()


//DET route for fetching product details
productApp.get('/products',async(req,res)=>{
    let productList = await productModel.find()

    res.status(200).json({message:"products",payload:productList})
})

//POST route to creating new product
productApp.post('/products',async(req,res)=>{
    let newProduct = req.body
    const newProductList = new productModel(newProduct)//creating new product schema
    await newProductList.save()

    res.status(200).json({message:"new product entered",payload:newProductList})
})


//GET route for fetching the product details by ID
productApp.get('/products/:id',async(req,res)=>{
    let objectId = req.params.id

    let product = await productModel.findById(objectId)//Using findById() method for finding the product by its id

    res.status(200).json({message:"product found",payload:product})

})

//PUT route for updating the product list
productApp.put('/products/:id',async(req,res)=>{
    let objectId = req.params.id

    let modifiedProduct = req.body

    let product = await productModel.findByIdAndUpdate(objectId,
        {$set:{...modifiedProduct}},
        {new:true,runValidators:true}//runValidators will validate the values automatically
    )
     
    //send res to client
    res.status(201).json({message:"product modified",payload:modifiedProduct})
})

export default productApp
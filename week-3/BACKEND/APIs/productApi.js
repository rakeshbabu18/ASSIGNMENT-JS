import exp from 'express'
import { productModel } from '../models/productModel.js'

const productApp = exp.Router()

productApp.get('/products',async(req,res)=>{
    let productList = await productModel.find()

    res.status(200).json({message:"products",payload:productList})
})

productApp.post('/products',async(req,res)=>{
    let newProduct = req.body
    const newProductList = new productModel(newProduct)
    await newProductList.save()

    res.status(200).json({message:"new product entered",payload:newProductList})
})

productApp.get('/products/:id',async(req,res)=>{
    let objectId = req.params.id

    let product = await productModel.findById(objectId)

    res.status(200).json({message:"product found",payload:product})

})


productApp.put('/products/:id',async(req,res)=>{
    let objectId = req.params.id

    let modifiedProduct = req.body

    let product = await productModel.updateOne({_id:objectId, },modifiedProduct)

    res.status(201).json({message:"product modified",payload:modifiedProduct})
})

export default productApp
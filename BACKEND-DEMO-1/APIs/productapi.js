import exp from 'express'

//create min -express(separate route) APP
export const productApp = exp.Router()

let products = []

 //GET http://localhost:3000/products
 productApp.get('/products',(req,res)=>{
  res.status(200).json({message: "all products",payload: products});
 })

 // POST http://localhost:3000/products
 productApp.post('/products',(req,res)=>{
  let newProduct = req.body
  products.push(newProduct)

  res.status(200).json({newProduct:newProduct})
 })

 // GET http://localhost:3000/products/<id>
  productApp.get('/products-id/:id',(req,res)=>{
    let id = Number(req.params.id)
    console.log(req.params.id)
  
    let product1 = products.find((userObj)=>userObj.id===id)
  if(!product1){
    return res.status(404).json({message:"Product not found"})
  }
  res.status(200).json({message:"Product found",payload:product1})
 })

 // GET http://localhost:3000/products/<brand>
 productApp.get('/products-brand/:brand',(req,res)=>{
    let brand = req.params.brand
    console.log(req.params.brand)
  
    let product1 = products.find((userObj)=>userObj.brand===brand)
  if(!product1){
    return res.status(404).json({message:"Product not found"})
  }
  res.status(200).json({message:"Product found",payload:product1})
 })

 //PUT http://localhost:3000/products/<id>
 productApp.put('/products/:id',(req,res)=>{
  let modifiedProduct = req.body
  let modifiedIndex = products.findIndex((userObj)=>userObj.id===modifiedProduct.id)

  if(modifiedIndex!=-1)
  {
    products[modifiedIndex] = modifiedProduct
    res.status(200).json({message:"product modified"})
  }
  else{
    res.status(404).json({message:"Product not found"})
  }
 })

 //DELETE http://localhost:3000/products/<id>
 productApp.delete('/products/:id',(req,res)=>{
  let id = Number(req.params.id)

  let delProduct = products.findIndex((userObj)=>userObj.id===id)

  if(delProduct===-1){
    
    return res.status(404).json({message:"Product not found"})
    
  }
  
    let deletedProduct = products.splice(delProduct,1)
    res.status(200).json({message:"Product deleted",payload:deletedProduct})
  

 })
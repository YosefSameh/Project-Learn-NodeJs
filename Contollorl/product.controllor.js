
// let {products} = require("../data/product")
let product = require("../models/product.model")
const { body,validationResult} = require('express-validator')


let GetProducts = async (req,res)=>{
    let  querys = req.query
    let limit = querys.limit
    let pages = querys.page
    let skip = (pages-1) * limit    

    let products = await product.find({},{"__v":0}).limit(limit).skip(skip)
    
    res.json({status :"success",data:products})
}

let GetProduct = async (req,res)=>{
    
     try{
        const productId =await  product.findById(req.params.productId)
    if (!productId) {
        return res.status(404).json({status :"fail",data:"Can Not Get This Id"})
}
 return res.json({status :"success",data:productId})
     }
     catch(error){
        return res.status(404).json({status :"error",message:error.message})    
     }
}


let AddProduct = async (req , res) => {
    
    // let  resulta = validationResult(req)
    // if (!resulta.isEmpty()) {
    //     return res.json(resulta.array())
    // }
        const newItem = new product(req.body)
        await newItem.save()
         res.status(201).json({status :"success",data:newItem})
    }


let EditeProduct = async (req,res)=>{
    let idProduct = req.params.productId

    let EditProduct = await product.updateOne({_id:idProduct},{$set:{...req.body}})

    res.json({status :"success",data:EditProduct})
}

let DeleteProduct =  async(req,res)=>{
    let idProduct = req.params.productId

    let productDelete = await product.deleteOne({_id:idProduct})
    
    res.json({status :"success",data:productDelete})
}


module.exports = {
    GetProducts,
    GetProduct,
    AddProduct,
    EditeProduct,
    DeleteProduct
}
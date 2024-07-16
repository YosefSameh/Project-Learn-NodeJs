const express = require("express")

const ProductControllor = require("../Contollorl/product.controllor")

const {body, validationResult} = require('express-validator')
const allowTo = require("../middleware/allowTo")
const check = require("../middleware/checktoken")

const route =express.Router() 

route.use(express.json())
   

    
route.route("/")
.get(ProductControllor.GetProducts)
.post(body("title").notEmpty() , ProductControllor.AddProduct)



route.route("/:productId")
.get(ProductControllor.GetProduct)
    
.patch(ProductControllor.EditeProduct)
    
.delete(check,allowTo("ADMIN","MANAGER"),ProductControllor.DeleteProduct)

module.exports = route
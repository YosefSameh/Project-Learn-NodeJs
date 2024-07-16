const mongoose = require("mongoose")

const productModel = mongoose.Schema({
    titel:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require: true
    }
})

module.exports = mongoose.model("Item",productModel)
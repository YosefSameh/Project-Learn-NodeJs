const mongoose = require("mongoose")
    const validator = require("validatorjs")

const UserModel = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate: {
            validator: function(v) {
                const validation = new validator({ email: v }, { email: 'required|email' });
                return validation.passes();
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password:{
        type:String,
        required:true,
        
    },
    token:{
        type:String,
        required:true,
        
    },
    role:{
        type:String,
        enum:["UASER","ADMIN","MANAGER"],
        default:"UASER"
        
    }
})


module.exports  = mongoose.model("user",UserModel)
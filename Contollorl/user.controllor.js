
let users = require("../models/user.model")
let bcrypt = require("bcryptjs")
let jwt = require("jsonwebtoken")
const JWTSECREYT = "1578264928492545512iiiinge"
const GetAllUser =async (req,res)=>{
    let  querys = req.query
    let limit = querys.limit
    let pages = querys.page
    let skip = (pages-1) * limit    

    let User = await users.find({},{"__v":0,"password":0}).limit(limit).skip(skip)
    
    res.json({status :"success",data:User})
}

const Rigster = async (req , res) => {

    const {firstName,lastName,email,password,role} = req.body

    
        
        const hashPassword =  await bcrypt.hash(password,10)
    
            const newUser = new users({
                firstName,
                lastName,
                email,
                password:hashPassword,
                role
            })
            const token = await jwt.sign({email:newUser.email,id:newUser._id,role:newUser.role},JWTSECREYT)
            newUser.token = token
            await newUser.save()
            res.status(201).json({status :"success",data:newUser})
    


    
    }
const Login = async(req,res,next)=>{
    const {email,password} = req.body
    
    if (!email && !password ) {
         return res.status(404).json({status :"fail",data:"Email And Password Are Required"})
    }
    const user = await users.findOne({email:email})

    if(!user){
        return res.status(404).json({status :"fail",data:"User Not Found"})
    }

    const unhashingPassword = await bcrypt.compare(password,user.password)
    if (user && unhashingPassword) {
        const token = await jwt.sign({email:user.email,id:user._id,role:user.role},JWTSECREYT)
        res.status(201).json({status :"success",data:{token:token}})
    }else{
        return res.status(404).json({status :"fail",data:"Somthing Error"})
    }
}


module.exports = {
    GetAllUser,
    Rigster,
    Login
}
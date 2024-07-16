let jwt = require("jsonwebtoken")
const { Model } = require("mongoose")
const JWTSECREYT = "1578264928492545512iiiinge"

const check = (req,res,next)=>{
    const AuthHeaders = req.headers["Authorization"] || req.headers["authorization"]
    if(!AuthHeaders){
        return res.status(401).json({status :"fail",data:"Token Is Requaire"})
    }
    const token = AuthHeaders.split(" ")[1]
    try{
        // فك تشفيره ال toknen
        const unHashingToken = jwt.verify(token,JWTSECREYT)
        req.unHashingToken = unHashingToken
        next()
    }catch(error){
        return res.status(401).json({status :"fail",data:"Invalid Token"})
    }


}
module.exports = check
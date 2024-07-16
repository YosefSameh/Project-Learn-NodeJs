module.exports = (...role)=>{
    console.log(role);
    
        return (req,res,next) => {
            if(!role.includes(req.unHashingToken.role)){
                return next(res.status(404).json({status :"fail",data:"This Role Is Not Accthecz"}))
            }
            next()
    }
}
const express = require("express")

const UserControllor = require("../Contollorl/user.controllor")
const check = require("../middleware/checktoken")

const route =express.Router() 

route.use(express.json())



route.route("/")
.get(check,UserControllor.GetAllUser)

route.route("/rigster")
.post(UserControllor.Rigster)

route.route("/login")
.post(UserControllor.Login)




module.exports = route
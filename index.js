//  ال sybc بيكون blockCode يعني مش هيعمل حاجه غير لما يخلص الي قبلها الاول 

const express = require("express")

const mongoose = require('mongoose');
const cors = require('cors');
const   url = 'mongodb+srv://yosefsameh368:test-node-js@cluster0.a0eu8ft.mongodb.net/Products?retryWrites=true&w=majority&appName=Cluster0'
const app = express()
app.use(cors())

mongoose.connect(url)
  .then(() => {
    console.log('Database connected!')

  })
  .catch((error) => console.error('Connection error', error));
    
  

  app.listen("3000",()=>{
      console.log("listen is goods");
    })
    
    
    const productRoutes = require("./Routes/product.route")
    app.use("/api/products",productRoutes)

    const userRoutes = require("./Routes/user.route")
            app.use("/api/users",userRoutes)





  
  
  




// const { MongoClient } = require('mongodb');

// const url = 'mongodb+srv://yosefsameh368:test-node-js@cluster0.a0eu8ft.mongodb.net/Products?retryWrites=true&w=majority';
// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect()
//   .then(() => {
//     console.log('Database connected!');
//     const db = client.db('Products');
    
// })
//   .catch((error) => console.error('Connection error', error));











        
        // const fs = require("node:fs")
        
        // fs.writeFile("./Products.json",JSON.stringify([{id:1,title:"BMW"},{id:3,title:"BMW"},{id:2,title:"BMW"},]),(Error)=>{
        //     console.log(Error);
            
        // })
        
        
        // fs.unlink("./Products.json",(eer)=>{
        //     console.log(eer);
        // })
        
        
        
        
        //         {
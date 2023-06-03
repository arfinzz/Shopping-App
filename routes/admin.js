const express=require("express");

const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send(`<form action="/admin/add-product" method="POST"><input type="text" placeholder="Product Name" name="product"></input><input type="number" placeholder="Size" name="size"></input><button type="submit">Submit</button></form>`);
    
});

router.post('/add-product',(req,res,next)=>{
   
    console.log(req.body);
    
});


module.exports=router;
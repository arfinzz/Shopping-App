const express=require("express");
const path=require("path");

const rootDir=require("../util/path.js");

const router=express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","shop.html"));
    
});

router.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","contact.html"));
    
});

router.post('/success',(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","success.html"));
    
});



module.exports=router;
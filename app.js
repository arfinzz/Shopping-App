const express=require('express');
const bodyParser=require('body-parser');
const path=require("path");

const rootDir=require("./util/path.js");

const adminRoutes=require("./routes/admin");
const shopRoutes=require("./routes/shop");

const app=express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(rootDir,'public')));

app.use('/admin',adminRoutes);

app.use('/shop',shopRoutes);


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})




app.listen(3000);
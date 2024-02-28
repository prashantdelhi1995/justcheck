
const express=require("express");
const bodyParser= require("body-parser")
const app=express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/add-product",(req,res,next)=>{
    // res.send("<h2>hii this is express js project </h2>")
    res.send("<form action='/message' method='post'><input type='text'name='product1'><input type='text'name='product2'><button type='submit'>add product</button></form>")
    console.log(req.body)
    res.redirect("/")
    
 
 })
 app.post("/message",(req,res,next)=>{
    // res.send("<h2>hii this is express js project </h2>")
    console.log(req.body)
    
 
 })

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

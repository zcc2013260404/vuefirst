const express = require("express")
const router = express.Router()
const shopsModel = require("../data/home1model")
const classfyModel=require("../data/classifymodel")
const classfy=require("../data/classify")

//允许跨域设置

router.all("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","PUT,GET,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","X-Requested-With");
    res.header("Access-Control-Allow-Headers","Content-Type");
    if(req.method=="OPTIONS")  res.send(200); /*让option请求快速返回*/
    else next();
})

router.get("/",(req,res)=>{
	res.json(shopsModel.getdata())
	//{orders:orderarr}  绑定到order.ejs模板上
})
router.get("/classify",(req,res)=>{
    res.json(classfyModel.getdata())
    //{orders:orderarr}  绑定到order.ejs模板上
})
router.get("/class",(req,res)=>{
    res.json(classfy.getdata())
    //{orders:orderarr}  绑定到order.ejs模板上
})
module.exports = router;

var express = require("express");
var exe = require("./connection");
var router = express.Router();

 router.get("/",function(req,res){
    res.render("user/home.ejs")
 })
 
router.get("/blog",function(req,res){
   res.render("user/blog.ejs")
})

router.get("/blogdetails",function(req,res){
   res.render("user/blogdetails.ejs")
})

// services
router.get("/support_services",function(req,res){
   res.render("user/support_services.ejs")
})

router.get("/services",function(req,res){
   res.render("user/services.ejs")
})

// about page 
 router.get("/about",function(req,res){
    res.render("user/about.ejs")
 })
router.get("/infrastructure",function(req,res){
   res.render("user/infrastructure.ejs")
})
router.get("/vision-mission",function(req,res){
   res.render("user/vision-mission.ejs")
})

router.get("/company-history",function(req,res){
   res.render("user/company-history.ejs")
})
router.get("/founder",function(req,res){
   res.render("user/founder.ejs")
})

// product page route
 router.get("/products",function(req,res){
    res.render("user/products.ejs")
 })

 router.get("/product_1",function(req,res){
    res.render("user/product_1.ejs")
 })

 

//  Gallery

router.get("/Videos",function(req,res){
    res.render("user/videos.ejs")
 })
router.get("/Images",function(req,res){
    res.render("user/images.ejs")
 })
 router.get("/event_albums",function(req,res){
    res.render("user/event_albums.ejs")
 })

// 
 router.get("/career",function(req,res){
    res.render("user/career.ejs")
 })


//  contact
router.get("/contact",(req,res)=>{
    res.render("user/contact.ejs");
});

 module.exports = router;

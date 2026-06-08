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


router.get("/services",function(req,res){
   res.render("user/services.ejs")
})





// product page route
 router.get("/products",function(req,res){
    res.render("user/products.ejs")
 })

 router.get("/product_1",function(req,res){
    res.render("user/product_1.ejs")
 })

 router.get("/product_2",function(req,res){
    res.render("user/product_2.ejs")
 })

 router.get("/product_3",function(req,res){
    res.render("user/product_3.ejs")
 })

 router.get("/product_4",function(req,res){
    res.render("user/product_4.ejs")
 })

 router.get("/product_5",function(req,res){
    res.render("user/product_5.ejs")
 })

 router.get("/product_6",function(req,res){
    res.render("user/product_6.ejs")
 })

 router.get("/product_7",function(req,res){
    res.render("user/product_7.ejs")
 })

 router.get("/product_8",function(req,res){
    res.render("user/product_8.ejs")
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

var express = require("express");
var exe = require("./connection");
const fs = require("fs");
const path = require("path");

var router = express.Router();

/* Home */

router.get("/", async function(req, res) {

    try {

        let slider = await exe(
            "SELECT * FROM slider ORDER BY id ASC"
        );

        let plants = await exe(
            "SELECT * FROM manufacturing_plants ORDER BY id DESC"
        );

        let processCards = await exe(
            "SELECT * FROM process_cards ORDER BY id ASC"
        );

        let testimonials = await exe(
            "SELECT * FROM testimonials ORDER BY id DESC"
        );

        res.render("user/home.ejs", {
            slider,
            plants,
            processCards,
            testimonials
        });

    } catch (err) {

        console.log(err);
        res.send("Error Loading Data");

    }

});

/* Blog */

// Blog
router.get("/blog", function(req,res){

    let blogs = JSON.parse(
        fs.readFileSync("./data/blogs.json","utf8")
    );

    res.render("user/blog.ejs",{
        blogs: blogs
    });

});

router.get("/blogdetails", function(req,res){

    let blogs = JSON.parse(
        fs.readFileSync("./data/blogs.json","utf8")
    );


    let blog = blogs.find(function(item){

        return item.id == req.query.id;

    });


    res.render("user/blogdetails.ejs",{

        blog: blog

    });

});

/* Services */

router.get("/support_services", function(req,res){
res.render("user/support_services.ejs");
});


router.post("/support-inquiry", async (req, res) => {

    try {

        let { name, phone, email, message } = req.body;

        await exe(`
            INSERT INTO support_inquiry
            (
                name,
                phone,
                email,
                message
            )
            VALUES
            (
                '${name}',
                '${phone}',
                '${email}',
                '${message}'
            )
        `);

        res.redirect("/contact");

    } catch(err){

        console.log(err);
        res.send("Error");

    }

});

router.get("/services", function(req,res){
res.render("user/services.ejs");
});

router.get("/customer_services", function(req,res){
res.render("user/customer_services.ejs");
});

router.get("/business-s", function(req,res){
res.render("user/business-s.ejs");
});

/* About */

// about page 
router.get("/about", async function(req,res){

    var about_company = await exe(
        "SELECT * FROM about_company LIMIT 1"
    );

    var plants = await exe(
        "SELECT * FROM manufacturing_plants ORDER BY id DESC"
    );

  var infrastructure = await exe(
    "SELECT * FROM industrial_infrastructure ORDER BY id DESC"
);

   var testimonials = await exe(
        "SELECT * FROM testimonials ORDER BY id DESC"
    );


var obj = {
    about_company : about_company[0],
    plants : plants,
    infrastructure : infrastructure,
      testimonials: testimonials
};




    res.render("user/about.ejs", obj);

});


router.get("/infrastructure",function(req,res){
   res.render("user/infrastructure.ejs")
})
router.get("/vision-mission",async function(req,res){
   var vision = await exe(
    "SELECT * FROM vision_mission ORDER BY id ASC"
);
   var future_goals = await exe(
        "SELECT * FROM future_goals ORDER BY id ASC"
    );

var obj = {
   
    vision : vision,
      future_goals: future_goals
};
   res.render("user/vision-mission.ejs",obj);
})

router.get("/company-history", async function(req,res){

    var history = await exe(
        "SELECT * FROM company_history LIMIT 1"
    );

    res.render("user/company-history.ejs",{
        history : history[0]
    });

});


router.get("/founder",async function(req,res){
 
    var management_team = await exe(
        "SELECT * FROM management_team ORDER BY id ASC"
    );

    res.render("user/founder.ejs",{
        management_team
    });


})

/* Plants */

router.get("/plants", function(req,res){
res.render("user/plants.ejs");
});

/* Products List */

router.get("/products", async function(req,res){
try{

        let products = await exe(
            "SELECT * FROM products ORDER BY id DESC"
        );

        let rawmaterials = await exe(
            "SELECT * FROM raw_materials ORDER BY id DESC"
        );

        res.render("user/products.ejs",{
            products: products,
            rawmaterials: rawmaterials
        });

    }
    catch(err){

        console.log(err);
        res.send("Database Error");

    }

});

/* Product Details */

router.get("/product/:id", async function(req,res){


try{

    let id = req.params.id;

    let product = await exe(
        `SELECT * FROM products WHERE id='${id}'`
    );

    if(product.length == 0){
        return res.send("Product Not Found");
    }

    res.render("user/product_1.ejs",{
        product: product[0]
    });

}
catch(err){

    console.log(err);
    res.send("Database Error");

}

});





/* Gallery */

// Videos
// Videos from database
router.get("/videos", async function(req, res){

    var sql = "SELECT * FROM videos";

    var result = await exe(sql);

    console.log(result);

    res.render("user/videos.ejs", {
        videos: result
    });

});


// Gallery Images from database
router.get("/images", async function(req, res){

    var sql = "SELECT * FROM gallery";

    var result = await exe(sql);

    res.render("user/images.ejs", {
        gallery: result
    });

});


// Event Albums from database
router.get("/event_albums", async function(req, res){

    var sql = "SELECT * FROM events";

    var result = await exe(sql);

    console.log(result);

    res.render("user/event_albums.ejs", {
        events: result
    });

});

/* Career */

// =========================
// Career Page
// =========================
router.get("/career", async (req, res) => {

    try {

        let whyJoinResult = await exe(
            "SELECT * FROM why_join LIMIT 1"
        );

        let hrContactResult = await exe(
            "SELECT * FROM hr_contact ORDER BY id DESC LIMIT 1"
        );

        let careers = await exe(
            "SELECT * FROM careers"
        );

        let culture = await exe(
            "SELECT * FROM culture"
        );

        res.render("user/career", {

            careers,
            culture,

            whyJoin: whyJoinResult[0] || {},
            hrContact: hrContactResult[0] || {},

            trackingId: req.query.success || "",
            application: null

        });

    } catch (err) {

        console.log(err);
        res.send("Error Loading Career Page");

    }

});

router.get("/track-application", async (req, res) => {

    try {

        let whyJoinResult = await exe(
            "SELECT * FROM why_join LIMIT 1"
        );

        let hrContactResult = await exe(
            "SELECT * FROM hr_contact ORDER BY id DESC LIMIT 1"
        );

        let careers = await exe(
            "SELECT * FROM careers"
        );

        let culture = await exe(
            "SELECT * FROM culture"
        );

        let result = await exe(`
            SELECT *
            FROM job_applications
            WHERE application_id='${req.query.application_id}'
        `);

        res.render("user/career", {

            careers,
            culture,

            whyJoin: whyJoinResult[0] || {},
            hrContact: hrContactResult[0] || {},

            trackingId: "",
            application: result[0] || null

        });

    } catch (err) {

        console.log(err);
        res.send("Tracking Error");

    }

});
// =========================
// Save Career Application
// =========================

router.post("/save-application", async (req, res) => {

    try {

        if (!req.files || !req.files.resume) {
            return res.send("Please Select Resume");
        }

        let resume = req.files.resume; 

        let resumeName = Date.now() + "_" + resume.name;

        await resume.mv("public/resume/" + resumeName);

        let applicationId = "VWF" + Date.now();
        let currentTime = new Date().toLocaleString("sv-SE", {
          timeZone: "Asia/Kolkata"
          });

       await exe(`
    INSERT INTO job_applications
    (
        application_id,
        name,
        email,
        mobile,
        position,
        resume,
        status,
        created_at
    )
    VALUES
    (
        '${applicationId}',
        '${req.body.name}',
        '${req.body.email}',
        '${req.body.mobile}',
        '${req.body.position}',
        '${resumeName}',
        'Applied',
        '${currentTime}'
    )
`);

        res.redirect("/career?success=" + applicationId);

    } catch (err) {

        console.log(err);
        res.send("Application Submit Error");

    }

});

/* =========================
   Contact Page
========================= */

router.get("/contact", async (req, res) => {

    try {

        let officeResult = await exe(
            "SELECT * FROM office_locations WHERE id='1'"
        );

        let contactResult = await exe(
            "SELECT * FROM contact_info WHERE id='1'"
        );

        res.render("user/contact", {
            office: officeResult[0] || {},
            contact: contactResult[0] || {}
        });

    } catch (err) {

        console.log(err);
        res.send("Error Loading Contact Page");

    }

});


/* =========================
   Contact Form Submit
========================= */

router.post("/contact-submit", async (req, res) => {

    try {

        await exe(`
            INSERT INTO contact_messages
            (
                name,
                email,
                phone,
                subject,
                message
            )
            VALUES
            (
                '${req.body.name}',
                '${req.body.email}',
                '${req.body.phone}',
                '${req.body.subject}',
                '${req.body.message}'
            )
        `);

        res.redirect("/contact");

    } catch (err) {

        console.log(err);
        res.send("Contact Form Error");

    }

});


/* =========================
   Callback Request
========================= */

router.post("/save-callback", async (req, res) => {

    try {

        await exe(`
            INSERT INTO callbacks
            (
                name,
                mobile,
                preferred_time
            )
            VALUES
            (
                '${req.body.name}',
                '${req.body.mobile}',
                '${req.body.time}'
            )
        `);

        res.redirect("/contact");

    } catch (err) {

        console.log(err);
        res.send("Callback Save Error");

    }

});


/* =========================
   Product Inquiry
========================= */

router.post("/save-inquiry", async (req, res) => {

    try {

        const currentTime = new Date().toLocaleString("sv-SE", {
            timeZone: "Asia/Kolkata"
        });

        await exe(`
            INSERT INTO inquiries
            (
                product_name,
                name,
                email,
                mobile,
                message,
                created_at
            )
            VALUES
            (
                '${req.body.product_name}',
                '${req.body.name}',
                '${req.body.email}',
                '${req.body.mobile}',
                '${req.body.message}',
                '${currentTime}'
            )
        `);

        res.redirect(req.headers.referer);

    } catch (err) {

        console.log(err);
        res.send("Inquiry Save Error");

    }

});


/* =========================
   Dealer Inquiry
========================= */

router.post("/dealer-inquiry", async (req, res) => {

    try {

        const currentTime = new Date().toLocaleString("sv-SE", {
            timeZone: "Asia/Kolkata"
        });

        await exe(`
            INSERT INTO dealer_requests
            (
                dealer_name,
                city,
                mobile,
                created_at
            )
            VALUES
            (
                '${req.body.dealer_name}',
                '${req.body.city}',
                '${req.body.mobile}',
                '${currentTime}'
            )
        `);

        res.redirect("/contact");

    } catch (err) {

        console.log(err);
        res.send("Dealer Inquiry Error");

    }

});


// client login
router.get("/client-login", (req, res) => {
    res.render("user/client-login");
});

router.post("/client-login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const sql =
        "INSERT INTO client_login (email, password) VALUES (?, ?)";

        await exe(sql, [email, password]);

        console.log("Data Saved Successfully");

        res.redirect("/career");

    } catch (err) {

        console.log(err);
        res.send("Database Error");

    }

});

module.exports = router;

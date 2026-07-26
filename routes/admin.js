var express = require("express");
var exe = require("./connection");
var path = require("path");
const PDFDocument = require("pdfkit");
const { Parser } = require("json2csv");
var fs = require("fs");
const { append } = require("vary");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});




var router = express.Router();

router.get("/", async function(req,res){

    res.render("admin/admin_register",{
        error:null
    });

});



router.post("/admin-login", async (req, res) => {

    try {

        const data = await exe(
            `SELECT * FROM admin_login WHERE email=? AND password=?`,
            [req.body.email, req.body.password]
        );

        if (data.length > 0) {

            req.session.admin = true;
            res.redirect("/admin/index");

        } else {

            res.render("admin/admin_register", {
                error: "Invalid Email or Password"
            });

        }

    } catch (err) {

        console.log(err);
        res.render("admin/admin_register", {
            error: "Something went wrong. Please try again."
        });

    }

});

router.get("/forgot-password", (req, res) => {
    res.render("admin/forgot_password");
});

router.post("/forgot-password", async (req, res) => {

    await exe(
        `UPDATE admin_login SET password=? WHERE email=?`,
        [req.body.new_password, req.body.email]
    );

    res.redirect("/");
});



router.get("/index", async function(req, res){
     if (!req.session.admin) {
        return res.redirect("/admin");
    }

    try{

        let products = await exe("SELECT COUNT(*) AS total FROM products");
        let inquiries = await exe("SELECT COUNT(*) AS total FROM inquiries");
        let applications = await exe("SELECT COUNT(*) AS total FROM job_applications");
        let testimonials = await exe("SELECT COUNT(*) AS total FROM testimonials");
        let gallery = await exe("SELECT COUNT(*) AS total FROM gallery");
        let videos = await exe("SELECT COUNT(*) AS total FROM videos");
        let contacts = await exe("SELECT COUNT(*) AS total FROM contact_messages");
        let dealers = await exe("SELECT COUNT(*) AS total FROM dealer_requests");

        let recentApplications = await exe(
            "SELECT * FROM job_applications ORDER BY id DESC LIMIT 5"
        );

        let monthlyApplications = await exe(`
            SELECT
            MONTH(created_at) as month,
            COUNT(*) as total
            FROM job_applications
            GROUP BY MONTH(created_at)
            ORDER BY MONTH(created_at)
        `);

        let monthlyInquiries = await exe(`
            SELECT
            MONTH(created_at) as month,
            COUNT(*) as total
            FROM inquiries
            GROUP BY MONTH(created_at)
            ORDER BY MONTH(created_at)
        `);

        res.render("admin/index.ejs",{

            totalProducts : products[0].total,
            totalInquiries : inquiries[0].total,
            totalApplications : applications[0].total,
            totalTestimonials : testimonials[0].total,
            totalGallery : gallery[0].total,
            totalVideos : videos[0].total,
            totalContacts : contacts[0].total,
            totalDealers : dealers[0].total,

            recentApplications,
            monthlyApplications,
            monthlyInquiries

        });

    }
    catch(err){

        console.log(err);
        res.send("Dashboard Error");

    }

});

// reports
router.get("/reports", async function(req, res) {

    let products = await exe("SELECT COUNT(*) as total FROM products");
    let inquiries = await exe("SELECT COUNT(*) as total FROM inquiries");
    let applications = await exe("SELECT COUNT(*) as total FROM job_applications");
    let testimonials = await exe("SELECT COUNT(*) as total FROM testimonials");
    let gallery = await exe("SELECT COUNT(*) as total FROM gallery");
    let videos = await exe("SELECT COUNT(*) as total FROM videos");
    let contacts = await exe("SELECT COUNT(*) as total FROM contact_messages");
    let dealers = await exe("SELECT COUNT(*) as total FROM dealer_requests");

    let obj = {
        products: products[0].total,
        inquiries: inquiries[0].total,
        applications: applications[0].total,
        testimonials: testimonials[0].total,
        gallery: gallery[0].total,
        videos: videos[0].total,
        contacts: contacts[0].total,
        dealers: dealers[0].total
    };

    res.render("admin/reports", obj);

});

router.get("/report/products", async function(req, res) {

    let products = await exe("SELECT * FROM products ORDER BY id DESC");

    res.render("admin/product-report", {
        products
    });

});


router.get("/products-csv", async function(req, res) {

    let products = await exe(`
        SELECT
            product_name,
            short_description,
            description,
            feature1,
            feature2,
            feature3,
            feature4,
            main_image,
            created_at
        FROM products
    `);

    const fields = [
        "product_name",
        "short_description",
        "description",
        "feature1",
        "feature2",
        "feature3",
        "feature4",
        "main_image",
        "created_at"
    ];

    const json2csv = new Parser({ fields });
    const csv = json2csv.parse(products);

    res.header("Content-Type", "text/csv");
    res.attachment("products-report.csv");
    res.send(csv);
});



// inquiries


router.get("/report/inquiries", async function(req, res){

    let inquiries = await exe("SELECT * FROM inquiries ORDER BY id DESC");

    res.render("admin/inquiries-report.ejs", {
        inquiries
    });
});

router.get("/inquiries-csv", async function(req, res){

    let data = await exe("SELECT name,email,mobile,message,created_at FROM inquiries");

    const fields = ["name","email","mobile","message","created_at"];

    const json2csv = new Parser({ fields });
    const csv = json2csv.parse(data);

    res.header("Content-Type","text/csv");
    res.attachment("inquiries-report.csv");
    res.send(csv);
});

// applications



router.get("/applications-report", async (req, res) => {
    let applications = await exe(
        "SELECT * FROM job_applications ORDER BY id DESC"
    );

    res.render("admin/applications-report.ejs", { applications });
});


router.get("/applications-csv", async (req, res) => {

    try {

        let applications = await exe(
            "SELECT * FROM job_applications"
        );

        let csv = [];

        csv.push([
            "ID",
            "Name",
            "Email",
            "Mobile",
            "Position",
            "Resume",
            "Client ID",
            "Application ID",
            "Status",
            "Apply Date"
        ].join(","));

        applications.forEach(a => {

            csv.push([
                a.id,
                a.name,
                a.email,
                a.mobile,
                a.position,
                a.resume,
                a.client_id,
                a.application_id,
                a.status,
                a.apply_date
            ].join(","));

        });

        const csvData = csv.join("\n");

        res.setHeader("Content-Type", "text/csv");

        res.setHeader(
            "Content-Disposition",
            "attachment; filename=applications-report.csv"
        );

        res.status(200).send("\uFEFF" + csvData);

    } catch (err) {

        console.log(err);
        res.status(500).send("CSV generation failed");

    }

});



// testimonials

router.get("/testimonials-report", async (req, res) => {
    try {
        let testimonials = await exe(`
            SELECT * FROM testimonials ORDER BY id DESC
        `);

        res.render("admin/testimonials-report.ejs", {
            testimonials
        });

    } catch (err) {
        console.log(err);
        res.status(500).send("Error loading testimonials report");
    }
});


router.get("/testimonials-csv", async (req, res) => {
    try {
        let testimonials = await exe("SELECT * FROM testimonials");

        let csv = [];

        // HEADER
        csv.push([
            "ID",
            "Company Name",
            "City",
            "Description",
            "Image",
            "Created At"
        ].join(","));

        // DATA
        testimonials.forEach(t => {
            csv.push([
                t.id,
                t.company_name,
                t.city,
                t.description,
                t.image,
                t.created_at
            ].join(","));
        });

        let csvData = csv.join("\n");

        res.setHeader("Content-Type", "text/csv; charset=utf-8");
        res.setHeader(
            "Content-Disposition",
            "attachment; filename=testimonials-report.csv"
        );

        res.status(200).send("\uFEFF" + csvData);

    } catch (err) {
        console.log("CSV ERROR:", err);
        res.status(500).send("CSV generation failed");
    }
});


// gallery

router.get("/gallery-report", async (req, res) => {
    try {
        let gallery = await exe(`
            SELECT * FROM gallery ORDER BY id DESC
        `);

        res.render("admin/gallery-report.ejs", {
            gallery
        });

    } catch (err) {
        console.log(err);
        res.status(500).send("Error loading gallery report");
    }
});

router.get("/gallery-csv", async (req, res) => {
    try {
        let gallery = await exe("SELECT * FROM gallery");

        let csv = [];

        // HEADER
        csv.push([
            "ID",
            "Title",
            "Image",
            "Category"
        ].join(","));

        // DATA
        gallery.forEach(g => {
            csv.push([
                g.id,
                g.title,
                g.image,
                g.category
            ].join(","));
        });

        let csvData = csv.join("\n");

        res.setHeader("Content-Type", "text/csv; charset=utf-8");
        res.setHeader(
            "Content-Disposition",
            "attachment; filename=gallery-report.csv"
        );

        res.status(200).send("\uFEFF" + csvData);

    } catch (err) {
        console.log(err);
        res.status(500).send("CSV generation failed");
    }
});

// contact

router.get("/contacts-report", async (req, res) => {
    try {
        let contacts = await exe(`
            SELECT * FROM contact_messages ORDER BY id DESC
        `);

        res.render("admin/contacts-report.ejs", {
            contacts
        });

    } catch (err) {
        console.log(err);
        res.status(500).send("Error loading contacts report");
    }
});

router.get("/contacts-csv", async (req, res) => {
    try {
        let contacts = await exe("SELECT * FROM contact_messages");

        let csv = [];

        csv.push([
            "ID",
            "Name",
            "Email",
            "Phone",
            "Subject",
            "Message",
            "Created At"
        ].join(","));


        contacts.forEach(c => {
            csv.push([
                c.id,
                c.name,
                c.email,
                c.phone,
                c.subject,
                c.message,
                c.created_at
            ].join(","));
        });

        let csvData = csv.join("\n");

        res.setHeader("Content-Type", "text/csv; charset=utf-8");
        res.setHeader(
            "Content-Disposition",
            "attachment; filename=contacts-report.csv"
        );

        res.status(200).send("\uFEFF" + csvData);

    } catch (err) {
        console.log(err);
        res.status(500).send("CSV generation failed");
    }
});


    // <!-- Dealers -->

router.get("/dealers-report", async (req, res) => {
    try {

        let dealers = await exe("SELECT * FROM dealer_requests");

        res.render("admin/dealers-report.ejs", {
            dealers
        });

    } catch (err) {
        console.log("ACTUAL ERROR:", err);
        res.status(500).send(err.message);
    }
});
router.get("/dealers-csv", async (req, res) => {
    try {
        let dealers = await exe("SELECT * FROM dealer_requests");

        let csv = [];

        csv.push([
            "ID",
            "Dealer Name",
            "City",
            "Mobile",
            "Status",
            "Created At"
        ].join(","));

        dealers.forEach(d => {
            csv.push([
                d.id,
                d.dealer_name,
                d.city,
                d.mobile,
                d.status,
                d.created_at
            ].join(","));
        });

        let csvData = csv.join("\n");

        res.setHeader("Content-Type", "text/csv; charset=utf-8");
        res.setHeader(
            "Content-Disposition",
            "attachment; filename=dealers-requests-report.csv"
        );

        res.status(200).send("\uFEFF" + csvData);

    } catch (err) {
        console.log(err);
        res.status(500).send("CSV generation failed");
    }
});

/* Add Product Page */

router.get("/add-product", function (req, res) {
    res.render("admin/add_product.ejs");
});

/* Save Product */

router.post("/save-product", async function (req, res) {

    try {

        let product_name = req.body.product_name?.trim();
        let short_description = req.body.short_description?.trim();
        let description = req.body.description?.trim();

        // Validation
        if (!product_name || product_name.length < 3) {
            return res.send("Product Name must be at least 3 characters");
        }

        if (!short_description || short_description.length < 10) {
            return res.send("Short Description must be at least 10 characters");
        }

        if (!description || description.length < 20) {
            return res.send("Description must be at least 20 characters");
        }

        let imageName = "";

        if (req.files && req.files.main_image) {

            let image = req.files.main_image;

            let allowedTypes = [
                "image/jpeg",
                "image/png",
                "image/webp"
            ];

            if (!allowedTypes.includes(image.mimetype)) {
                return res.send("Only JPG, PNG and WEBP images are allowed");
            }

            if (image.size > 2 * 1024 * 1024) {
                return res.send("Image size must be less than 2 MB");
            }

            imageName = Date.now() + "_" + image.name;

            await image.mv("./public/uploads/" + imageName);
        } else {
            return res.send("Please upload product image");
        }

        let sql = `
        INSERT INTO products
        (
            product_name,
            short_description,
            description,
            feature1,
            feature2,
            feature3,
            feature4,
            main_image
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;

        await exe(sql, [
            product_name,
            short_description,
            description,
            req.body.feature1 || "",
            req.body.feature2 || "",
            req.body.feature3 || "",
            req.body.feature4 || "",
            imageName
        ]);

        res.redirect("/admin/products");

    }
    catch (err) {

        console.log(err);
        res.send("Error While Saving Product");

    }

});

/* Product List */

router.get("/products", async function (req, res) {

    let products = await exe(
        "SELECT * FROM products ORDER BY id DESC"
    );

    res.render("admin/products.ejs", {
        products
    });

});

/* Edit Product Page */

router.get("/edit-product/:id", async function (req, res) {

    let id = req.params.id;

    let product = await exe(
        `SELECT * FROM products WHERE id=?`, [id]
    );

    res.render("admin/edit_product.ejs", {
        product: product[0]
    });

});

/* Update Product */

router.post("/update-product/:id", async function (req, res) {

    try {

        let id = req.params.id;

        let product = await exe(
            `SELECT * FROM products WHERE id=?`, [id]
        );

        let imageName = product[0].main_image;

        if (req.files && req.files.main_image) {

            let image = req.files.main_image;

            imageName = Date.now() + "_" + image.name;

            await image.mv("./public/uploads/" + imageName);

            let oldImage =
                "./public/uploads/" +
                product[0].main_image;

            if (fs.existsSync(oldImage)) {
                fs.unlinkSync(oldImage);
            }
        }

        let sql = `
        UPDATE products
        SET
        product_name=?,
        short_description=?,
        description=?,
        feature1=?,
        feature2=?,
        feature3=?,
        feature4=?,
        main_image=?
        WHERE id=?
        `;

        await exe(sql, [
            req.body.product_name,
            req.body.short_description,
            req.body.description,
            req.body.feature1,
            req.body.feature2,
            req.body.feature3,
            req.body.feature4,
            imageName,
            id
        ]);

        res.redirect("/admin/products");

    } catch (err) {

        console.log(err);
        res.send("Update Failed");

    }

});

/* Delete Product */

router.get("/delete-product/:id", async function (req, res) {

    try {

        let id = req.params.id;

        let product = await exe(
            `SELECT * FROM products WHERE id=?`, [id]
        );

        if (product.length > 0) {

            let oldImage =
                "./public/uploads/" +
                product[0].main_image;

            if (fs.existsSync(oldImage)) {
                fs.unlinkSync(oldImage);
            }

            await exe(
                `DELETE FROM products WHERE id=?`, [id]
            );
        }

        res.redirect("/admin/products");

    } catch (err) {

        console.log(err);
        res.send("Delete Failed");

    }

});

/* Inquiry List */
router.get("/inquiries", async function(req, res){

    let inquiries = await exe(`
        SELECT *,
        DATE_FORMAT(
            created_at,
            '%d-%m-%Y %h:%i %p'
        ) AS indian_time
        FROM inquiries
        ORDER BY id DESC
    `);

    res.render("admin/inquiries.ejs", {
        inquiries: inquiries
    });

});
router.get("/delete-inquiry/:id", async function(req,res){

    let id = req.params.id;

    await exe(
        `DELETE FROM inquiries WHERE id=?`, [id]
    );

    res.redirect("/admin/inquiries");

});


// Row material form
router.get("/add-raw-material", async function(req,res){

    let rawmaterials = await exe(
        "SELECT * FROM raw_materials ORDER BY id DESC"
    );

    res.render("admin/addRawMaterial.ejs",{
        rawmaterials
    });

});

router.post("/save-raw-material", async function(req,res){

    try{

        let imageName = "";

        if(req.files && req.files.image){

            let image = req.files.image;

            imageName = Date.now() + "_" + image.name;

            await image.mv("./public/uploads/" + imageName);
        }

        let sql = `
        INSERT INTO raw_materials
        (
            name,
            image
        )
        VALUES (?, ?)
        `;

        await exe(sql, [req.body.name, imageName]);

        res.redirect("/admin/add-raw-material");

    }
    catch(err){

        console.log(err);
        res.send("Error While Saving Raw Material");

    }

});

// delete form

router.get("/delete-raw-material/:id", async function(req,res){

    try{

        let id = req.params.id;

        let material = await exe(
            `SELECT * FROM raw_materials WHERE id=?`, [id]
        );

        if(material.length > 0){

            let oldImage =
            "./public/uploads/" + material[0].image;

            if(fs.existsSync(oldImage)){
                fs.unlinkSync(oldImage);
            }

            await exe(
                `DELETE FROM raw_materials WHERE id=?`, [id]
            );
        }

        res.redirect("/admin/add-raw-material");

    }
    catch(err){

        console.log(err);
        res.send("Delete Failed");

    }

});

// edit raw material page
  router.get("/edit-raw-material/:id", async function(req,res){

    let id = req.params.id;

    let material = await exe(
        `SELECT * FROM raw_materials WHERE id=?`, [id]
    );

    res.render(
        "admin/editRawMaterial.ejs",
        {
            material : material[0]
        }
    );

});
// update route

router.post("/update-raw-material/:id", async function(req,res){

    try{

        let id = req.params.id;

        let material = await exe(
            `SELECT * FROM raw_materials WHERE id=?`, [id]
        );

        let imageName = material[0].image;

        if(req.files && req.files.image){

            let image = req.files.image;

            imageName =
            Date.now() + "_" + image.name;

            await image.mv(
                "./public/uploads/" + imageName
            );

            let oldImage =
            "./public/uploads/" +
            material[0].image;

            if(fs.existsSync(oldImage)){
                fs.unlinkSync(oldImage);
            }
        }

        await exe(
            `UPDATE raw_materials SET name=?, image=? WHERE id=?`,
            [req.body.name, imageName, id]
        );

        res.redirect("/admin/add-raw-material");

    }
    catch(err){

        console.log(err);
        res.send("Update Failed");

    }

});

// why join us

router.get("/add-why-join", async (req, res) => {

    let data = await exe("SELECT * FROM why_join LIMIT 1");

    res.render("admin/addWhyJoin", {
        whyJoin: data.length > 0 ? data[0] : null
    });

});

router.post("/add-why-join", async (req, res) => {

    try {

        const {
            title,
            description,
            feature1,
            feature2,
            feature3,
            feature4,
            feature5,
            feature6
        } = req.body;

        let imageName = "";

        let check = await exe("SELECT * FROM why_join LIMIT 1");

        if (req.files && req.files.image) {

            let image = req.files.image;

            imageName = Date.now() + "_" + image.name;

            await image.mv("public/uploads/" + imageName);
        }

        if (check.length == 0) {

            await exe(
                `INSERT INTO why_join
                (title, description, image, feature1, feature2, feature3, feature4, feature5, feature6)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [title, description, imageName, feature1, feature2, feature3, feature4, feature5, feature6]
            );

        } else {

            if (imageName !== "") {

                await exe(
                    `UPDATE why_join SET
                    title=?, description=?, feature1=?, feature2=?, feature3=?, feature4=?, feature5=?, feature6=?, image=?
                    WHERE id=?`,
                    [title, description, feature1, feature2, feature3, feature4, feature5, feature6, imageName, check[0].id]
                );

            } else {

                await exe(
                    `UPDATE why_join SET
                    title=?, description=?, feature1=?, feature2=?, feature3=?, feature4=?, feature5=?, feature6=?
                    WHERE id=?`,
                    [title, description, feature1, feature2, feature3, feature4, feature5, feature6, check[0].id]
                );

            }

        }

        res.redirect("/admin/add-why-join");

    } catch (err) {

        console.log(err);
        res.send("Error");

    }

});

// image
router.get("/images", async function(req,res){

    var sql = "SELECT * FROM gallery";

    var result = await exe(sql);

    res.render("admin/images.ejs", {
        gallery: result
    });
});


router.post("/save-image", function(req, res) {

    var data = req.body;

    if (!req.files || !req.files.image) {
        return res.send("Please select an image");
    }

    var image = req.files.image;

    var imageName = Date.now() + "_" + image.name;

    var uploadPath = path.join(__dirname, "../public/upload", imageName);

    image.mv(uploadPath, function(err) {

        if (err) {
            console.log("Upload Error:", err);
            return res.send("Image Upload Error");
        }

        var sql = `INSERT INTO gallery(title, image, category) VALUES(?, ?, ?)`;

        exe(sql, [data.title, "/upload/" + imageName, data.category]).then(function(){

            res.redirect("/admin/images");

        }).catch(function(err){
            console.log(err);
            res.send("Error saving image");
        });

    });

});

router.get("/delete-image/:id", async function(req,res){

    var id = req.params.id;

    var sql = `DELETE FROM gallery WHERE id=?`;

    await exe(sql, [id]);

    res.redirect("/admin/images");
});

router.get("/edit-image/:id", async function(req,res){

    var id = req.params.id;

    var sql = `SELECT * FROM gallery WHERE id=?`;

    var result = await exe(sql, [id]);

    res.render("admin/edit-image.ejs", {
        data: result[0]
    });
});
router.post("/update-image", async function(req,res){

    var data = req.body;

    var sql = `
    UPDATE gallery
    SET
        title=?,
        image=?,
        category=?
    WHERE id=?
    `;

    await exe(sql, [data.title, data.image, data.category, data.id]);

    res.redirect("/admin/images");
});


// event
router.get("/events", async function(req,res){

    var sql = "SELECT * FROM events";

    var result = await exe(sql);

    res.render("admin/events.ejs", {
        events: result
    });

});



router.post("/save-events", async (req, res) => {

    let image = req.files.image;

    let imageName = Date.now() + image.name;

    await image.mv("public/uploads/" + imageName);

    await exe(`INSERT INTO events(image) VALUES(?)`, [imageName]);

    res.redirect("/admin/events");

});



router.get("/delete-event/:id", async function(req,res){

    var id = req.params.id;

    var sql = `DELETE FROM events WHERE id=?`;

    await exe(sql, [id]);

    res.redirect("/admin/events");
});

router.post("/update-event/:id", function(req, res){

    var id = req.params.id;

    var image = req.files.image;
    var imageName = Date.now() + "_" + image.name;

    image.mv("public/uploads/" + imageName, async function(err){

        if(err){
            return res.send("Upload Error");
        }

        var sql = `UPDATE events SET image=? WHERE id=?`;

        await exe(sql, [imageName, id]);

        res.redirect("/admin/events");

    });

});

router.get("/edit-event/:id", async function(req,res){

    var id = req.params.id;

    var sql = `SELECT * FROM events WHERE id=?`;

    var result = await exe(sql, [id]);

    res.render("admin/edit_event.ejs", {
        event: result[0]
    });

});
// videos

router.get("/videos", async function(req,res){

    var sql = "SELECT * FROM videos";

    var result = await exe(sql);

    res.render("admin/videos.ejs", {
        videos: result
    });

});

router.post("/save-video", function(req,res){

    if(!req.files || !req.files.video){
        return res.send("No video selected");
    }

    var video = req.files.video;

    var videoName = Date.now()+"_"+video.name;

    video.mv("public/videos/"+videoName, function(err){

        if(err){
            return res.send("Upload Error");
        }

        var sql = `INSERT INTO videos(video,category) VALUES(?, ?)`;

        exe(sql, ["/videos/" + videoName, req.body.category]).then(function(){
            res.redirect("/admin/videos");
        }).catch(function(err){
            console.log(err);
            res.send("Error saving video");
        });

    });

});

router.get("/delete-video/:id", async function(req,res){

    var id = req.params.id;

    var sql = `DELETE FROM videos WHERE id=?`;

    await exe(sql, [id]);

    res.redirect("/admin/videos");

});
router.post("/update-video/:id", function(req,res){

    var id = req.params.id;

    if(!req.files || !req.files.video){
        return res.send("Please select video");
    }

    var video = req.files.video;

    var videoName = Date.now()+"_"+video.name;

    video.mv("public/videos/"+videoName, async function(err){

        if(err){
            return res.send("Upload Error");
        }

        var sql = `UPDATE videos SET video=? WHERE id=?`;

        await exe(sql, ["/videos/" + videoName, id]);

        res.redirect("/admin/videos");

    });

});

router.get("/edit-video/:id", async function(req,res){

    var id = req.params.id;

    var sql = `SELECT * FROM videos WHERE id=?`;

    var result = await exe(sql, [id]);

    res.render("admin/edit_video.ejs", {
        data: result[0]
    });

});

// careers
router.get("/careers", async function(req,res){

    var data = await exe("SELECT * FROM careers");

    res.render("admin/careers.ejs", {
        careers: data
    });

});

router.post("/save-career", async function(req,res){

    var d = req.body;

    var sql = `INSERT INTO careers(job_title,department,experience,location) VALUES(?, ?, ?, ?)`;

    await exe(sql, [d.job_title, d.department, d.experience, d.location]);

    res.redirect("/admin/careers");

});

router.get("/delete-career/:id", async function(req,res){

    await exe(`DELETE FROM careers WHERE id=?`, [req.params.id]);

    res.redirect("/admin/careers");

});

router.get("/edit-career/:id", async function(req,res){

    var data = await exe(`SELECT * FROM careers WHERE id=?`, [req.params.id]);

    res.render("admin/edit-career.ejs", {
        job: data[0]
    });

});
router.post("/update-career/:id", async function(req,res){

    var d = req.body;

    await exe(
        `UPDATE careers SET job_title=?, department=?, experience=?, location=? WHERE id=?`,
        [d.job_title, d.department, d.experience, d.location, req.params.id]
    );

    res.redirect("/admin/careers");

});
// culture
router.get("/our-culture", async function(req,res){

    var data = await exe("SELECT * FROM culture");

    res.render("admin/our-culture.ejs", {
        culture: data
    });

});

router.post("/save-culture", function(req,res){

    if(!req.files || !req.files.image){
        return res.send("Image required");
    }

    var image = req.files.image;
    var imageName = Date.now()+"_"+image.name;

    image.mv("public/upload/"+imageName, function(err){

        if (err) {
            console.log(err);
            return res.send("Upload Error");
        }

        var sql = `INSERT INTO culture(title,image) VALUES(?, ?)`;

        exe(sql, [req.body.title, "/upload/" + imageName]).then(function(){
            res.redirect("/admin/our-culture");
        }).catch(function(err){
            console.log(err);
            res.send("Error saving culture entry");
        });

    });

});
router.get("/delete-culture/:id", async function(req,res){

    await exe(`DELETE FROM culture WHERE id=?`, [req.params.id]);

    res.redirect("/admin/our-culture");

});
router.get("/edit-culture/:id", async function(req,res){

    var data = await exe(`SELECT * FROM culture WHERE id=?`, [req.params.id]);

    res.render("admin/edit-culture.ejs", {
        item: data[0]
    });

});
router.post("/update-culture/:id", function(req,res){

    var id = req.params.id;

    if(req.files && req.files.image){

        var image = req.files.image;
        var imageName = Date.now()+"_"+image.name;

        image.mv("public/upload/"+imageName, async function(err){

            await exe(
                `UPDATE culture SET title=?, image=? WHERE id=?`,
                [req.body.title, "/upload/" + imageName, id]
            );

            res.redirect("/admin/our-culture");

        });

    } else {

        exe(
            `UPDATE culture SET title=? WHERE id=?`,
            [req.body.title, id]
        ).then(function(){
            res.redirect("/admin/our-culture");
        });

    }

});

router.get("/applications", async function(req,res){

    var data = await exe(`
        SELECT * FROM job_applications
        WHERE record_status != 'deleted'
        ORDER BY id DESC
    `);

    res.render("admin/applications.ejs", {
        applications: data
    });

});
router.get("/deleted-applications", async function(req,res){

    let data = await exe(`
        SELECT * FROM job_applications
        WHERE record_status='deleted'
        ORDER BY id DESC
    `);

    res.render("admin/deleted-applications.ejs", {
        applications: data
    });
});
router.get("/restore-application/:id", async function(req,res){

    var id = req.params.id;

    await exe(
        `UPDATE job_applications SET record_status='active' WHERE id=?`,
        [id]
    );

    res.redirect("/admin/deleted-applications");

});

router.get("/delete-application/:id", async function(req,res){

    await exe(
        `UPDATE job_applications SET record_status='deleted' WHERE id=?`,
        [req.params.id]
    );

    res.redirect("/admin/applications");
});
router.get("/permanent-delete-application/:id", async (req,res)=>{

    await exe(
        `DELETE FROM job_applications WHERE id=?`,
        [req.params.id]
    );

    res.redirect("/admin/deleted-applications");
});


router.get("/hr-contact", async (req, res) => {

    try {

        let result = await exe(
            "SELECT * FROM hr_contact WHERE id = 1"
        );

        res.render("admin/hr-contact", {
            hrContact: result[0]
        });

    } catch (err) {

        console.log(err);
        res.send("Error");
    }

});

router.post("/hr-contact", async (req, res) => {

    try {

        await exe(
            `UPDATE hr_contact SET
            phone_title=?, phone1=?, phone2=?,
            email_title=?, email1=?, email2=?,
            hours_title=?, working_days=?, working_time=?
            WHERE id = 1`,
            [
                req.body.phone_title, req.body.phone1, req.body.phone2,
                req.body.email_title, req.body.email1, req.body.email2,
                req.body.hours_title, req.body.working_days, req.body.working_time
            ]
        );

        res.redirect("/admin/hr-contact");

    } catch (err) {

        console.log(err);
        res.send("Error Saving Data");

    }

});
// contact info
router.get("/contact-us", async (req, res) => {

    try {

        let result = await exe(
            "SELECT * FROM contact_info WHERE id=1"
        );

        res.render("admin/contact-us", {
            contact: result[0] || {}
        });

    } catch (err) {

        console.log(err);
        res.send("Error");

    }

});


router.post("/contact-us", async (req, res) => {

    try {

        let check = await exe(
            "SELECT * FROM contact_info WHERE id=1"
        );

        if (check.length > 0) {

            await exe(
                `UPDATE contact_info SET
                phone_title=?, phone1=?, phone2=?,
                email_title=?, email1=?, email2=?,
                office_title=?, office1=?, office2=?
                WHERE id=1`,
                [
                    req.body.phone_title, req.body.phone1, req.body.phone2,
                    req.body.email_title, req.body.email1, req.body.email2,
                    req.body.office_title, req.body.office1, req.body.office2
                ]
            );

        } else {

            await exe(
                `INSERT INTO contact_info
                (id, phone_title, phone1, phone2, email_title, email1, email2, office_title, office1, office2)
                VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    req.body.phone_title, req.body.phone1, req.body.phone2,
                    req.body.email_title, req.body.email1, req.body.email2,
                    req.body.office_title, req.body.office1, req.body.office2
                ]
            );

        }

        res.redirect("/admin/contact-us");

    } catch (err) {

        console.log(err);
        res.send("Error");

    }

});
// dealer request
router.get("/dealer-requests", async (req, res) => {

    try {

        let requests = await exe(
            "SELECT * FROM dealer_requests ORDER BY id DESC"
        );

        res.render("admin/dealer-requests", {
            requests
        });

    } catch (err) {

        console.log(err);
        res.send("Error");

    }

});


router.get("/accept-dealer/:id", async (req, res) => {

    try {

        await exe(
            `UPDATE dealer_requests SET status='Accepted' WHERE id=?`,
            [req.params.id]
        );

        res.redirect("/admin/dealer-requests");

    } catch(err){

        console.log(err);
        res.send("Error");

    }

});

router.get("/delete-dealer/:id", async (req, res) => {

    try {

        await exe(
            `DELETE FROM dealer_requests WHERE id=?`,
            [req.params.id]
        );

        res.redirect("/admin/dealer-requests");

    } catch(err){

        console.log(err);
        res.send("Error");

    }

});

// process-cards
router.get("/process-cards", async (req, res) => {

    let cards = await exe(
        "SELECT * FROM process_cards ORDER BY id DESC"
    );

    res.render("admin/process-cards", {
        cards
    });

});

router.post("/process-cards", async (req, res) => {

    try {

        let image = req.files.image;

        let imageName = Date.now() + "_" + image.name;

        await image.mv("public/uploads/" + imageName);

        await exe(
            `INSERT INTO process_cards (image, title) VALUES (?, ?)`,
            [imageName, req.body.title]
        );

        res.redirect("/admin/process-cards");

    } catch (err) {

        console.log(err);
        res.send("Error");

    }

});

router.get("/delete-process-card/:id", async (req, res) => {

    await exe(
        `DELETE FROM process_cards WHERE id=?`,
        [req.params.id]
    );

    res.redirect("/admin/process-cards");

});

// Edit Page Open
router.get("/edit-process-card/:id", async (req, res) => {

    let id = req.params.id;

    let data = await exe(
        `SELECT * FROM process_cards WHERE id=?`, [id]
    );

    res.render("admin/edit-process-card", {
        card: data[0]
    });

});
// Update Card
router.post("/update-process-card/:id", async (req, res) => {

    let id = req.params.id;
    let title = req.body.title;

    if(req.files && req.files.image){

        let image = req.files.image;
        let imageName = Date.now() + "_" + image.name;

        await image.mv("./public/uploads/" + imageName);

        await exe(
            `UPDATE process_cards SET title=?, image=? WHERE id=?`,
            [title, imageName, id]
        );

    }else{

        await exe(
            `UPDATE process_cards SET title=? WHERE id=?`,
            [title, id]
        );

    }

    res.redirect("/admin/process-cards");
});

router.get("/support-inquiries", async (req, res) => {

    let requests = await exe(
        "SELECT * FROM support_inquiry ORDER BY id DESC"
    );

    res.render("admin/support-inquiries", {
        requests
    });

});

router.get("/accept-support/:id", async (req, res) => {

    await exe(
        `UPDATE support_inquiry SET status='Accepted' WHERE id=?`,
        [req.params.id]
    );

    res.redirect("/admin/support-inquiries");

});

router.get("/delete-support/:id", async (req, res) => {

    await exe(
        `DELETE FROM support_inquiry WHERE id=?`,
        [req.params.id]
    );

    res.redirect("/admin/support-inquiries");

});

router.get("/change-status/:id/:status", async(req,res)=>{

    let currentTime = new Date().toLocaleString("sv-SE",{
        timeZone:"Asia/Kolkata"
    });

    await exe(
        `UPDATE job_applications SET status=?, status_updated_at=? WHERE id=?`,
        [req.params.status, currentTime, req.params.id]
    );

    res.redirect("/admin/applications");

});

router.post("/save-interview-date/:id", async(req,res)=>{

    try{

        let currentTime = new Date().toLocaleString("sv-SE",{
            timeZone:"Asia/Kolkata"
        });

        await exe(
            `UPDATE job_applications
            SET interview_date=?, status='Interview Scheduled', status_updated_at=?
            WHERE id=?`,
            [req.body.interview_date, currentTime, req.params.id]
        );

        let application = await exe(
            `SELECT * FROM job_applications WHERE id=?`,
            [req.params.id]
        );

        let user = application[0];

        await transporter.sendMail({
            from: process.env.MAIL_USER,
            to:user.email,
            subject:"Interview Scheduled - Virtual White Flame",
            html:`
                <h2>Hello ${user.name}</h2>

                <p>Congratulations!</p>

                <p>
                    Your application for
                    <b>${user.position}</b>
                    has been shortlisted.
                </p>

                <p>
                    Your interview has been scheduled.
                </p>

                <p>
                    <b>Interview Date & Time:</b><br>
                    ${new Date(user.interview_date).toLocaleString("en-IN")}
                </p>

                <br>

                <p>
                    Please login and check your
                    My Applications section.
                </p>

                <br>

                <p>
                    Regards,<br>
                    HR Team<br>
                    Virtual White Flame
                </p>
            `
        });

        res.redirect("/admin/applications?schedule=1");
    }
    catch(err){

        console.log("MAIL ERROR");
        console.log(err);

        res.send("Email Send Error");
    }

});
router.get("/interview-form/:id", async(req,res)=>{

    let application = await exe(
        `SELECT * FROM job_applications WHERE id=?`,
        [req.params.id]
    );

    res.render("admin/interview-form",{
        application: application[0]
    });

});
// contact

router.get("/contact-list", async function(req, res){

    var sql = `
        SELECT *,
        DATE_FORMAT(
            created_at + INTERVAL 330 MINUTE,
            '%d-%m-%Y %h:%i %p'
        ) AS indian_time
        FROM contact_messages
        ORDER BY id DESC
    `;

    var result = await exe(sql);

    res.render("admin/contact-list.ejs", {
        data: result
    });

});

router.get("/delete-contact/:id", async function(req,res){

    var id = req.params.id;

    var sql = `DELETE FROM contact_messages WHERE id=?`;

    await exe(sql, [id]);

    res.redirect("/admin/contact-list");

});

//
router.get("/callbacks", async function(req,res){

    var data = await exe(
        "SELECT * FROM callbacks ORDER BY id DESC"
    );

    res.render("admin/callbacks.ejs", {
        callback: data
    });

});
router.get("/delete-callback/:id", async function(req, res){

    var id = req.params.id;

    var sql = `DELETE FROM callbacks WHERE id=?`;

    await exe(sql, [id]);

    res.redirect("/admin/callbacks");

});

// office
router.get("/office", async function(req,res){

    var data = await exe(
        "SELECT * FROM office_locations WHERE id=1"
    );

    res.render("admin/office.ejs", {
        office: data[0] || {}
    });

});
router.post("/save-office", async function(req,res){

    var d = req.body;

    var sql = `
    UPDATE office_locations SET

    office1_title=?,
    office1_address=?,
    office1_phone=?,
    office1_map=?,

    office2_title=?,
    office2_address=?,
    office2_phone=?,
    office2_map=?

    WHERE id=1
    `;

    await exe(sql, [
        d.office1_title, d.office1_address, d.office1_phone, d.office1_map,
        d.office2_title, d.office2_address, d.office2_phone, d.office2_map
    ]);

    res.redirect("/admin/office");

});


// Testimonials Page
router.get("/testimonials", async (req, res) => {

    try {

        let testimonials = await exe(
            "SELECT * FROM testimonials ORDER BY id DESC"
        );

        res.render("admin/testimonials", {
            testimonials
        });

    } catch (err) {

        console.log(err);
        res.send("Error");

    }

});

router.post("/save-testimonial", async (req, res) => {

    try {

        let imageName = "";

        if (req.files && req.files.image) {

            let image = req.files.image;

            imageName = Date.now() + "_" + image.name;

            await image.mv(
                "public/uploads/" + imageName
            );

        }

        let {
            company_name,
            city,
            description
        } = req.body;

        await exe(
            `INSERT INTO testimonials (company_name, city, description, image) VALUES (?, ?, ?, ?)`,
            [company_name, city, description, imageName]
        );

        res.redirect("/admin/testimonials");

    } catch (err) {

        console.log(err);
        res.send("Error");

    }

});


router.get("/delete-testimonial/:id", async (req, res) => {

    try {

        await exe(
            `DELETE FROM testimonials WHERE id=?`,
            [req.params.id]
        );

        res.redirect("/admin/testimonials");

    } catch (err) {

        console.log(err);
        res.send("Error");

    }

});

// blog

router.get("/add-blog", function(req, res){

    let blogs = JSON.parse(
        fs.readFileSync("./data/blogs.json", "utf8")
    );

    res.render("admin/add_blog.ejs", {
        blogs: blogs
    });

});

router.post("/add-blog", function(req, res){

    var data = req.body;

    if(!req.files || !req.files.image){
        return res.send("Please select image");
    }

    var image = req.files.image;

    var imageName = Date.now() + "_" + image.name;

    image.mv("public/upload/" + imageName, function(err){

        if(err){
            return res.send("Image Upload Error");
        }

        let blogs = JSON.parse(
            fs.readFileSync("./data/blogs.json", "utf8")
        );

        let newBlog = {

            id: Date.now(),
            title: data.title,
            category: data.category,
            date: new Date().toLocaleDateString(),
            image: "/upload/" + imageName,
            content: data.content

        };

        blogs.push(newBlog);

        fs.writeFileSync(
            "./data/blogs.json",
            JSON.stringify(blogs, null, 2)
        );

        res.redirect("/admin/add-blog");

    });

});
router.get("/delete-blog/:id", function(req, res){

    var id = req.params.id;

    let blogs = JSON.parse(
        fs.readFileSync("./data/blogs.json", "utf8")
    );

    let newBlogs = blogs.filter(function(blog){

        return blog.id != id;

    });

    fs.writeFileSync(
        "./data/blogs.json",
        JSON.stringify(newBlogs, null, 2)
    );

    res.redirect("/admin/add-blog");

});


router.get("/about_company", async function(req, res) {

    try {

        var about_company = await exe(
            "SELECT * FROM about_company LIMIT 1"
        );

        var testimonials = await exe(
            "SELECT * FROM testimonials ORDER BY id DESC"
        );

        var plants = await exe(
            "SELECT * FROM manufacturing_plants ORDER BY id ASC"
        );

        res.render("admin/about_company", {
            about_company,
            testimonials,
            plants,
            infrastructure: []
        });

    } catch (err) {

        console.log(err);
        res.send(err);

    }
});

router.post("/save_about_company", async function(req, res) {

    try {

        var data = req.body;

        var company_image = data.old_company_image;

        if (req.files && req.files.company_image) {

            if (data.old_company_image) {

                var oldPath = path.join(
                    __dirname,
                    "../public/uploads",
                    data.old_company_image
                );

                if (fs.existsSync(oldPath)) {
                    fs.unlinkSync(oldPath);
                }
            }

            company_image = Date.now() + "_" + req.files.company_image.name;

            await req.files.company_image.mv(
                "public/uploads/" + company_image
            );
        }

        await exe(`
            UPDATE about_company SET
            company_name=?,
            tag_line=?,
            experience_years=?,
            company_image=?,
            company_description=?,
            feature1_title=?,
            feature1_desc=?,
            feature2_title=?,
            feature2_desc=?,
            feature3_title=?,
            feature3_desc=?,
            feature4_title=?,
            feature4_desc=?,
            feature5_title=?,
            feature5_desc=?,
            feature6_title=?,
            feature6_desc=?
            WHERE id=?
        `,[
            data.company_name,
            data.tag_line,
            data.experience_years,
            company_image,
            data.company_description,

            data.feature1_title,
            data.feature1_desc,

            data.feature2_title,
            data.feature2_desc,

            data.feature3_title,
            data.feature3_desc,

            data.feature4_title,
            data.feature4_desc,

            data.feature5_title,
            data.feature5_desc,

            data.feature6_title,
            data.feature6_desc,

            data.id
        ]);

        res.redirect("/admin/about_company");

    } catch(err) {

        console.log(err);
        res.send(err);

    }
});


// Manufacturing Plants section

router.get("/manufacturing_plants", async function(req,res){

    var plants = await exe(
        "SELECT * FROM manufacturing_plants ORDER BY id ASC"
    );

    res.render("admin/manufacturing_plants.ejs",{
        plants
    });

});


// Save Plant

router.post("/save_manufacturing_plant", async function(req,res){

    var d = req.body;

    var logo = "";

    if(req.files && req.files.plant_logo){

        logo = Date.now() + "_" + req.files.plant_logo.name;

        await req.files.plant_logo.mv(
            "public/uploads/" + logo
        );
    }

    await exe(
        `INSERT INTO manufacturing_plants
        (plant_logo, plant_name, plant_address, plant_phone, plant_email)
        VALUES (?, ?, ?, ?, ?)`,
        [logo, d.plant_name, d.plant_address, d.plant_phone, d.plant_email]
    );

    res.redirect("/admin/manufacturing_plants");

});


// Edit Plant

router.get("/edit_manufacturing_plant/:id", async function(req,res){

    var plant = await exe(
        `SELECT * FROM manufacturing_plants WHERE id=?`,
        [req.params.id]
    );

    res.render("admin/edit_manufacturing_plant.ejs",{
        plant : plant[0]
    });

});


// Update Plant

router.post("/update_manufacturing_plant", async function(req,res){

    var d = req.body;

    if(req.files && req.files.plant_logo){

        var logo = Date.now() + "_" + req.files.plant_logo.name;

        await req.files.plant_logo.mv(
            "public/uploads/" + logo
        );

        await exe(
            `UPDATE manufacturing_plants
            SET plant_logo=?, plant_name=?, plant_address=?, plant_phone=?, plant_email=?
            WHERE id=?`,
            [logo, d.plant_name, d.plant_address, d.plant_phone, d.plant_email, d.id]
        );

    }else{

        await exe(
            `UPDATE manufacturing_plants
            SET plant_name=?, plant_address=?, plant_phone=?, plant_email=?
            WHERE id=?`,
            [d.plant_name, d.plant_address, d.plant_phone, d.plant_email, d.id]
        );

    }

    res.redirect("/admin/manufacturing_plants");

});


// Delete Plant

router.get("/delete_manufacturing_plant/:id", async function(req,res){

    await exe(
        `DELETE FROM manufacturing_plants WHERE id=?`,
        [req.params.id]
    );

    res.redirect("/admin/manufacturing_plants");

});



// OUR FACILITIES SECTION


router.get("/industrial_infrastructure", async function(req,res){

    var infrastructure = await exe(
        "SELECT * FROM industrial_infrastructure ORDER BY id ASC"
    );

    res.render("admin/industrial_infrastructure.ejs",{
        infrastructure
    });

});


router.post("/save_infrastructure", async function(req,res){

    var d = req.body;

    var image = "";

    if(req.files && req.files.infra_image){

        image = Date.now() + "_" + req.files.infra_image.name;

        await req.files.infra_image.mv(
            "public/uploads/" + image
        );
    }

    await exe(
        `INSERT INTO industrial_infrastructure
        (infra_image, infra_title, infra_description)
        VALUES (?, ?, ?)`,
        [image, d.infra_title, d.infra_description]
    );

    res.redirect("/admin/industrial_infrastructure");

});

router.get("/edit_infrastructure/:id", async function(req,res){

    var infrastructure = await exe(
        `SELECT * FROM industrial_infrastructure WHERE id=?`,
        [req.params.id]
    );

    res.render("admin/edit_infrastructure.ejs",{
        infrastructure : infrastructure[0]
    });

});


router.post("/update_infrastructure", async function(req,res){

    var d = req.body;

    if(req.files && req.files.infra_image){

        var image = Date.now() + "_" + req.files.infra_image.name;

        await req.files.infra_image.mv(
            "public/uploads/" + image
        );

        await exe(
            `UPDATE industrial_infrastructure
            SET infra_image=?, infra_title=?, infra_description=?
            WHERE id=?`,
            [image, d.infra_title, d.infra_description, d.id]
        );

    }else{

        await exe(
            `UPDATE industrial_infrastructure
            SET infra_title=?, infra_description=?
            WHERE id=?`,
            [d.infra_title, d.infra_description, d.id]
        );

    }

    res.redirect("/admin/industrial_infrastructure");

});

router.get("/delete_infrastructure/:id", async function(req,res){

    await exe(
        `DELETE FROM industrial_infrastructure WHERE id=?`,
        [req.params.id]
    );

    res.redirect("/admin/industrial_infrastructure");

});

// company_history


router.get("/company_history", async function(req,res){

    var history = await exe(
        "SELECT * FROM company_history LIMIT 1"
    );

    var obj = {
        history : history[0]
    };

    res.render("admin/company_history",obj);

});


router.post("/save_company_history", async function(req,res){

    var d = req.body;

    var history = await exe(
        "SELECT * FROM company_history LIMIT 1"
    );

    var image = "";

    if(req.files && req.files.history_image){

        image = Date.now() + "_" + req.files.history_image.name;

        await req.files.history_image.mv(
            "public/uploads/" + image
        );
    }

    if(history.length > 0){

        if(image !== ""){

            await exe(
                `UPDATE company_history SET
                history_image=?, history_badge=?, history_title=?, para1=?, para2=?, para3=?, para4=?
                WHERE id=?`,
                [image, d.history_badge, d.history_title, d.para1, d.para2, d.para3, d.para4, history[0].id]
            );

        }else{

            await exe(
                `UPDATE company_history SET
                history_badge=?, history_title=?, para1=?, para2=?, para3=?, para4=?
                WHERE id=?`,
                [d.history_badge, d.history_title, d.para1, d.para2, d.para3, d.para4, history[0].id]
            );

        }

    }else{

        await exe(
            `INSERT INTO company_history
            (history_image, history_badge, history_title, para1, para2, para3, para4)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [image, d.history_badge, d.history_title, d.para1, d.para2, d.para3, d.para4]
        );

    }

    res.redirect("/admin/company_history");

});


// vision mission


router.get("/vision_mission", async function(req,res){

    var vision = await exe(
        "SELECT * FROM vision_mission ORDER BY id ASC"
    );

    res.render("admin/vision_mission.ejs",{
        vision
    });

});

router.post("/save_vision_mission", async function(req,res){

    var d = req.body;

    await exe(
        `INSERT INTO vision_mission (vision_title, vision_description) VALUES (?, ?)`,
        [d.vision_title, d.vision_description]
    );

    res.redirect("/admin/vision_mission");

});

router.get("/edit_vision_mission/:id", async function(req,res){

    var vision = await exe(
        `SELECT * FROM vision_mission WHERE id=?`,
        [req.params.id]
    );

    res.render("admin/edit_vision_mission.ejs",{
        vision : vision[0]
    });

});

router.post("/update_vision_mission", async function(req,res){

    var d = req.body;

    await exe(
        `UPDATE vision_mission SET vision_title=?, vision_description=? WHERE id=?`,
        [d.vision_title, d.vision_description, d.id]
    );

    res.redirect("/admin/vision_mission");

});
router.get("/delete_vision_mission/:id", async function(req,res){

    await exe(
        `DELETE FROM vision_mission WHERE id=?`,
        [req.params.id]
    );

    res.redirect("/admin/vision_mission");

});

// Future plants

router.get("/future_plans", async function(req,res){

    var future_goals = await exe(
        "SELECT * FROM future_goals ORDER BY id ASC"
    );

    res.render("admin/future_plans",{
        future_goals: future_goals
    });

});
router.post("/save_future_goal", async function(req,res){

    var d = req.body;

    await exe(
        `INSERT INTO future_goals (goal_title, goal_description) VALUES (?, ?)`,
        [d.goal_title, d.goal_description]
    );

    res.redirect("/admin/future_plans");
});

router.get("/edit_future_goal/:id", async function(req,res){

    var goal = await exe(
        `SELECT * FROM future_goals WHERE id=?`,
        [req.params.id]
    );

    res.render("admin/edit_future_goal",{
        goal: goal[0]
    });

});
router.post("/update_future_goal", async function(req,res){

    var d = req.body;

    await exe(
        `UPDATE future_goals SET goal_title=?, goal_description=? WHERE id=?`,
        [d.goal_title, d.goal_description, d.id]
    );

    res.redirect("/admin/future_plans");
});

router.get("/delete_future_goal/:id", async function(req,res){

    await exe(
        `DELETE FROM future_goals WHERE id=?`,
        [req.params.id]
    );

    res.redirect("/admin/future_plans");

});

// Management Team

router.get("/management_team", async function(req,res){

    var management_team = await exe(
        "SELECT * FROM management_team ORDER BY id DESC"
    );

    var obj = {
        management_team
    };

    res.render("admin/management_team.ejs", obj);

});

router.post("/save_management_team", async function(req,res){

    var d = req.body;

    var image = "";

    if(req.files && req.files.image){

        image = Date.now() + "_" + req.files.image.name;

        await req.files.image.mv(
            "public/uploads/" + image
        );
    }

    await exe(
        "INSERT INTO management_team(name,description,image) VALUES(?,?,?)",
        [
            d.name,
            d.description,
            image
        ]
    );

    res.redirect("/admin/management_team");

});

router.get("/delete_management_team/:id", async function(req,res){

    await exe(
        "DELETE FROM management_team WHERE id=?",
        [req.params.id]
    );

    res.redirect("/admin/management_team");

});

router.get("/edit_management_team/:id", async function(req,res){

    var management_team = await exe(
        "SELECT * FROM management_team WHERE id=?",
        [req.params.id]
    );

    res.render(
        "admin/edit_management_team.ejs",
        {
            management_team : management_team[0]
        }
    );

});

router.post("/update_management_team", async function(req,res){

    var d = req.body;

    if(req.files && req.files.image){

        var image = Date.now() + "_" + req.files.image.name;

        await req.files.image.mv(
            "public/uploads/" + image
        );

        await exe(
            "UPDATE management_team SET name=?,description=?,image=? WHERE id=?",
            [
                d.name,
                d.description,
                image,
                d.id
            ]
        );

    }else{

        await exe(
            "UPDATE management_team SET name=?,description=? WHERE id=?",
            [
                d.name,
                d.description,
                d.id
            ]
        );

    }

    res.redirect("/admin/management_team");

});

// slider section

router.get("/slider", async function(req,res){

    var slider = await exe(
        "SELECT * FROM slider ORDER BY id DESC"
    );

    res.render("admin/slider.ejs",{
        slider
    });

});

router.post("/save_slider", async function(req,res){

    var image = "";

    if(req.files && req.files.image){

        image = Date.now() + "_" + req.files.image.name;

        await req.files.image.mv(
            "public/uploads/" + image
        );
    }

    await exe(
        "INSERT INTO slider(image) VALUES(?)",
        [image]
    );

    res.redirect("/admin/slider");

});

router.get("/delete_slider/:id", async function(req,res){

    await exe(
        "DELETE FROM slider WHERE id=?",
        [req.params.id]
    );

    res.redirect("/admin/slider");

});
router.get("/edit_slider/:id", async function(req,res){

    var slider = await exe(
        "SELECT * FROM slider WHERE id=?",
        [req.params.id]
    );

    res.render("admin/edit_slider.ejs",{
        slider : slider[0]
    });

});
router.post("/update_slider", async function(req,res){

    var d = req.body;

    if(req.files && req.files.image){

        var image = Date.now() + "_" + req.files.image.name;

        await req.files.image.mv(
            "public/uploads/" + image
        );

        await exe(
            "UPDATE slider SET image=? WHERE id=?",
            [image,d.id]
        );
    }

    res.redirect("/admin/slider");

});

// client login

router.get("/client-login",(req,res)=>{

    res.render("user/client-login");

});

router.post("/client-login", async function(req,res){

    var d = req.body;

    var client = await exe(
        `SELECT * FROM clients WHERE email=? AND password=?`,
        [d.email, d.password]
    );

    if(client.length == 0){
        return res.send("Invalid Email or Password");
    }

    if(client[0].login_status == 1){
        return res.send("Client already logged in on another device");
    }

    await exe(
        `UPDATE clients SET login_status='1' WHERE id=?`,
        [client[0].id]
    );

    req.session.client = client[0];

    res.redirect("/client-panel");
});


router.get("/clients", async (req, res) => {

    let clients = await exe(
        "SELECT * FROM client_register ORDER BY id DESC"
    );

    res.render("admin/clients", {
        clients
    });

});

router.get("/delete-client/:id", async (req, res) => {

    let id = req.params.id;

    await exe(`DELETE FROM client_register WHERE id=?`, [id]);

    res.redirect("/admin/clients");

});

router.get("/logout", (req, res) => {

    req.session.admin = null;

    req.session.destroy(() => {

        res.redirect("/admin");

    });

});

module.exports = router;
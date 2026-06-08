var express = require("express");
var upload = require("express-fileupload");
var session = require("express-session");
var app = express();
var adminRoute =require("./routes/admin")
var userRoute =require("./routes/user")

app.use(session({
    secret:"a2z It Hub",
    resave:false,
    saveUninitialized:true
}))

app.use(upload());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))



app.use("/",userRoute);
app.use("/admin",adminRoute)

app.set('view engine', 'ejs');



app.listen(3000)
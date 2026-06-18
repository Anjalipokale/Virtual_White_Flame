var mysql = require("mysql");
var util = require("util");

var pool = mysql.createPool({
    connectionLimit: 10,
    host: "bbtbsmvzwzg76boevhq9-mysql.services.clever-cloud.com",
    user: "utmkkpkryl54snjz",
    password: "UlSymiHJshowWnGd4FRe",
    database: "bbtbsmvzwzg76boevhq9",
    port: 3306
});

var exe = util.promisify(pool.query).bind(pool);

module.exports = exe;
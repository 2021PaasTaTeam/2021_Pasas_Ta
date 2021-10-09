const mysql = require('mysql');
 
const db = mysql.createPool({
    user: "root",
    host: "localhost",
    password: "1234",
    database:"",
});
 
module.exports = db;
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : 'NirmitD1!',
    database : 'thehuntdb'
});

module.exports.db = db;
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host     : 'us-cdbr-east-02.cleardb.com',
    port     : 3306,
    user     : 'bc8fcb9011c3db',
    password : 'dcff15f6!',
    database : 'heroku_9445cbb39f698e9'
});

module.exports.db = db;

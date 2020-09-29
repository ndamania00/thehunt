const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host     : 'sm9j2j5q6c8bpgyq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port     : 3306,
    user     : 'fapsf1xcho1fxvdq',
    password : 'mv2trs2kun247gel',
    database : 'hz3hylsrhns9jkw7'
});

module.exports.db = db;

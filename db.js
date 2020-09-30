const mysql = require('mysql');
const index = require('./index');
const express = require('express');

const router = express.Router();
const app = express();
const port = process.env.PORT || 5000;;

// Connect
index.db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

app.get('/api/getpeople', async (req, res) => {
    let sql = 'SELECT * FROM person';
    let query = index.db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    });
});

app.get('/api/getpuzzlecards', async (req, res) => {
    let sql = 'SELECT * FROM puzzleCard';
    let query = index.db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    });
});

app.get('/api/getpuzzlefiles', async (req, res) => {
    let sql = 'SELECT * FROM puzzleFile';
    let query = index.db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

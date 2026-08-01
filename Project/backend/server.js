require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const multer = require('multer');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/uploads', express.static('uploads'));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "project_db"
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MySQL Connected");
    }
});

// REGISTER
app.post("/register",(req,res)=>{

    const {username,email,password}=req.body;

    const sql =
    "INSERT INTO users(username,email,password) VALUES (?,?,?)";

    db.query(sql,[username,email,password],(err,result)=>{

        if(err){
            res.json({message:"Error"});
        }
        else{
            res.json({message:"Register Success"});
        }

    });

});


// LOGIN
app.post("/login",(req,res)=>{

    const {email,password}=req.body;

    const sql =
    "SELECT * FROM users WHERE email=? AND password=?";


    db.query(sql,[email,password],(err,result)=>{

        if(err){
            res.json({message:"Error"});
        }
        else if(result.length > 0){

    res.json({
        message:"Login Success",
        user: result[0]
    });
        }
        else{

            res.json({
                message:"Wrong username or password"
            });

        }

    });

});


app.listen(5000,()=>{
    console.log("Server Running on Port 5000");
});
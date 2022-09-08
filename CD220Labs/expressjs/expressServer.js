const express = require('express');
const app = new express();

let loginDetails = [];

app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

app.get("/loginDetails",(req,res)=>{
    res.send(JSON.stringify(loginDetails));
})

app.post("/login/:name",(req,res)=>{
    loginDetails.push({"name":req.params.name,"login_time":new Date()});
    res.send(req.params.name + ", You are logged in!")
})

app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name)
})

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

/* Create a list with the names of the month. Add an end point in the code "/fetch/:num" 
which will fetch a particular month from a list and return it to user. If the number is invalid, it should return appropriate error message. */

let nameofMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];

app.get("/fetch/:num",(req,res)=>{
    let num = parseInt(req.params.num);
    if (num < 1 || num > 12){
        res.send("Incorrect month input")
    } else {
        res.send(nameofMonths[num - 1])
    }
})
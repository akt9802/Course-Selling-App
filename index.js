// this is a course selling app

const express = require('express');
const app = express();

app.post('/user/signup',(req,res) => {

})

app.post("/user/signin", (req, res) => {

});

app.get("/user/purchases", (req, res) => {

});

app.post("/user/purchase",(req,res) => {
    
})

app.get('/courses',(req,res) => {

})

app.listen(3000,() => {
    console.log("App is running at PORT : 3000");
})
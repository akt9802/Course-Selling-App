
// const express = require('express');
// const Router = express.Router;

const {Router} = require('express')

const userRouter = Router();



userRouter.post("/user/signup", (req, res) => {

});

userRouter.post("/user/signin", (req, res) => {

});

userRouter.get("/user/purchases", (req, res) => {
    
});


module.exports = {
    userRouter : userRouter
}

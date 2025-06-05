// const express = require('express');
// const Router = express.Router;

const { Router } = require("express");
const { z } = require("zod");

const userRouter = Router();

const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const { userModel } = require("../db");
const { configDotenv } = require("dotenv");


userRouter.post("/signup", async (req, res) => {
  // lets use ZOD Library here
  const requiredBody = z.object({
    email: z.string().min(3).email(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
  });

  const parseDataWithSucess = requiredBody.safeParse(req.body);
  if (!parseDataWithSucess) {
    res.json({
      message: "Invalid credentials",
      error: parseDataWithSucess.error,
    });
    return;
  }

  const { email, password, firstName, lastName } = req.body;

  // now lets hash this password for that we have to use bcrypt

  const hashedPassword = await bcrypt.hash(password, 5);

  try {
    await userModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
  } catch (error) {
    res.json({
      message: "Data didn't saved in database try another time !!",
      error: error,
    });
    return;
  }
  res.json({
    message: "You signed Up successfully !!",
  });
});

userRouter.post("/signin",async (req, res) => {
    // You can apply ZOD here aswell 
    const requiredBody = z.object({
        email : z.string().email(),
        password : z.string(),
    })
    const parseDataWithSucess = requiredBody.safeParse(req.body);
    if(!parseDataWithSucess){
        res.json({
            message : "Invalid credentials !!",
            error : parseDataWithSucess.error,
        })
        return ;
    }
    
    const { email, password } =  req.body;
    // now we have to verify this password as well because the password which is in the database is in the form of "AJEEBO GAREEBO STRING" so lets use bcrypt one more time

    const user = await userModel.findOne({
        email : email,
    })
    if(!user){
        res.json({
            message: "User doesn't exist !!"
        })
        return ;
    }
    
    // if we donot use await here it will return a promise object and that promise object is considered as true
    const comparePassword = await bcrypt.compare(password,user.password);

    if(comparePassword){
        // lets generate the token for the user
        // WE HAVE TO USE JWT HERE
        // console.log(process.env.JWT_SECRET);

        const token = jwt.sign({
            id : user._id
        },process.env.JWT_SECRET_USER,{expiresIn : '2h'});

        // we can do cookiee logic here aswell but we are using token here

        res.json({
            message: "You signed In successfully !! ",
            token : token,
        })

    }else{
        res.json({
            message : "Invalid Password",
        })
    }

});

userRouter.get("/purchases", (req, res) => {});

module.exports = {
  userRouter: userRouter,
};

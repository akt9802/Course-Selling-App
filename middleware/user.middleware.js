
const { configDotenv } = require('dotenv');
const jwt = require('jsonwebtoken')


function userMiddleware(req,res,next){
    const token = req.headers.token;
    const decodedInforamtion = jwt.verify(token,process.env.JWT_SECRET_USER);
    if(decodedInforamtion){
        req.userId = decodedInforamtion.id;
        next();
    }else{
        res.json({
            message:"Unauthorized User !!"
        })
    }
}

module.exports ={
    userMiddleware : userMiddleware
}
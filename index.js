// this is a course selling app

const express = require('express');
const { userRouter } = require('./routes/User.js');
const { courseRouter } = require('./routes/Course.js');
const app = express();


// routing in express is done here !!
app.use('/user',userRouter)
app.use('/course', courseRouter)


app.listen(3000,() => {
    console.log("App is running at PORT : 3000");
})
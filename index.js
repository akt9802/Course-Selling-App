// this is a course selling app

const express = require('express');
const { userRouter } = require('./routes/User.js');
const { courseRouter } = require('./routes/Course.js');
const { adminRouter } = require('./routes/Admin.js');
const app = express();


// routing in express is done here !!
app.use('/api/v1/user',userRouter)
app.use('/api/v1/course', courseRouter)
app.use("/api/v1/admin", adminRouter);


app.listen(3000,() => {
    console.log("App is running at PORT : 3000");
})
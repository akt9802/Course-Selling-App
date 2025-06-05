// this is a course selling app

const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/User.js");
const { courseRouter } = require("./routes/Course.js");
const { adminRouter } = require("./routes/Admin.js");
const app = express();

// necessary for importing the .env variables in this file
require("dotenv").config();

// routing in express is done here !!
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);

  app.listen(3000, () => {
    console.log("App is running at PORT : 3000");
  });
}

main();

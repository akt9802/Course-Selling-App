const { default: mongoose, mongo } = require("mongoose");


// LETS CONNECT TO THE DATABASE
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI)


// lets describe the schema
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const userSchema = new Schema({
    email : {type : String, unique: true},
    password : String,
    firstName : String,
    lastName : String,
})

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = new Schema({
  title : String,
  description : String,
  price : Number,
  imageUrl : String,
  creatorId : ObjectId
});

// we can add refferences that will make our life little easier but its ok for now to not to use the refferences
const purchaseSchema = new Schema({
    userId : ObjectId,
    courseId : ObjectId,
});

const userModel = mongoose.model('user',userSchema)
const adminModel = mongoose.model('admin',adminSchema)
const courseModel = mongoose.model('course',courseSchema)
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};

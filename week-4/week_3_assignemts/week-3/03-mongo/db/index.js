const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/courses2723');

// Define schemas
const AdminSchema = new mongoose.Schema({
   username:String,
   password:String,
   courses:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Course'
   }]
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
       }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    price:Number,
    imageLink:String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
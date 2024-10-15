const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { userSchema, JWT_SECRET } = require("../zodTypes");
const jwt=require("jsonwebtoken");
const { User } = require("../db");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
     // Implement user signup logic

     const data=req.body;
     const username=data.username;
     const password=data.password;
     const isValidSchema=userSchema.safeParse({
         username,password
     })
     if(!isValidSchema.success){
         return res.json({
             msg:"wrong inputs "
         })
     }
     const response=await User.create({
         username:username, password:password
     })
     return res.json({
         message:'User created successfully'
     })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const {username,password}=req.body;
    const isVaidData=userSchema.safeParse({
        username,password
    })
    if(!isVaidData.success){
        return res.json({
            msg:"invalid username or password"
        })
    }
    const isAdminExisits=await User.findOne({
        username,password
    })
    if(!isAdminExisits){
        return res.json({
            msg:"User does not exist in th db"
        })
    }
    const token=jwt.sign({username},JWT_SECRET);
    return res.json({
        msg:"user signed In",
        token:token
    })

});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
     // Implement fetching all courses logic
     const allCOurses=await Course.find({});
     return res.json({
         courses:allCOurses
     })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId=req.url.split('/')[2];
    console.log(courseId);
    
    const username=req.headers.username;
    console.log(courseId)
    const updatedCourse=await User.updateOne({
        username:username
    },{
      $push:{courses:courseId}
    })
    return res.json({
        msg:"course updated successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username=req.body.username;
    const userPurchasedCourses=await User.findOne({username:username});
    console.log(userPurchasedCourses.courses)

    const purchasedCourses=await Course.findById(userPurchasedCourses.courses)
    return res.json({
        msg:purchasedCourses
    })

});

module.exports = router
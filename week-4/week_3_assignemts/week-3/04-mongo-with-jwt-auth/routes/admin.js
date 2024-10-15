const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { userSchema, adminSchema, JWT_SECRET, CourseSchema } = require("../zodTypes");
const jwt=require('jsonwebtoken');
const { Admin, Course } = require("../db");
const router = Router();



// Admin Routes
router.post('/signup', async(req, res) => {
        // Implement admin signup logic
        console.log("heloo")
        const data=req.body;
        const username=data.username;
        const password=data.password;
      
        const isValidSchema=adminSchema.safeParse({
            username,password
        })
     
        if(!isValidSchema.success){
            return res.json({
                msg:"wrong inputs "
            })
        }
        const response=await Admin.create({
            username:username, password:password
        })
        return res.json({
            message:'Admin created successfully'
        })
    });


router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const {username,password}=req.body;
    const isVaidData=adminSchema.safeParse({
        username,password
    })
    if(!isVaidData.success){
        return res.json({
            msg:"invalid username or password"
        })
    }
    const isAdminExisits=await Admin.findOne({
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

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const {title,price,description,imageLink}=req.body;
    const isValid=CourseSchema.safeParse({
        title,price,description,imageLink
    })
    if(!isValid.success){
        return res.json({
            msg:"Enter the correct details"
        })
    }
    const response=await Course.create({
        title,price,description,imageLink
    })
    return res.json({
            msg:'Course created successfully'
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const allCOurses=await Course.find({});
    return res.json({
        courses:allCOurses
    })
});

module.exports = router;
const {Router}=require("express");
const { signUpschema, signInSchema, updateUserSchema } = require("../store/zodInput/types");
const { User, Accounts } = require("../database/db");
const jwt=require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { userMiddleware } = require("../middleware.js/user");
const router=Router();


router.post('/signup',async(req,res)=>{
    const {username,firstName,lastName,password}=req.body;
    const isSafeuser=signUpschema.safeParse({
        username,password,firstName,lastName
    });
    if(!isSafeuser.success){
        return res.status(411).json({
            msg:"Invalid Input"
        })
    }
    const isUserPresent=await User.find({
        username,password,firstName,lastName
    });

    if(isUserPresent.length){
        return res.status(411).json({
            msg:"user is already registers. please sign in."
        })
    }
    const response=await User.create({
        username,password,firstName,lastName
    })

    const userId=response._id.toString();
    console.log(userId)
    const updateBalance=await Accounts.create({
        userId:userId,
        balance:Math.floor(Math.random()*10000)
    })
    const token=jwt.sign(userId,JWT_SECRET);
    return res.status(200).json({
        token:token,
        msg:"user registered successful"
    })
})


router.post('/signin', async (req, res) => {
    try {
       const { username, password } = req.body;
       console.log(username);
       console.log(password);
 
       // Validate input using your signInSchema
       const isSafe = signInSchema.safeParse({ username, password });
       if (!isSafe.success) {
          return res.status(400).json({
             msg: "Invalid signIn credentials",
          });
       }
 
       // Find user in DB based on credentials
       const user = await User.findOne({ username, password });
       if (!user) {
          return res.status(401).json({
             msg: "Incorrect credentials",
          });
       }
 
       const userId = user._id.toString();
       const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
       console.log(token);
 
       // Set the Authorization header
       res.set('Authorization', `Bearer ${token}`);
       
       // Send the response with the token
       console.log("Signed in successfully");
       return res.status(200).json({
          msg: "User signed in successfully",
          token: token,
          userId: userId,
       });
    } catch (e) {
       console.error("The error is: " + e.toString());
       return res.status(500).json({
          msg: "An error occurred during sign-in",
       });
    }
 });
 
router.get('/userDetails',userMiddleware,async(req,res)=>{
    const userId=req.userId;
    const response=await Accounts.findById(userId);
    return res.json({
        userDetails:response
    })
    
})



router.put('/updateUser',userMiddleware, async(req,res)=>{
    const {firstName,lastName,password}=req.body;
    const isCorrectSchema=updateUserSchema.safeParse({
        firstName,lastName,password
    });
    if(!isCorrectSchema.success){
        return res.status(411).json({
            msg:"Invalid User credentials"
        })
    }
    // console.log(data)
    const userId=req.userId;
    console.log(userId)
    const updateUser=await User.findByIdAndUpdate(userId,{
        firstName,lastName,password
    });

    return res.status(200).json({
        msg:"Updates Successfully"
    })
    
})


router.get("/bulk",async(req,res)=>{
    const firstName=req.query.filter;
    const searchedUserDetails=await User.find({
        firstName:firstName
    });
    if(!searchedUserDetails.length){
        return res.json({
            msg:"no user found with the given details"
        })
    }

    
    console.log(searchedUserDetails)
    const accountDetails=await Accounts.find({
        userId:searchedUserDetails[0]._id.toString()
    })
    return res.json({
        searchedUserDetails:searchedUserDetails,
       balance:accountDetails[0].balance
    })
})


module.exports=router;
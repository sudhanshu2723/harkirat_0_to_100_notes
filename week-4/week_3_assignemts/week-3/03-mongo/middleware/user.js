// Middleware for handling auth

const { User } = require('../db');
const { userSchema } = require('../zodTypes');



async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username=req.headers.username;
    const password=req.headers.password;
    const isVaidData=userSchema.safeParse({
        username, password
    })
    if(!isVaidData.success){
        return res.json({
            msg:"the username or password is not valid"
        })
    }
    const isUserPresentInDb=await User.find({
        username:username, password:password
    })
    if(!isUserPresentInDb){
        return res.json({
            msg:"the user is not present in db",
        })
    }
    next();

}

module.exports = userMiddleware;
// Middleware for handling auth
const {Admin } = require('../db');
const { adminSchema } = require('../zodTypes');



async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username=req.headers.username;
    const password=req.headers.password;
    const isVaidData=adminSchema.safeParse({
        username, password
    })
    if(!isVaidData.success){
        return res.json({
            msg:"the username or password is not valid"
        })
    }
    const isUserPresentInDb=await Admin.find({
        username:username, password:password
    })
    if(!isUserPresentInDb){
        return res.json({
            msg:"the Admin is not present in db",
        })
    }
    next();

}

module.exports = adminMiddleware;
const jwt=require("jsonwebtoken");
const { JWT_SECRET } = require("../zodTypes");


// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token=req.headers.authorization.split(' ')[1];
    if(!token){
        return res.json({
            msg:"You are not logged In"
        })
    }
    try{
        const verify=jwt.verify(token,JWT_SECRET);
        next()
    }
    catch(e){
        return res.json({
            msg:"Login again"
        })
    }
}

module.exports = adminMiddleware;
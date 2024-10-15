const jwt=require("jsonwebtoken");
const { JWT_SECRET } = require("../zodTypes");


function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token=req.headers.token.split(' ')[1];
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

module.exports = userMiddleware;
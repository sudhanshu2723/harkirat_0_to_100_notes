const { JWT_SECRET } = require("../config");
const { tokenSchema } = require("../store/zodInput/types");
const jwt=require('jsonwebtoken');

function userMiddleware(req,res,next){
  console.log(req)
    const token = req.headers.authorization;

    console.log("the token is "+token)
    if(!token || !token.startsWith('Bearer')){
        return res.status(411).json({
            msg:"Invalid token"
        })
    }
    const tokenId=token.split(' ')[1];
    try{
        const isCorrectToken=jwt.verify(tokenId,JWT_SECRET);
        req.userId=isCorrectToken;
        console.log(req.userId)
        next();
    }
    catch(e){
        return res.status(403).json({
               msg:"Invalid token"
        })
    }
}

module.exports={
    userMiddleware
}
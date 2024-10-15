const express=require("express")
const jwt=require("jsonwebtoken");
const z=require("zod");

const app=express();
const PORT=3000;
app.use(express.json());
const JWT_SECRET="dfhgdghegkjdne"

const userDb=[
    {
        username:"sudhanshu",
        password:"qwerty"
    },
    {
        username:"ashish",
        password:"fgearg"
    },
    {
        username:"suraj",
        password:"bdfgsd"
    }
]

const signInSchema=z.object({
    username:z.string().min(4).max(15),
    password:z.string().min(4).max(15)
})

function checkUser(username,password){
    let isUserPresent=false;
    userDb.map((user)=>{
        if(user.username===username && user.password===password){
            isUserPresent=true;
        }
    })
    return isUserPresent;
}

app.post("/signin",(req,res)=>{
    const data=req.body;
    const username=data.username;
    const password=data.password;
    const isCorrectInput=signInSchema.safeParse({username,password});
   
    if(!isCorrectInput.success){
        return res.status(411).json({
            msg:"Enter the correct type of input"
        })
    }
    const isUserExistsInDb=checkUser(username,password);
     if(!isUserExistsInDb){
        return res.json({
            msg:"User does not exist in the db"
        })
     }
    const token=jwt.sign({username:username},JWT_SECRET);
    const decode=jwt.decode(token)
    return res.send({
        token:token,
        username:decode.username
    })

})


app.get("/users",(req,res)=>{
    const token=req.headers.authorization;
    console.log(token)
    if(!token){
        return res.json({
            msg:"you are signed out"
        })
    }
    try{
        const verifiedUser=jwt.verify(token,JWT_SECRET);
         return res.json({
            user:verifiedUser
         })
    }
    catch(e){
        return res.status(403).json({
            msg:"You are an invalid user"
        })
    }
})

app.listen(3000);
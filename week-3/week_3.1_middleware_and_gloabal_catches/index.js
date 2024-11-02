const express=require("express")
const z=require("zod")
const app=express();
const PORT=3000;
// app.use()->all the routes written below will first use this as middleware i.e. the callback function inside
// app.use() will be called when a reoute is called every time
app.use(express.json())



let oldDate=new Date();
let initialTime=oldDate.getTime();

const userschema=z.object({
    username:z.string().min(4).max(15),
    password:z.string().min(4).max(15)
})

function userMiddelware(req,res,next){
    const username=req.body.username;
    const password=req.body.password;

    const response=userschema.safeParse({
        username,password
    })
 
    if(!response.success){
        return res.json({
            msg:"wrong type of input"
        })
    }
    if(username=="sudhanshu" && password=="asdfg"){
        next();
    }else{
        return res.json({
            msg:"Incorrect username and password"
        })
    }
}
let noOfRequests=0;
function calculateRequests(req,res,next){
noOfRequests++;
console.log(noOfRequests)
next()
}
// here userMiddleware will be called for the get and the pos t request both
app.use(userMiddelware);
app.post('/dashboard',calculateRequests, (req,res)=>{
    let newDate=new Date();
let newTime=newDate.getTime();
console.log(newTime-initialTime)
    return res.json({
        msg:"correct username and password"
    })
})

app.get("/health-checkup",(req,res)=>{
    const kidenys=req.body.kidneys;

    return res.json({
        msg:"hello ji"
    })
})

// global catches
// handles all the catches which are given by all the routes above it
app.use((err,req,res,next)=>{
    return res.json({
        msg:"something wrong occcured",
        error:err
    })
})



app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`)
})



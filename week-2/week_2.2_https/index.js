const express=require('express')
const bodyParser=require("body-parser")

const app=express();
const PORT=3000;
// helps to use req.body in case of POST request , because express does not parses the body request on its own
app.use(bodyParser.json())


app.post("/route-handler",async(req,res)=>{
    const data=req.body;
  fetch("http://localhost:3000/",{
    method:"GET"
  })
  .then(async(response)=>{
     const data=await response.json()
     console.log(data)  
  }) 
   return res.status(200).json({
    msg:"this is a route handler"
   })
})

app.get("/",(req,res)=>{
   
    console.log("hello world")
    // console.log(req.headers.authorization)
    return res.json({
        msg:"hello ji"
    })
})

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`)
})
const express=require("express")

const PORT=3000;
const app=express();
app.use(express.json());
// Creating a hospital
let usersData=[
    {
        firstName:"sudhanshu",
        kidneys:[
            {
                kidneyId:345656,
                healthy:true
            },
            {
                kidneyId:5345,
                healthy:false
            },
            {
                kidneyId:463645,
                healthy:true
            }
        ]
    },
    {
        firstName:"naman",
        kidneys:[
            {
                kidneyId:63543,
                healthy:true
            },
            {
                kidneyId:34535,
                healthy:false
            },
            {
                kidneyId:535,
                healthy:false
            }
        ]
    },
    {
        firstName:"ashish",
        kidneys:[
            {
                kidneyId:534535,
                healthy:true
            },
            {
                kidneyId:5353345,
                healthy:true
            },
            {
                kidneyId:453345,
                healthy:true
            }
        ]
    },
    {
        firstName:"sudhanshu",
        kidneys:[
            {
                kidneyId:345656,
                healthy:true
            },
            {
                kidneyId:5345,
                healthy:false
            },
            {
                kidneyId:463645,
                healthy:true
            }
        ]
    }
]


// user can check how many kidneys they have and their length
app.get("/check-kidneys",(req,res)=>{
      const firstName=req.query.firstName;
      let noOfkidneys=0;
      let kidneyHealth=[]
      let userFound=false;
      usersData.map((userData)=>{
        if(userData.firstName==firstName){
             noOfkidneys=userData.kidneys.length;
            userData.kidneys.map((kidneyDetails)=>{
                kidneyHealth.push(kidneyDetails.healthy)
            })
            userFound=true; 
    }
})
    if(userFound){
       return res.json({
         NoOfKidneys:noOfkidneys,
         kidneyHealthDetails:kidneyHealth
      })
      }
      return res.json({
        msg:"No use found with the given details"
      })
})  

// user can add a new kidney
app.post('/add-kidney',(req,res)=>{
    const{kidneyId,firstName,kidneyStatus}=req.body;
     let updatedUserDetails=[]
    usersData.map((userData)=>{
        if(userData.firstName===firstName){
            userData.kidneys.push({
                kidneyId:kidneyId,
                kidneyStatus:kidneyStatus
            })
          updatedUserDetails.push(userData)
        }
    })
    return res.json({
        userData:updatedUserDetails,
        msg:"no use found with the given details"
    })
})

// user can replace a kidney and make it healthy
app.put("/replace-kidney",(req,res)=>{
    const {firstName}=req.body;
    let isUserPresent=false;
    let allKidneysHealthy=true;
    let updatedUserDetails=[]
    usersData.map((userData)=>{
        if(userData.firstName===firstName){
            isUserPresent=true;
            let isUnhealthyKidneyFound=false;
            userData.kidneys.map((userKidneyDetails)=>{
                if(userKidneyDetails.healthy===false && !isUnhealthyKidneyFound){
                    isUnhealthyKidneyFound=true;
                    allKidneysHealthy=false;
                    userKidneyDetails.healthy=true;
                    updatedUserDetails.push(userData)
                }
            })
        }
    })
    if(!isUserPresent){
        return res.json({
            msg:"No user is present with the given details"
        })
    }
    if(allKidneysHealthy){
        return res.json({
            msg:"all kidneys are healthy"
        })
    }
    return res.json({
        msg:"Kidney updated successfully",
        user:updatedUserDetails
        
    })
})

// delete:user can remove a kidney
app.delete("/remove-kidney",(req,res)=>{
    const {firstName}=req.body;
    let updatedUserDetails=[]
    usersData.map((userData)=>{
        if(userData.firstName===firstName){
        let isUnhealthyKidneyFound=false;
        for(let i=0; i<userData.kidneys.length; i++){
            if(userData.kidneys[i].healthy===false && isUnhealthyKidneyFound==false){
                console.log(userData.kidneys)
                userData.kidneys.splice(i,1);
                isUnhealthyKidneyFound=true;
                updatedUserDetails.push(userData)
            }
        }
        if(!isUnhealthyKidneyFound){
            userData.kidneys.pop();
        }
        }
    })


    return res.json({
        msg:"kidney removed successfully",
        user:updatedUserDetails
    })
})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})
const {Router}=require('express');
const { Accounts } = require('../database/db');
const { userMiddleware } = require('../middleware.js/user');
const { default: mongoose } = require('mongoose');
const router=Router();


router.get("/balance",userMiddleware,async(req,res)=>{
    const userId=req.userId;
    console.log("user id id "+userId)
    const response=await Accounts.find({
        userId:userId
    });
    console.log(response)
    return res.status(200).json({
        balance:response[0].balance
    })
})


router.post('/transfer',userMiddleware,async(req,res)=>{
    // create an instance of session
    const session=await mongoose.startSession();
    // start the session
    session.startTransaction();
    const {amount,to}=req.body;
    // find the account which is sending the money
    const account=await Accounts.findOne({
        userId:req.userId
    }).session(session);
    // if the account does not exist or the balance in the account is less then return
    if(!account || account.balance<amount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }
   // find the account which is recieving the money
    const toAccount=await Accounts.findOne({
        userId:to
    }).session(session)
  // if the account is not present return
    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            msg:"Invalid account"
        })
    }
  // update the sender and the reciever money inside the session
    await Accounts.updateOne({userId:req.userId},
        {$inc:{balance:-amount}}
    ).session(session);
    await Accounts.updateOne({
        userId:to
    },{
        $inc:{balance:amount}
    }).session(session);
      // transaction complete
    await session.commitTransaction();

    return res.json({
        msg:"Tranfer successful"
    })


})



module.exports=router;
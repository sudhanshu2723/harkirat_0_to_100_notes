const mongoose=require("mongoose")


mongoose.connect("mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/paytm191")
.then(()=>{
    console.log("connected to database");
})
.catch(()=>{
    console.log("unable to connect to database");
})

const UserSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    password:String,
    username:String
})

const AccountsSchema=new mongoose.Schema({
    balance:{
        type:Number,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})

const Accounts=mongoose.model('Accounts',AccountsSchema);
const User=mongoose.model('User',UserSchema);

module.exports={
    User,
    Accounts
}
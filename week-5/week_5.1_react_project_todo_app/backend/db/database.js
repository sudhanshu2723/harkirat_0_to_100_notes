const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todoapp191')
.then(()=>{
    console.log("Conntected to database")
})
.catch(()=>{
    console.log("Unable tp connect to database")
})


const todoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:String
})

const Todo=mongoose.model('Todo',todoSchema);

module.exports={
    Todo
}
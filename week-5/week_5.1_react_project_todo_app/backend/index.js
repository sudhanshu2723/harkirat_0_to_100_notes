const express=require('express');
const { Todo } = require('./db/database');
const cors=require('cors');
const { todoSchema, updateSchema } = require('./types');


const app=express();
const PORT=3000;
app.use(express.json());
app.use(cors());

app.post("/todo",async(req,res)=>{
    const {title,description}=req.body;
    const isValidTodo=todoSchema.safeParse({
        title,description
    })
    if(!isValidTodo.success){
        return res.json({
            msg:"user todonot in correct format"
        })
    }
    const response=await Todo.create({
        title,description,completed:false
    })
    return res.json({
        msg:"todo added successfully"
    })
})

app.get("/todos",async(req,res)=>{
      const todoData=await Todo.find({});
      return res.json({
        todos:todoData
      })
})
    
app.put("/completed",async(req,res)=>{
     const {id}=req.body;
     const isIdCorrect=updateSchema.safeParse(id);
     if(!isIdCorrect.success){
        return res.json({
            msg:"ID is not correct"
        })
     }
     const response=await Todo.findByIdAndUpdate(id,{
        completed:true
     })
     return res.json({
        msg:"todo updated successfully"
     })
})

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`)
})
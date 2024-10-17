import { useState } from "react";
import axios from 'axios'

function App() {
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[todos,setTodos]=useState([]);
    const[id,setTodoId]=useState(0)

    async function submitHandler(){
      const response=await axios.post("http://localhost:3000/todo",
          {title:title,description:description})
   } 
   async function getTodohandler(){
       const response=await axios.get("http://localhost:3000/todos");
       console.log(response.data.todos)
       setTodos(response.data.todos)
   }
   
  return (
  <div>
    <h1>Enter Todo</h1>
    {id}
    <input type="String" onChange={(e)=>{setTitle(e.target.value)}}></input>
    <input type="String" onChange={(e)=>{setDescription(e.target.value)}}></input>
    <button type="submit" onClick={submitHandler}>Add Todo</button>
    <button onClick={getTodohandler}>Get todos</button>
    {todos.map((todo)=>{
      return <div key={todo._id}>{todo.title} ## {todo.description} <button onClick={async()=>{
        await axios.put("http://localhost:3000/completed",{
          id:todo._id
        })
        setTodoId(1)

      }}>{todo.completed}</button></div>
    })}
  </div>
  );
}

export default App;

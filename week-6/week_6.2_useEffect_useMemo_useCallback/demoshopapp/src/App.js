// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// function App() {
//   const[todos,setTodos]=useState([]);
//   const[id,setId]=useState(0);
//   const[idTodo,setIdTodo]=useState({
//     firstname:'',
//     lastname:''
//   })
//      useEffect(()=>{
//       axios.get("https://fakerapi.it/api/v1/persons")
//       .then(async(response)=>{
//         console.log(response.data.data)
//             setTodos(response.data.data)
           
//       })
//      },[])
//      useEffect(()=>{
//       axios.get("https://fakerapi.it/api/v1/persons")
//       .then(async(response)=>{
//         if(id && id>=1){
//         console.log(response.data.data[id-1])
//         setIdTodo(response.data.data[id-1])
//         }
//       })
//      },[id])
//   return (
//     <div>
//       <input type='Number' placeholder='Enter Id' onChange={(e)=>{
//        setId(e.target.value)
//        console.log(id)
//       }}></input>
//       {idTodo.firstname ? (<div>
//         <div>{idTodo.firstname}</div>
//         <div>{idTodo.lastname}</div>
//       </div>) : (<div>Enter the data</div>)}
//        <br/>
//     {todos.map((todo)=>{
//       return <TodoData key={todo.id } title={todo.firstname} description={todo.lastname}></TodoData>
//     })}
//     </div>
//   );
// }

// function TodoData({title,description}){
//   return (
//     <div>
//       <div> firstname :{title}</div>
//       <div>lastname : {description}</div>
//       </div>

//   )
// }

// export default App;


// USEMEMO
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'axios'

 function App(){
  const[counter,setCounter]=useState(0);
  const[num,setNum]=useState(0);
// only when the num changes then only the sumVal will be computed again
  let sumVal=useMemo(()=>{
      let sum=0;
      console.log("hello")
      for(let i=0; i<=num; i++){
        sum+=i;
      }
     return sum;
  },[num])

  // useCallback->use to cache a function and do not compute it till the value in the dependency array changes
  // it is used to prevent unnecessary re-rendering of the functions
  // this function will only be called when the num ot count variable changes
  let a=useCallback(()=>{
    console.log("hello world")
  },[num,counter])
  
  return (
    <div>
   <input onChange={(e)=>setNum(e.target.value)}></input>
   <div>sum is {sumVal}</div>
   <button onClick={(e)=>{
    setCounter(counter=>counter+1)
   }}>Counter {counter}</button>
    </div>
  )
}
// The main difference between the React hooks useMemo and useCallback is the type of value they return: 
// useCallback: Returns a memoized callback function 
// useMemo: Returns a memoized value

export default App;
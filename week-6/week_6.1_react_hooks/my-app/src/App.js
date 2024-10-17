// import React from 'react'
// import {useState} from 'react';

// function App() {
 
//   return (
//     <React.Fragment>   
    
//        <Header title="this is header 1"></Header>
//       <HeaderWIthButton></HeaderWIthButton>
//        </React.Fragment>
 
//   );
// }

// function Header({title}){
//   return (
//     <div>{title}</div>
//   )
// }

// function HeaderWIthButton(){
//   const[title,setTitle]=useState('')
//   return (
//     <div>
//       <Header title={title}></Header>
//   <button onClick={()=> setTitle(Math.random())}>Click me to change the title</button>
//     </div>
//   )
// }

// export default App;



// KEY
// CHILDREN
import React from 'react'
import {useState} from 'react';



function App() {
  const [todosData,setTodoData]=useState([
    {
      id:1,
      title:"go to gym",
      description:"go to gym daily"
    },
    {
      id:2,
      title:"go to skipping",
      description:"go to skipping daily"
    },
    {
      id:3,
      title:"running",
      description:"Run daily"
    }
  ])

  const[title,setTitle]=useState('')
  const[description,setdescription]=useState('');
let id=4;
  function submitHandler(){
    setTodoData(
      [...todosData,{
        id:id++,
        title:title,
        description:description
      }]
    )
  }
  return (
   <>
   {todosData.map((todo)=>{
    // we add key so as to distinguish between different todos
    return <Todo title={todo.title} key={todo.id} description={todo.description} />
   })}
   <input type='string' placeholder='title' onChange={(e)=>setTitle(e.target.value)}></input>
   <input type='string' placeholder='description' onChange={(e)=>setdescription(e.target.value)}></input>
   <button onClick={submitHandler}>Submit</button>
   <Header>
    {/* children */}
   <h1> add todo header </h1>
    </Header>
   </>
 
  );
}

function Header({children}){
  return(
    <div>
      {children}
    </div>
  )
}


function Todo({title,description}){
  return(
    <div>
      <h1>{title}</h1>
      <div>{description}</div>
    </div>
  )

}



export default App;
// import React from 'react'; 
// import { lazy } from 'react';
// import { Suspense } from 'react';
// import {Route, Routes, useNavigate} from 'react-router-dom'
// import Landing from './components/Landing';
// const Dashboard = lazy(()=>import('./components/Dashboard'));
// // suspence API->used for async data fetching
// function App() {
//   // use the useNavigatye inside browserRouter. so we have put the browserRouter at the index.js
//   const navigate=useNavigate()
//   return (
//     <div >
//       <div>this is a navbar</div>
//       <button onClick={()=>
//       // performs a hard reload
//       // therefore we use useNavigate to do routing
//         // window.location.href='/dashboard'
//         navigate('/dashboard')
//         }
//         >Dashboard</button>
//       <button onClick={()=>
//         // window.location.href='/landing'
//         navigate('/landing')
//         }>Landing</button>

import { CountContext } from "../context";

   
//        <Routes>
//         <Route path='/dashboard' element={<Suspense fallback={"loading..."}> <Dashboard/></Suspense>}/>
//         <Route path='/landing' element={<Landing/>}/>
//        </Routes>
    
//     </div>
//   );
// }

// export default App;

// read about reducer and useReducer
// CONTEXT API
import {useState,useContext} from 'react'

export default function App(){
  const[count,setCount]=useState(0)
  return (
    <div>
      // wrap anyone that wants to use the teleported values inside a provider

      <CountContext.Provider value={{count,setCount}}>
        <Count />
      </CountContext.Provider>
       
    </div>
  )
}


function Count({setCount}){
  const {setCount}=useContext(CountContext)
  return (
    <div>
      <CountRenderer/>
      <Button setCount={setCount}/>
    </div>
  )
}

function CountRenderer(){
  const {count}=useContext(CountContext);
  return (
    <div>{count}</div>
  )
}

// context api makes the rendering less performant 
// it re-renders all the components when its state variable is changed and changes all the components which are inside context provider even if it uses or does not uses the cotext variable
// it just makes code easy to view-> thus we use recoil

function Button(){
  const {setCount}=useContext(CountContext)
  return (
    <>
    <button onClick={()=>{
      setCount((count)=>count+1)
    }}>Increase</button>
     <button onClick={()=>{
      setCount((count)=>count-1)
    }}>Decrease</button>
    </>
  )
}

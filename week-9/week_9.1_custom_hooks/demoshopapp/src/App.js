// import {useState,useEffect} from 'react'

// //Custom hook
// // starts with use and uses state functions under the hood
// function useTodo(){
//   const[loading,setLoading]=useState(true)
//   const[todos,setTodos]=useState()

//   useEffect(()=>{
//     axios.get("https://sum-server.100xdevs.com/todos")
//     .then((res)=>{
//       setTodos(res.data.todos)
//     },[])
//      loading(false)
//   })

//   return {todos,loading};
// }

// function App() {
  
//     // const todos=useTodo();
//     const {todos,loading}=useTodo();
//     if(loading){ 
//       return <div>loading ...</div>
//     }
//   return (
//    <>
//     <div>{todos.title}</div>
//     <div>{todos.description}</div>
//    </>
//   );
// }

// export default App;


// AUTO REFRESHING HOOK->REFRESHING THE DATA WHICH WE GET FROM THE BACKEND AFTER EVERY N SECONDS

// import {useState,useEffect} from 'react'

// //Custom hook
// // starts with use and uses state functions under the hood
// function useTodo(n){
//   const[loading,setLoading]=useState(true)
//   const[todos,setTodos]=useState()

//    function getData(){
//       axios.get("https://sum-server.100xdevs.com/todos")
//       .then((res)=>{
//         setTodos(res.data.todos)
//       },[])
//        loading(false)
//    }
// // calls the function and refreshes the data after every n seconds
//   setInterval(()=>{
//      getData();
//   },n*1000)

//   return {todos,loading};
// }

// function App() {
  
//     // const todos=useTodo();
//     const {todos,loading}=useTodo(4);
//     if(loading){ 
//       return <div>loading ...</div>
//     }
//   return (
//    <>
//     <div>{todos.title}</div>
//     <div>{todos.description}</div>
//    </>
//   );
// }

// export default App;

// useleOnline hook ->which checks if a person is online or not


import {useState,useEffect} from 'react'

function useIsOnline(){
  const [online, setIsOnline] = useState(navigator.onLine); // Initial state based on actual status

  useEffect(()=>{
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup function to remove event listeners on unmount
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  },[]);
  return online
}

function App() {
  
 
    const findIfonline=useIsOnline();
    console.log(findIfonline)
  return (
 
   <>
    {findIfonline ?
    // 
    (<div>online</div>)  : (<div>offline</div>)}
   </>
  );
}

export default App;
import axios from 'axios'
import {useEffect} from 'react'
import { useLocation } from 'react-router-dom';

export default function(){
   const location=useLocation();
   const currentPath=location.pathname;
   const searchParams=new URLSearchParams(location.search)
   const userId=searchParams.get('userId')
    async function getData(){
        const response=await axios.get(`http://localhost:3001/api/v1/user/userDetails`);
        console.log(response);
        
    } 

    useEffect(()=>{
     getData()
     
    },[])

    return (
        <div>
         <h1>Payments App</h1>
         <div>Your Balance </div>
        </div>
    )
}
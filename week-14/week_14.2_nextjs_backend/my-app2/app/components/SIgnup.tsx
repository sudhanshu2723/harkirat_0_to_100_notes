"use client"

import { useState } from "react";
import axios from 'axios'
import { useRouter } from "next/navigation";
import { signup } from "../actions/user";

export default function (){
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const router=useRouter();
    return (
        <div>
            <input type="text" onChange={(e)=>{
                setUsername(e.target.value)
            }} placeholder="username"></input>
            <input type="text" onChange={(e)=>{
                setPassword(e.target.value)
            }} placeholder="Password"></input>
            <button onClick={async()=>{
                    //  await axios.post('http://localhost:3000/api/user',{
                        // username,password
                    //   })
                    await signup(username,password);
                      router.push('/')
            }}>Signup</button>
        </div>
    )
}
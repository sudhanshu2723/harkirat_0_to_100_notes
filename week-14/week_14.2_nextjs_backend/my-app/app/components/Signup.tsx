"use client"

import { useState } from "react";

export default function (){
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    return (
        <div>
            <input type="text" onChange={(e)=>{
                setUsername(e.target.value)
            }} placeholder="username"></input>
            <input type="text" onChange={(e)=>{
                setPassword(e.target.value)
            }} placeholder="Password"></input>
            <button>Signup</button>
        </div>
    )
}
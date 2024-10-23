import axios from 'axios';
import { useState } from 'react';

async function getUserData(){
  const response=await axios.get('http://localhost:3000/api/user');
  return response.data;
}

export default async function Home() {
     const userDetails=await getUserData();
     console.log(userDetails)
  return (
   <>
   <div>{userDetails.email}</div>

   {userDetails.name}
   </>
  );
}

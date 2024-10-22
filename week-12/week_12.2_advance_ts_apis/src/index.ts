// // Pick ->used to pick types from a interface

// interface User{
//     id:string;
//     name:string;
//     age:string;
//     email:string;
//     password:string
// }

// type UpdateProps=Pick<User,'name'| 'age' | 'email'>


// const userpdatedUser:UpdateProps={
//     name:"sudhanshu",
//     age:"23",
//     email:"sudhanshu2723@gmail.com"
// }

// // Partial->marks all the keys as optional

// // now every ket present in UpdateProps is optional for rhe
// //  type partialProps
// type partialProps=Partial<UpdateProps>

// const user2:partialProps={
//     name:"sudhanshu"
// }


// // ReadOnly->cannot change the internal values of an array or object
// type User3props={
//     readonly name:string;
//     age:number;
// }

// const user3:User3props={
//     name:"sudhanshu",
//     age:56
// }



// // user3.name="hello" ->gives an error b/c it is readonly
// user3.age=34 

// // or if we want to make whole object readonly

// interface Config{
//     endpoint:string;
//     apiKey:string;
// }
// // make the whole object readonly
// const config:Readonly<Config>={
//     endpoint:"http://",
//     apiKey:'23423'
// }

type User={
    id:string;
    username:string;
}

type Users={
    [key:string]:User;
}

const users:Users={
    "dwfvwb":{
        id:"23423",
        username:"sudhnahsu"
    },
    "dfgebg":{
        id:"35345",
        username:"naman"
    }
}
// or we can use records
// mapping the record of string data type with that of User
type UserRecord=Record<string,User>;


const users1:UserRecord={
    "dwfvwb":{
        id:"23423",
        username:"sudhnahsu"
    },
    "dfgebg":{
        id:"35345",
        username:"naman"
    }
}


//MAP
type User5={
    name:string;
    age:number;
    email:string
}
const users4=new Map<string,User5>()

users4.set("dfosdvn",{name:"sudhanshu",age:21,email:'sudhanshu2723'});
users4.set("dvsfvsv",{name:"ashi",age:34,email:"doasdvna"});

const userData=users4.get('dfosdvn')
users4.delete('dvsfvsv')

// Exclude->lets you exclude key from certain inputs

type EventType='click' | 'scroll' | 'mousemove'

type ExcludeEvent=Exclude<EventType,'scroll'>;

const handleEvent=(event:ExcludeEvent)=>{
    console.log(`Handling event : ${event}`)
}

handleEvent('click')
// handleEvent('scroll')->gives error

// type inference in Zod

import {z} from 'zod'
import express from 'express';

const app =express();

// run time variable
const userProfileSchema=z.object({
    firstName:z.string().min(1,{message:"name cannot be empty"}),
    email:z.string().email({message:'Invalid email format'}),
    age:z.number().min(10,{message:"you must be atleast 18 years old"}).optional() 
})
// compile time variable
type userProfileType=z.infer<typeof userProfileSchema>

app.get('/user',(req,res)=>{
    const {success}=userProfileSchema.safeParse(req.body);
   const updatedBody:userProfileType=req.body;
})
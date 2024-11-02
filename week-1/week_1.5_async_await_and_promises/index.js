// Async/await uses context switching to efficiently manage tasks without blocking the main thread.
// No parallel execution in the traditional sense within a single-threaded environment, but asynchronous operations happen independently and are resumed later.

// console.log("before setTimeout");
// let sum=0;

// setTimeout(()=>{
//     console.log("Inside set timeout function");
// },1000)
// for(let i=0; i<10000000000; i++){
//     sum++;
//     }
// console.log("after set timeout")

// const fs=require("fs")

// console.log("before file reading");
// // these are called error first callbacks in which first you get the error and then the data
// fs.readFile("a.txt","utf-8",(err,data)=>{
//     console.log("before the function")   
//     console.log(data);
//        console.log("after the function")
// })

// console.log("after file reading")

const fs=require("fs")

function kiratReadFile(){
    const prom=new Promise((resolve)=>{
         fs.readFile("a.txt","utf-8",(err,data)=>{
            resolve(data);
        })
    })
    return prom;
}

let a=kiratReadFile()
console.log(a)
a.then((data)=>{
    console.log("a "+data)
})

kiratReadFile().then((data)=>{
  console.log(data);
})

// // async await
// // async and promises uses callback->(setTimeout,setInterval these type of functions under the hood) under the hood

// async function solve(){
//     let data=await fetch("https://google.com")
//     console.log(data)
// }

// function asyncPromise(){
//     const p=new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("hi there")
//         },1000)
//     })
//     return p;
// }

// async function main(){
//     let value=await asyncPromise();
//     console.log(value)
// }

// main()


// const fs=require('fs')

function readFile(){
    const prom=new Promise((resolve)=>{
        fs.readFile("a.txt","utf-8",(err,data)=>{
            resolve(data);
       })
    })
    return prom
   
}

readFile().then((data)=>{
    console.log("hello")
    console.log(data)

})
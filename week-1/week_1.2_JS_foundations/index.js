console.log("hello world");
// partial execution of programs takes place ->here "hello world will be printed"
// console.log(a);

// JS is a dynamic language
// allows to change type of variable
// results in run time errors
// not good for big codebases
// easy to start 
let firstName="sudhanshu"
firstName=34;

// js is single threaded->uses one core of machine at a time
// can do context switching between tasks but cannot run two programs at the same time
// bad language for scalable system



// var,let,const
// var->not used nowardays
const num=45;
// it is a const therefore cannot change its value
// num=56;


// Questions

//Q ) write a program that greets a person based on their firstName and lastname
let firstName1="sudhanshu"
let lastName="pandey"

console.log("My firstName is "+firstName1+" and lastName is "+lastName);

//Q) write a program that greets a person based on their gender
let gender="male"

if(gender==="male"){
    console.log("you are a male")
}else{
    console.log("you are a female")
}

// Q) write a program that counts from 0-1000
let sum=0;
for(let i=0; i<=1000; i++){
    sum+=i;
}
console.log(sum);

// ARRAYS and OBJECTS

// Q) program printing all the even numbers in the array
let arr=[2,34,56,12,34,55,67]

for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0)
        console.log(arr[i])
}

// program printing the largest number in the array
let maxi=Number.MIN_VALUE;
console.log(maxi)
for(let i=0; i<arr.length; i++){
    maxi=Math.max(maxi,arr[i])
}

console.log(maxi)

// Q) program printing all the male people firstName given a complex object
let allUsers=[
    {
        firstName:"sudhanshu",
        gender:"male"
    },
    {
        firstName:"naman",
        gender:"male"
    },
    {
        firstName:"aastha",
        gender:"female"
    }
]

for(let i=0; i<allUsers.length; i++){
    if(allUsers[i].gender==="male"){
        console.log(allUsers[i]["firstName"])
    }
}

// == ->checks if the value is true and does not looks at the types. 5=='5' ->gives true
// === ->checks if the value and the types both are equal. '5'==='5' will only give true

// Q) program to reverse all the elements of the array
let start=0;
let end=arr.length-1;
while(start<=end){
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    start++; end--;
}

console.log(arr);

// functions
function sumVal(a,b){
    return a+b;
}

// q)function that displays result in a pretty format

function displayResult(result){
   console.log("the result is "+result)
 }

 // callback functions->taking other functions as input\
 function sub(a,b){
    return a-b
 }

 function mult(a,b){
    return a*b;
 }

 function calculateArithematic(a,b,operation){
    console.log("the value is "+operation(a,b))
 }

 calculateArithematic(3,6,sumVal)
 calculateArithematic(5,6,sub)
 calculateArithematic(45,12,mult)

 // setInterval-> calls the function after a particular interval again and again
// takes a callback functionas input which prints "setInterval is called" after every 1sec
 setInterval(()=>{
    console.log("setInterval is called")
 },1000)


//  setTimeout->calls the function after a given interval
setTimeout(()=>{
    console.log("setTimeout is called")
},1000)


// create a counter in js that counts from 30 to 0
let counter=30;

setInterval(()=>{
    console.log("couter value is "+counter);
    counter--;
},1000)

// Q) calculate the time it takes between a setTimeout and inner function actually running\
let oldDate=new Date()
let oldSec=oldDate.getTime()

setTimeout(()=>{
    let newDate=new Date();
    let newsec=newDate.getTime();
    console.log("the difference is "+newsec-oldSec)
},1000);

//Q) create a terminal clock

let hr=0;
let min=0;
let sec=0;

function calculateTime(){
    sec++;
    if(sec==60){
        sec=0; min++;
    }if(min==60){
        min=0; hr++;
    }if(hr==24){
        hr=0;
    }
    console.log(hr+" : "+min+" : "+sec)
}

setInterval(()=>{
    calculateTime()
},1)
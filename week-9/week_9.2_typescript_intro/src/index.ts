

let x:number=1;
console.log(x);
// gives an error->ts compiler is complaining
// x="harkirat"


function greetUser(firstName:string):void{
    console.log("my name is "+firstName)
}
 
greetUser("sudhanshu")
// greetUser(45) ->not allowed


function sum(a:number,b:number):number{
    return a+b
}

console.log(sum(3,4));


function isLegal(age:number):boolean{
    if(age>=18){
        return true;
    }else{
        return false;
    }
}

let age:boolean=isLegal(34);

function calculateArithematic(a:number,b:number,fnTocall:(a:number,b:number)=>number):number{
    return fnTocall(a,b);

}

const ans:number=calculateArithematic(45,34,sum);

interface User{
    firstname:string,
    lastname:string,
    age:number,
    // email is optional here
    email?:string
}

function isLegalAge(user:User):boolean{
       if(user.age>18){
        return true;
       }else{
        return false;
       }
}

console.log(isLegalAge({
    firstname:"sudhanshu",
    lastname:"pandey",
    age:34
}))


interface Person{
    name:string;
    age:number;
    greet(phase:string):void;
}

class Employee implements Person{
    name:string;
    age:number;
    constructor(n:string,a:number){
        this.name=n;
        this.age=a;
    }

    greet(phase: string): void {
        console.log(phase+this.name)
    }
}

const user=new Employee("sudhanshu",23)

console.log(user.age)

user.greet("hello ");

// types

type User1={
    firstName:string,
    lastName:string,
    age:number
}

// type gives union which is not possible in case of interfaces

type num=string | number

// both the number and the string type are possible
const age1:num=34;
const age2:num="45"
// we can also do union of two types
type emp={
    name:string;
    startDate:string
}

type manager={
    name:string;
    dept:string
}

// contains the unions of both the types
type techLead= emp & manager;

const t:techLead={
   name:"sudhanshu",
   startDate:"21-12-2024",
   dept:"cse" 
}

// difference between interfaces and types
// types help to perform unions
// interfaces can be used to implement class

function solve(arr:number[]):Number{
    return arr[0];
}

const value:Number=solve([2,3,4,56,5])
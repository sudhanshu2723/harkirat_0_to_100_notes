let str="  Sudhanshu pandey pandey  "

console.log(str.length)
// gives the first occurance of any word in a string
console.log(str.indexOf("pandey"))
// gives the last occurance of any word in a string
console.log(str.lastIndexOf("pandey"))

// {startIndex,endIndex-1}->{3 to 4}-> will be printed
console.log(str.slice(3,5));
// {startIndex,startIndex+length}->{4 to 10}->will be printed
console.log(str.substr(4,6));

// both substr and slice will work same if we start from 0 index

// replaces the first occurance
  console.log(str.replace("pandey","world"))

  // used to extract words and put into an array
  // splits string based on a delimeter
  console.log(str.split(' '))

  // trims space at the beginning and the end and not in between
  console.log(str.trim())

  console.log(str.toUpperCase())

  console.log(str.toLowerCase())

  // global function
  console.log(parseInt("42"));
  console.log(parseInt("42.23"));
  console.log(parseInt("42pdsfv"));
  console.log(parseInt("23dfg4"));


  console.log(parseFloat("42"));
  console.log(parseFloat("42.23"));
  console.log(parseFloat("42pdsfv"));
  console.log(parseFloat("23dfg4"));


  let arr=[4,5,6,734,35,24]

  arr.push(45)
  arr.pop()
  arr.shift()
  arr.unshift(34)
  let arr2=[45,41]
  arr=arr.concat(arr2)
  console.log(arr)

  arr.forEach((val)=>{
    console.log(val)
  })

// CLASSES

class Animal{
    constructor(name,legCount,speaks){
        this.name=name;
        this.legCount=legCount;
        this.speaks=speaks
    }
    findlegs(){
        console.log("the animal has "+this.legCount+ " legs")
    }
    // associated with  the class and not the object
    static findType(){
        console.log("it is of animal type")
    }
}

let dog=new Animal("sheru",4,"bhow bhow");

dog.findlegs()
dog.name;
Animal.findType()

let user={
    firstName:"sudhanshu",
    gender:"male",
    age:21
}

// user.firstName===user["firstName"]

let stringifiedObj=JSON.stringify(user);
console.log(typeof(stringifiedObj))
console.log(stringifiedObj)
let obj=JSON.parse(stringifiedObj)
console.log(obj)
console.log(typeof(obj))
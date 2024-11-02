
function sum(a,b){
    return a+b
}
// Arrow
const sumVal=(a,b)=>{
    return a+b;
}

const data=sumVal(3,4)
let arr=[3,4,5,6,75,34,53]

// Map
let arr2=arr.map((value)=>{
    return value*2
})


console.log(arr2)

// Filter
// filters the specific values from the array which satisfies a given condition
let evenArr=arr.filter((value)=>{
    // condition
    return value%2==0

})


console.log(evenArr)
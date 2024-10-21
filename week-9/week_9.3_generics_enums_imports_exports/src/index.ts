// enums->used to determine data from a set of values
// gives nice suggestions
enum Direction{
    Up,  //0
    Down, //1
    Left,  //2
    Right  //3
}

function goSomething(kerPressed:Direction){
    if(kerPressed==Direction.Up){
    console.log("go up")
    }
    if(kerPressed==Direction.Down){
     console.log("go down")
        }
    if(kerPressed==Direction.Right){
     console.log("go right")
    }
    if(kerPressed==Direction.Left){
    console.log("go left")
    }
}



/// GENERICS
  
function solve2<T>(arg:T){
    return arg;
}
function solve3<T>(arr:T[]):T{
    return arr[0];
}
let output1=solve2<string>("sudhanshu");
let output2=solve2<number>(34);

let output3=solve3<number>([3,4,5,67]);
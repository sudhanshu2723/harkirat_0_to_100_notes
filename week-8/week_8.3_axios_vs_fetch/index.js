// axios vs fetch
import axios from 'axios'

function main(){
    fetch("http://sum-server.100xdevs.com/todos",{
        // by default it is GET method ->we can specify the method
        method:"POST",
        body:{
            username:"sudhanshu",
            password:"3234234ed"
        },
        headers:{
            "Authorization":"Bearer 1234"
        }
    })
    .then(async(response)=>{
         const data=await response.json();
         console.log(data)
    })
}
main()

// in a get request we caannot send body . we can only send headers.therefore headers will be the first argument in case of get request
async function main2(){
    // we can determine the type of request we are sending and it returns json data
    const response=await axios.get("http://sum-server.100xdevs.com/todos",{
        username:"sudhanshu",
        password:"ed234rdw34"
    },{
        headers:{
            "Authorization":"Brearer 123"
        }
    });
    const data=response.data
}

main2()
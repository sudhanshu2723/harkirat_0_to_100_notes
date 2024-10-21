import { PrismaClient } from "@prisma/client";


const prisma=new PrismaClient();

 async function insertUser(email:string,password:string,firstName:string,lastName:string){
  const response= await prisma.user.create({
      data:{
        email,password,firstName,lastName
      },
      // tells us what we want in return
      select:{
        email:true,
        password:true,
        firstName:true
      }
   })
   console.log(response)

}


async function updateUser(email:string,password:string,firstName:string,lastName:string){
    const response= await prisma.user.update({
        where:{
          email:email,
          password:password
        },
        data:{
           firstName
        }
     })
     console.log(response)
  
  }

insertUser("sudhanshu21723@gmail.com","qwee1rrww","s1udhanshu","pand1ey");
 
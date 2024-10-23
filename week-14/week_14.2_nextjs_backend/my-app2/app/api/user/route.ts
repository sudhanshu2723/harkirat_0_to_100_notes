import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";


const client=new PrismaClient();

export async function POST(req:NextRequest){
      const body=await req.json();
      
      const user=await client.user.create({
        data:{
            username:body.username,
            password:body.password
        }
      })
          console.log(user.id);
      return Response.json({
        msg:"you are logged in"
      })
}
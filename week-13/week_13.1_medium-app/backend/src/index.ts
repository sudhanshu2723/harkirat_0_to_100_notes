import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string
  }
}>()


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/vi/user/signup',async(c)=>{
  const prisma=new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const body=await c.req.json();
  try{
    const user=await prisma.user.create({
      data:{
        email:body.email,
        password:body.password
      }
    })
    return c.text('jwt here')
  }
  catch(e){
    return c.status(403);
  }
})

app.post('/api/vi/user/signin',(c)=>{
  return c.text('this is signin endpoint')
})

app.post('/api/vi/blog',(c)=>{
  return c.text('this is blog end point')
})

app.put('/api/vi/blog',(c)=>{
  return c.text('this is used to adding blogs')
})

app.get('/api/vi/blog/:id',(c)=>{
  return c.text('Used to retrieve blog with a specific id')
})

app.get('/api/vi/blog/bulk',(c)=>{
  return c.text('Used to retrieve blog ')
})


export default app

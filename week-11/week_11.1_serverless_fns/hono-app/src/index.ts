import { Hono } from 'hono'

const app = new Hono()

app.get('/', async(c) => {
  const data=await c.req.json();
  console.log(data);
  console.log(c.req.header('Authorization'));
  console.log(c.req.query('param'))
  return c.text('Hello Hono!')
})

export default app

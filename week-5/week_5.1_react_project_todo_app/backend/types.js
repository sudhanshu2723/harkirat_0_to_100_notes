const z=require('zod');


const todoSchema=z.object({
    title:z.string().max(50),
    description:z.string().max(200)
});

const updateSchema=z.string()


module.exports={
    todoSchema,updateSchema
}
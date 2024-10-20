const z=require('zod');


const signUpschema=z.object({
    username:z.string().min(3).max(15),
    lastName:z.string().min(3).max(20),
    firstName:z.string().min(3).max(20),
    password:z.string().min(8).max(15)
})

const signInSchema=z.object({
    username:z.string().min(3).max(15),
    password:z.string().min(8).max(15)
})

const tokenSchema=z.object({
    token:z.string()
})

const updateUserSchema=z.object({
    firstName:z.string().min(3).max(20).optional(),
    lastName:z.string().min(3).max(20).optional(),
    password:z.string().min(3).max(20).optional(),
})

module.exports={
    signUpschema,
    signInSchema,
    tokenSchema,
    updateUserSchema
}
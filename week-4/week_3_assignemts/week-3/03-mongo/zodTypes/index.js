const z=require('zod')

 const adminSchema=z.object({
    username:z.string().min(3).max(11),
    password:z.string().min(3).max(14)
})

 const userSchema=z.object({
    username:z.string().min(3).max(11),
    password:z.string().min(3).max(14)
})

 const CourseSchema=z.object({
    title:z.string().max(50),
    description:z.string().max(200),
    price:z.number().min(0),
    imageLink:z.string(),
})

module.exports={
    userSchema,adminSchema,CourseSchema
}
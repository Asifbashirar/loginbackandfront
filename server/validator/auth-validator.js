const {z}=require('zod')

const signUpSchema= z.object({
 username:z.string({required_error_message:"name is required"})
 .trim()
 .min(3,{msg:"name must be at least 3 characters"})
 .max(255,{msg:"name must not be more than 255 characters"}),

email:z.string({required_error_message:"name is required"})
.trim()
.min(3,{msg:"email must be at least 3 characters"})
.max(255,{msg:"email must not be more than 255 characters"}),

phone:z.string({required_error_message:"phone is required"})
.trim()
.min(11,{msg:"phone must be at least 11 characters"})
.max(20,{msg:"phone must not be more than 20 characters"}),

password:z.string({required_error_message:"name is required"})
.trim()
.min(6,{msg:"password must be at least 7 characters"})
.max(1024,{msg:"password must not be more than 1024 characters"})

})

// const loginSchema=z.object({
//  email:z.string({required_error_message:"name is required"})
// .trim()
// .min(3,{msg:"email must be at least 3 characters"})
// .max(255,{msg:"email must not be more than 255 characters"}),

// password:z.string({required_error_message:"name is required"})
// .trim()
// .min(6,{msg:"password must be at least 6 characters"})
// .max(1024,{msg:"password must not be more than 1024 characters"})

// })

module.exports=signUpSchema;
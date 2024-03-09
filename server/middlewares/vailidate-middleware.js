

const vailidate=(schema)=>async(req,res,next)=>{
 try {
  const parsebody=await schema.parseAsync(req.body)
  req.body=parsebody
  next()
} catch (err) {
 const message="fill the form properly"
 const extraDetails=err.errors[0].message
 const status=422
  // res.status(400).json({message:message})
  const error={
   message,
   status,
   extraDetails
   }
  next(error);
  console.log(error);
 }
}

module.exports=vailidate;
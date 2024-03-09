const contact = require('../models/contact-model');


const contactForm=async(req,res)=>{
 try {
  const response=req.body
  await contact.create(response)
 return res.status(200).json({msg:"msg send successfully"})
 } catch (error) {
  return res.status(201).json({msg:"msg not send"})
 }
}

module.exports=contactForm;
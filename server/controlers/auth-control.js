const User=require('../models/user-model')
const bcrypt=require('bcryptjs')

const home= async(req,res)=>{
 try {
  res.send('Hello World from home router');
 } catch (error) {
  res.send({msg:"Error"});
 }
}

const register = async(req, res)=>{
 try {
  console.log(req.body);
  const {username,email,phone,password} = req.body;
  
  const userExist=await User.findOne({email: email})
  
  if(userExist){
   return res.status(400).json({msg:"email already exist",user:{username,email,phone,password}})
  }
  // password ko secure aur complex krny k liye
  const saltRound=10
  const hashedPassword=await bcrypt.hash(password,saltRound)
  
  const userCreated= await User.create({
   username,
   email,
   phone,
   password:hashedPassword
  })

  res.status(200).json({
   msg:userCreated,
   token:await userCreated.genrateToken(),
   userId:userCreated._id.tostring(),
  })
  } catch (error) {
  // res.json({msg:"internal Error"});
  next(error);
 }
}

const login =async(req, res) => {
try {
const{email,password} = req.body;

const userExist=await User.findOne({email: email})
console.log(userExist);
if(!userExist) {
return res.status(404).json({msg:"User not found"})
}
const user=await bcrypt.compare(password, userExist.password)
if(user){
  res.status(201).json({
  msg:"login successful",
  token:await userExist.genrateToken(),
  userId:userExist._id.tostring(),
 })
}else{
 res.status(400).json({msg:"invalid password"})
}
} catch (error) {
 res.json({msg:" login internal Error"});
}
}

module.exports={home,register,login};
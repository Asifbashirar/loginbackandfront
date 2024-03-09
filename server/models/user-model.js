const mongoose= require('mongoose');
const jwt=require('jsonwebtoken');

const userSchema= new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  phone:{
   type:String,
   required:true
 },
  password:{
    type:String,
    required:true
  },
  isadmin:{
    type:Boolean,
    default:false
  }
});

userSchema.methods.genratetoken= async function() {
try {
  return jwt.sign({
    userId:this._id.tostring(),
    email:this.email,
    isadmin:this.isadmin
  },
  process.env.JWT_SECRET,
  { expiresIn: "30d"}
  )
} catch (error) {
  console.error(error);
}
}

const User= new mongoose.model('User',userSchema);

module.exports=User;
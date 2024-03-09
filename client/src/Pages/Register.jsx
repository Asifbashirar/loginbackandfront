import React, { useState } from 'react';

const Register = () => {
 const [user, setUser] = useState({
  username: '',
  email: '',
  phone: '',
  password: '',
 })
 ;
const handleInput = (e)=>{
let name=e.target.name
let value =e.target.value

setUser({...user, [name]:value})
}

const handleSubmit = (e)=>{
e.preventDefault()
console.log(user)
alert(user)
}

 return (
  <div className='flex justify-evenly'>
   <div className='mt-[70px]'>
    <img src="/images/Lovepik.png" alt="" className='h-[600px] w-[550px]' />
   </div>
   <div className='mt-[80px]'>
   <div>
    <h1 className='text-[white] text-5xl '>Registration Form</h1>
    <div>
     <br />
     <form onSubmit={handleSubmit}>
      <div>
       <label className='text-[white] p-1 text-[22px]' htmlFor="UserName">UserName</label>
       <br />
       <input className='p-1 pl-2 rounded-xl text-[22px] w-[350px] '
        type="text"
        name="username"
        placeholder='enter your name'
        id="username"
        required
        autoComplete='off'
        value={user.username}
        onChange={handleInput}
       />
      </div>
      
      <div className='mt-4'>
       <label className='text-[white] p-1 text-[22px]' htmlFor="Email">Email</label>
       <br />
       <input className='p-1 text-[22px] pl-2 rounded-xl w-[350px]'
        type="Email"
        name="email"
        placeholder='enter your email'
        id="email"
        required
        autoComplete='off'
        value={user.email}
        onChange={handleInput}

       />
      </div>
      <div className='mt-4' >
       <label className='text-[white] p-1 text-[22px]' htmlFor="Phone">Phone</label>
       <br />
       <input className='p-1 text-[22px] pl-2 rounded-xl w-[350px]'
        type="number"
        name="phone"
        placeholder='enter your number '
        id="phone"
        required
        autoComplete='off'
        value={user.phone}
        onChange={handleInput}

       />
      </div>
      <div className='mt-4' > 
       <label className='text-[white] p-1 text-[22px]' htmlFor="Password">Password</label>
       <br />
       <input className='p-1 text-[22px] pl-2 rounded-xl w-[350px]'
        type="password"
        name="password"
        placeholder='Password'
        id="password"
        required
        autoComplete='off'
        value={user.password}
        onChange={handleInput}

       />
      </div>
      <br />
      <div className='flex justify-center mt-4' >
       <button className='text-[white] text-[22px] bg-[blue] pt-1 pb-1 pr-[10px] pl-[10px] rounded-2xl hover:bg-[red] hover:text-[black] transition-colors duration-1000 ease-in' type='submit'>Register Now</button>
      </div>
     </form>
    </div>
   </div>
   </div>
   
  </div>
 );
};

export default Register;
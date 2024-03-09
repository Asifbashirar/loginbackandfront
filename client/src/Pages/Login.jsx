import React, { useState } from 'react';

const Login = () => {
const[login ,setLogin]=useState({
  email:'',
  password:''
  
})

const handleInput = (e) => {
  let name = e.target.name;
  let value = e.target.value;

  setLogin({ ...login, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(login);
  alert(login);
  
};

 return (
  <>
 <div className='flex  justify-evenly'>
  <div className='mt-[80px]'>
  <img src="/images/register.png" alt="" className='h-[400px] w-[500px]' />
  </div>
  
  <div className='mt-[100px]'>
  <div className='flex justify-center'>
    <h1 className='text-[white] text-5xl '>Login Form</h1>
    </div>
    <br />
    <form onSubmit={handleSubmit} >
      <div>
        <label className='text-[white] p-1 text-[22px]' htmlFor='Email'>Email</label>
        <br />
        <input className='p-1 text-[22px] pl-2 rounded-xl w-[350px] '
        type="email" 
        name="email" 
        placeholder='enter your email'
        id="email"
        required
        autoComplete='off'
        value={login.email} 
        onChange={handleInput} 
        />
      </div>
      <div className='mt-5'>
        <label className='text-[white] p-1 text-[22px]' htmlFor="Password">Password</label>
        <br />
        <input className='p-1 text-[22px] pl-2 rounded-xl w-[350px]'
        type="password"
        name="password"
        placeholder='enter your password'
        id="password"
        required
        autoComplete='off'
        value={login.password}
        onChange={handleInput}
        />
      </div>
      <div className='mt-8 flex justify-center mb-44'>
        <button type='submit' className='text-[white] text-[22px] bg-[blue] pt-1 pb-1 pr-[12px] pl-[12px] rounded-2xl hover:bg-[red] hover:text-[black] transition-colors duration-1000 ease-in '>Login</button>
      </div>
    </form>
  </div>
 </div>
 </>
);
};

export default Login;
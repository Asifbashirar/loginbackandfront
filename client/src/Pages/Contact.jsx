import React, { useState } from 'react';

const Contact = () => {
 const [contact ,setContact]=useState({
  username:'',
  email:'',
  message:''
 })
const handleInput=(e)=>{
let name = e.target.name
let value = e.target.value

setContact({...contact, [name]: value})
}
const handleSubmit=(e)=>{
 e.preventDefault()
 console.log(contact);
 alert(contact)
}
 return (
  <div>
  <div className='flex justify-evenly'>
   <div>
    <img src="/images/contact.png" alt="" />
   </div>
   <div>
 <div className='mt-[70px]'>
    <form onSubmit={handleSubmit}>
   <h1 className='text-[white] text-5xl '>Contact Us</h1>
   <br />
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
        value={contact.username}
        onChange={handleInput}
       />
      </div>
      <div className='mt-4'>
       <label className='text-[white] p-1 text-[22px]' htmlFor="Email">Email</label>
       <br />
       <input className='p-1 pl-2 rounded-xl text-[22px] w-[350px] '
        type="email"
        name="email"
        placeholder='enter your email'
        id="email"
        required
        autoComplete='off'
        value={contact.email}
        onChange={handleInput}
       />
      </div>
      <div className='mt-4'>
       <label className='text-[white] p-1 text-[22px]' htmlFor="Message">Message</label>
       <br />
       <textarea className='p-1 pl-2 rounded-xl text-[22px] w-[350px] '
        type="message"
        name="message"
        placeholder='type your message'
        id="message"
        required
        autoComplete='off'
        value={contact.message}
        onChange={handleInput}
       ></textarea>
      </div>
      <div className='flex justify-center mt-4 mb-24' >
       <button className='text-[white] text-[22px] bg-[blue] pt-1 pb-1 pr-[10px] pl-[10px] rounded-2xl hover:bg-[red] hover:text-[black] transition-colors duration-1000 ease-in' type='submit'>Submit</button>
      </div>
  </form>
  </div>
  </div>
  </div>
  <div>
  <section>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77180.46519376391!2d70.95719546134418!3d31.250433382857462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3925b7e51e1e0ff3%3A0x608d3a244ecd1c4c!2sChak%2082%20TDA%2C%20Layyah%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709626179331!5m2!1sen!2s" 
  width="100%" height="300"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </section>
  </div>
  
  </div>
 );
};

export default Contact;
import React from 'react';
const Home = () => {
 return (
  <div>
   <div className=' flex gap-[600px] mt-8'>
   <img src="/images/welcome-7401530_1280.png" alt="" className='h-[300px] '/>
   <img src="/images/house.png" alt="" className='h-[300px] w-[400px]'/>
   </div> 
  <div className='flex justify-center mt-0'>
  <div className='text-[white] w-[800px]'>
   <h1 className='text-[53px]'>Wellcome to Khan's college</h1>
   <p> Khan's College is a vibrant community of scholars, innovators, and dreamers. We are committed to providing a nurturing environment where students can thrive, explore their interests, and achieve their academic and personal goals. Our dedicated faculty and staff are here to support you every step of the way.</p>
   <p>Whether you're a prospective student, a current student, or a member of our community, we invite you to explore our website to learn more about our programs, events, and opportunities. We look forward to welcoming you to Khan's College! </p>
  </div>
  </div>
  <div className='mt-[30px] flex justify-center gap-3 mb-14'>
  <a href="/Contact" >
   <button className='bg-[blue] text-[white] text-[15px] w-[130px] h-[50px] rounded-xl hover:bg-[red] hover:text-[black] transition-colors duration-1000 ease-in '>
    Connect Now
   </button>
  </a>
  <a href="/Service" >
   <button className='bg-[blue] text-[white] text-[15px] w-[130px] h-[50px] rounded-xl hover:bg-[red] hover:text-[black] transition-colors duration-1000 ease-in'>
    Learn More
   </button>
  </a>
  </div>
  
  </div>
 );
};

export default Home;
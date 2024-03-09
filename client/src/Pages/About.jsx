import React from 'react';

const About = () => {
 return (
  <div className="flex flex-col items-center justify-center min-h-screen ">
  <div className="text-center">
    <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
    <p className="text-lg text-white mb-8 ">
      Khan's College is a vibrant community of scholars, innovators, and dreamers. We are committed to providing a nurturing environment where students can thrive, explore their interests, and achieve their academic and personal goals. Our dedicated faculty and staff are here to support you every step of the way.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <div className="w-64 h-64">
        <img src="/images/abbb.jpg" alt="College Building" className="w-full h-full object-cover rounded-lg shadow-lg" />
      </div>
      <div className="w-64 h-64">
        <img src="/images/aac.jpg" alt="Campus Life" className="w-full h-full object-cover rounded-lg shadow-lg" />
      </div>
    </div>
    <p className="text-lg text-white mb-8 ">
      Our college is renowned for its state-of-the-art facilities, including modern classrooms, a well-equipped library, and a variety of sports and recreational facilities. We pride ourselves on our commitment to academic excellence and personal development.
    </p>
    <a href="/Contact" className="bg-[blue] hover:bg-[red] hover:text-[black] text-white font-bold py-2 px-4 rounded transition-colors duration-1000 ease-in">
      Contact Us
    </a>
  </div>
</div>
 );
};

export default About;

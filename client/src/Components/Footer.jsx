import React from 'react';

export const Footer = () => {
 return (
  <footer className=" bg-gradient-to-r from-purple-900 to-blue-800 text-white py-6">
 <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h5 className="text-xl font-bold mb-2">Khan's College</h5>
        <p className="text-sm">Karor Road Fateh Pur, Khan'College</p>
        <p className="text-sm">Email: asifbashirarain@gmail.com</p>
        <p className="text-sm">Phone: +92 3016310394</p>
      </div>
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h5 className="text-xl font-bold mb-2">Quick Links</h5>
        <ul className="list-none">
          <li className="mb-2"><a href="/" className="text-sm">Home</a></li>
          <li className="mb-2"><a href="/About" className="text-sm">About Us</a></li>
          <li className="mb-2"><a href="/Contact" className="text-sm">Contact</a></li>
          <li className="mb-2"><a href="/Service" className="text-sm">Services</a></li>
        </ul>
      </div>
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h5 className="text-xl font-bold mb-2">Follow Us</h5>
        <p className="text-sm">Stay connected with us on social media:</p>
        <div className=" ">
          <li className="mb-2"><a href="https://www.facebook.com/" className="text-sm">Facebook</a></li>
          <li className="mb-2"><a href="#" className="text-sm">Twitter</a></li>
          <li className="mb-2"><a href="https://www.instagram.com/" className="text-sm">Instagram</a></li>
          
        </div>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-6 pt-6">
      <p className="text-center text-sm">© {new Date().getFullYear()} Khan's College. All rights reserved.</p>
    </div>
 </div>
</footer>

 );
};
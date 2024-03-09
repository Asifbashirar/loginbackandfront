import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
 return (
  <header className='bg-gradient-to-r from-blue-800 to-purple-900'>
   <div className='text-[Aqua] flex justify-around items-center'>
    <div className='hover:text-[red] text-[38px]'><NavLink to="/" >Khans'College</NavLink></div>
    <nav className=''>
     <ul className='flex gap-24 text-[18px] '>
      <li className='hover:text-[red] '>
       <NavLink to="/">Home</NavLink>
      </li>
      <li className='hover:text-[red]'>
       <NavLink to="/About">About</NavLink>
       </li>
      <li className='hover:text-[red]'>
       <NavLink to="/Contact">Contact</NavLink>
       </li>
      <li className='hover:text-[red]'>
       <NavLink to="/Service">Service</NavLink>
       </li>
      <li className='hover:text-[red]'>
       <NavLink to="/Register">Register</NavLink>
       </li>
       <li className='hover:text-[red]'>
       <NavLink to="/Login">Login</NavLink>
       </li>
     </ul>
    </nav>
   </div>
  </header>
 );
};

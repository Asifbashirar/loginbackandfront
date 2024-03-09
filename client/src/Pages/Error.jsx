import React from 'react';

export const Error = () => {
 return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <div className="text-center">
    <h1 className=" font-bold text-gray-800 text-[250px] leading-[300px]">404</h1>
    <p className="text-4xl text-gray-600 ">Oops! 😕 The page you are looking for does not exist.</p>
    <a href="/" className="mt-6 text-blue-500 hover:text-blue-700 text-2xl">Go Home </a>
  </div>
</div>
 );
};


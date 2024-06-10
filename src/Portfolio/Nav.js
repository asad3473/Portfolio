import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className='bg-gray-900 w-[100vw] px-6 fixed z-50 '>
        <nav className='flex justify-between items-center h-14'>
          <h1 className='text-neutral-200 font-bold text-2xl pl-4'>Portfolio</h1>
          <div className='md:hidden cursor-pointer pr-4' onClick={toggleMenu}>
            {isOpen ? (
              <svg className='h-6 w-6 relative top-2 left-2 z-[999] text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              <svg className='h-6 w-6 relative top-2 left-2 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
              </svg>
            )}
          </div>
          <ul  className={`md:flex ${isOpen ? 'flex  flex-col md:flex-row bg-slate-600 absolute  w-full items-center left-0 top-0  justify-center  duration-500 py-4' : ' flex  md:flex-row  absolute   w-full md:w-max    md:relative -top-[300px] md:top-0 duration-500'} gap-10`}>
            <li>
              <Link to='/home' className='text-neutral-200 rounded-xl hover:bg-black px-2 py-2 block'>
                <i className='fa-solid fa-house'></i> Home
              </Link>
            </li>
            <li>
              <Link to='/catalog' className='text-neutral-200 rounded-xl hover:bg-black px-2 py-2 block'>
                <i className='fa-brands fa-servicestack'></i> Services
              </Link>
            </li>
            <li>
              <Link to='/resume' className='text-neutral-200 rounded-xl hover:bg-black px-2 py-2 block'>
                <i className='fa-brands fa-dropbox'></i> Resume
              </Link>
            </li>
            <li>
              <Link to='/contact' className='text-neutral-200 rounded-xl hover:bg-black px-2 py-2 block'>
                <i className='fa-regular fa-address-book'></i> Contact
              </Link>
            </li>
          </ul>
          {/* <div className='md:flex items-center'>
            <input type='search' name='' id='' className='border-none outline-none py-2 px-2' />
            <button className='bg-violet-500 text-white font-semibold py-2 px-2 shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>
              Search
            </button>
          </div> */}
        </nav>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState('hidden');
    return (
        <div className='absolute left-0 top-0 right-0 z-10 container mx-auto'>
            <div className="grid grid-cols-2">
                <div>
                    <h2 className='py-5 font-bold'>Doctor Portal</h2>
                </div>
                <div className='flex justify-self-end items-center'>
                    <Bars3Icon onClick={(e) => setToggleMenu('block')} className={`${(toggleMenu === 'hidden') ? 'block' : 'hidden'} w-6 lg:hidden`}/>
                    <XMarkIcon onClick={(e) => setToggleMenu('hidden')} className={`${toggleMenu} w-6 lg:hidden`}/>
                    <div className={`${toggleMenu} absolute w-full left-0 top-16 shadow bg-white lg:block lg:relative lg:top-0 lg:shadow-none lg:transparent`}>
                        <a className='p-3 cursor-pointer hover:bg-gray-700 hover:rounded hover:text-gray-300 block lg:inline-block'>Home</a>
                        <a className='p-3 cursor-pointer hover:bg-gray-700 hover:rounded hover:text-gray-300 block lg:inline-block'>About</a>
                        <a className='p-3 cursor-pointer hover:bg-gray-700 hover:rounded hover:text-gray-300 block lg:inline-block'>Appointment</a>
                        <a className='p-3 cursor-pointer hover:bg-gray-700 hover:rounded hover:text-gray-300 block lg:inline-block'>Reviews</a>
                        <a className='p-3 cursor-pointer hover:bg-gray-700 hover:rounded hover:text-gray-300 block lg:inline-block'>Contact Us</a>
                        <a className='p-3 cursor-pointer hover:bg-gray-700 hover:rounded hover:text-gray-300 block lg:inline-block'>Login</a>
                    </div>
                </div>
                {/* <div className='flex justify-self-end items-center'>
                    <Bars3Icon className='w-6 lg:hidden'/>
                    <div className='hidden lg:block'>
                        <a className='p-3 cursor-pointer hover:bg-gray-700 hover:rounded hover:text-gray-300'>Home</a>
                        <a className='p-3 cursor-pointer hover:bg-gray-700 hover:rounded hover:text-gray-300'>About</a>
                        <a className='p-3 cursor-pointer hover:bg-gray-700 hover:rounded hover:text-gray-300'>Appointment</a>
                        <a className='p-3 cursor-pointer hover:bg-gray-700 hover:rounded hover:text-gray-300'>Reviews</a>
                        <a className='p-3 cursor-pointer hover:bg-gray-700 hover:rounded hover:text-gray-300'>Contact Us</a>
                        <a className='p-3 cursor-pointer hover:bg-gray-700 hover:rounded hover:text-gray-300'>Login</a>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';

const Navbar = () => {
    return (
        <div className='absolute left-0 top-0 right-0 container mx-auto'>
            <div className="grid grid-cols-2">
                <div><h2 className='p-5'>Doctor Portal</h2></div>
                <div className='flex justify-self-end items-center'>
                    <a className='p-3 cursor-pointer hover:bg-gray-700 hover:rounded hover:text-gray-300'>Home</a>
                    <a className='p-3 cursor-pointer hover:bg-gray-700 hover:rounded hover:text-gray-300'>About</a>
                    <a className='p-3 cursor-pointer hover:bg-gray-700 hover:rounded hover:text-gray-300'>Appointment</a>
                    <a className='p-3 cursor-pointer hover:bg-gray-700 hover:rounded hover:text-gray-300'>Reviews</a>
                    <a className='p-3 cursor-pointer hover:bg-gray-700 hover:rounded hover:text-gray-300'>Contact Us</a>
                    <a className='p-3 cursor-pointer hover:bg-gray-700 hover:rounded hover:text-gray-300'>Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';

const Textarea
 = ({type, placeholder, className}) => {
    return (
        <div>
            <textarea className={`placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm ${className}`} placeholder={placeholder} type={type} name="search"></textarea>
        </div>
    );
};

export default Textarea
;
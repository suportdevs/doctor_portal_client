import React from 'react';

const Button = ({children, handleClick}) => {
    return (
        <div>
            <button className='p-3 rounded text-white bg_color mt-5' onClick={handleClick}>{children}</button>
        </div>
    );
};

export default Button;
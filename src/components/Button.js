import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className='p-3 rounded text-white bg_color mt-5'>{children}</button>
        </div>
    );
};

export default Button;
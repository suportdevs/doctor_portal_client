import React from 'react';

const OurServicesCard = ({icon, className, children}) => {
    return (
        <div className={className}>
            <div>
                <img src={icon} alt="" className='mx-auto w-20'/>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default OurServicesCard;
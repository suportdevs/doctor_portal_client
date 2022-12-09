import React from 'react';

const PatientsReviewCard = ({icon, className, children}) => {
    return (
        <div className={className}>
            <div>
                {children}
            </div>
            <div className='grid grid-cols-4 gap-5 items-center mt-5'>
                <div>
                <img src={icon} alt="" className='mx-auto w-12'/>
                </div>
                <div className='col-span-3'>
                    <h2 className='font-bold'>Winson Herry</h2>
                    <p>California</p>
                </div>
            </div>
        </div>
    );
};

export default PatientsReviewCard;
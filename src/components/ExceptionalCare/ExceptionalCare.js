import React from 'react';
import treatmentImg from "../../assets/images/treatment.png";

const ExceptionalCare = () => {
    return (
        <div className='container mx-auto mt-20 mb-44'>
            <div className="grid grid-cols-2 gap-32 items-center">
                <div className='place-self-end'>
                    <img src={treatmentImg} alt="" className='w-96' />
                </div>
                <div className='w-96'>
                    <h1 className='font-bold text-5xl'>Exceptional Dental Care, on Your Terms</h1>
                    <p className='my-10'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className='p-3 rounded text-white bg_color'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalCare;
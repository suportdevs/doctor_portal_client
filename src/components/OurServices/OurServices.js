import React from 'react';
import OurServicesCard from './OurServicesCard';
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";

const OurServices = () => {
    return (
            <div className="container mx-auto text-center">
                <div className='my-10'>
                    <h3 className='font-bold text_color'>OUR SERVICES</h3>
                    <h1 className='text-3xl'>Services We Provide</h1>
                </div>
                <div className='grid grid-cols-3 gap-10'>
                    <OurServicesCard icon={fluoride} className='shadow-lg rounded p-5'>
                        <h2 className='font-bold text-gray-700 mt-5'>Fluoride Treatment</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </OurServicesCard>
                    <OurServicesCard icon={cavity} className='shadow-lg rounded p-5'>
                        <h2 className='font-bold text-gray-700 mt-5'>Cavity Filling</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </OurServicesCard>
                    <OurServicesCard icon={whitening} className='shadow-lg rounded p-5'>
                        <h2 className='font-bold text-gray-700 mt-5'>Teeth Whitening</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </OurServicesCard>
                </div>
            </div>
    );
};

export default OurServices;
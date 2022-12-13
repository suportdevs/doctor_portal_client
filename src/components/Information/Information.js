import React from 'react';
import { faClock, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import InformationCard from "./InformationCard";

const Information = () => {
    return (
        <div className='container mx-auto'>
            <div className="lg:grid lg:grid-cols-3 lg:gap-10 text-white">
            <InformationCard icon={faClock} className='bg_color py-10 px-5 rounded-lg'>
                <h3 className='text-2xl font-bold'>Opening Hours</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </InformationCard>
            <InformationCard icon={faLocationDot} className='py-10 px-5 my-10 lg:my-0 rounded-lg bg-gray-700'>
            <h3 className='text-2xl font-bold'>Visit our location</h3>
                            <p>North side Town, New York</p>
            </InformationCard>
            <InformationCard icon={faPhoneVolume} className='bg_color py-10 px-5 rounded-lg'>
            <h3 className='text-2xl font-bold'>Contract us now</h3>
                            <p>+088 01725836914</p>
            </InformationCard>                
            </div>
        </div>
    );
};

export default Information;
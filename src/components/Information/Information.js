import React from 'react';
import { faClock, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import InformationCard from "./InformationCard";

const Information = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-3 gap-10 text-white">
            <InformationCard icon={faClock} className='bg-gradient-to-r from-cyan-300 to-cyan-400 py-10 px-5 rounded-lg'>
                <h3 className='text-2xl font-bold'>Opening Hours</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </InformationCard>
            <InformationCard icon={faLocationDot} className='py-10 px-5 rounded-lg bg-gray-700'>
            <h3 className='text-2xl font-bold'>Visit our location</h3>
                            <p>North side Town, New York</p>
            </InformationCard>
            <InformationCard icon={faPhoneVolume} className='bg-gradient-to-r from-cyan-300 to-cyan-400 py-10 px-5 rounded-lg'>
            <h3 className='text-2xl font-bold'>Contract us now</h3>
                            <p>+088 01725836914</p>
            </InformationCard>                
            </div>
        </div>
    );
};

export default Information;
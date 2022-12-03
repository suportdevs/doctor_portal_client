import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

const InformationCard = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-3 gap-10 text-white">
                <div className='bg-gradient-to-r from-cyan-300 to-cyan-400 py-10 px-5 rounded-lg'>
                    <div className="grid grid-cols-4 gap-2 flex items-center">
                        <div>
                            <FontAwesomeIcon icon={faClock} className="text-7xl"/>
                        </div>
                        <div className='col-span-3'>
                            <h3 className='text-2xl font-bold'>Opening Hours</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-700 py-10 px-5 rounded-lg'>
                    <div className="grid grid-cols-4 gap-2 flex items-center">
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} className="text-7xl"/>
                        </div>
                        <div className='col-span-3'>
                            <h3 className='text-2xl font-bold'>Visit our location</h3>
                            <p>North side Town, New York</p>
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-cyan-300 to-cyan-400 py-10 px-5 rounded-lg'>
                    <div className="grid grid-cols-4 gap-2 flex items-center">
                        <div>
                            <FontAwesomeIcon icon={faPhoneVolume} className="text-7xl"/>
                        </div>
                        <div className='col-span-3'>
                            <h3 className='text-2xl font-bold'>Contact us now</h3>
                            <p>+000 2583697411</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformationCard;
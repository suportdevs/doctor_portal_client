import React from 'react';
import welcomeBg from "../../assets/images/bg.png";
import chairBg from "../../assets/images/chair.png";

const Welcome = () => {
    return (
        <div className="welcome-warpper-area" style={{backgroundImage: `url(${welcomeBg})`}}>
            <div className="welcome-area container mx-auto">
                <div className="py-32 grid grid-cols-2 gap-20 flex items-center">
                    <div>
                        <h1 className='text-5xl font-bold text-gray-700'>Your New Smile Starts Here</h1>
                        <p className='py-10 text-gray-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className='p-3 rounded text-white bg-gradient-to-r from-cyan-300 to-cyan-400'>Get Started</button>
                    </div>
                    <div>
                        <img src={chairBg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
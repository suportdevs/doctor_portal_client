import React from 'react';
import welcomeBg from "../../assets/images/bg.png";
import chairBg from "../../assets/images/chair.png";
import Button from '../Button';

const Welcome = () => {
    return (
        <div className="relative welcome-warpper-area " style={{backgroundImage: `url(${welcomeBg})`}}>
            <div className="welcome-area container mx-auto">
                <div className="py-20 md:py-32 flex flex-col-reverse text-center md:grid md:grid-cols-2 md:gap-20 md:flex  items-center">
                    <div>
                        <h1 className='pt-5 md:pt-0 text-5xl font-bold text-gray-700'>Your New Smile Starts Here</h1>
                        <p className='py-5 md;py-10 text-gray-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <Button>Get Started</Button>
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
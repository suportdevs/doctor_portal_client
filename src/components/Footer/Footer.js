import React from 'react';
import footerBg from "../../assets/images/footer.png";

const Footer = () => {
    return (
        <div style={{backgroundImage: `url(${footerBg})`}} className='bg-center'>
            <div className="container mx-auto text-center lg:text-left">
                <div className='lg:grid lg:grid-cols-3 justity-space py-20'>
                    <div>
                        <h3 className="font-bold text-gray-400">SERVICES</h3>
                        <p>Emergency Checkup</p>
                        <p>Monthly Checkup</p>
                        <p>Weekly Checkup</p>
                        <p>Deep Checkup</p>
                    </div>
                    <div className='my-10 lg:my-0'>
                        <h3 className="font-bold text-gray-400">ORAL HEALTH</h3>
                        <p>Fluoride Treatment</p>
                        <p>Cavity Filling</p>
                        <p>Teath Whitening</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-400">OUR ADDRESS</h3>
                        <p>New York - 101010 Hudson</p>
                    </div>
                </div>
                <div className='py-10 text-center'>
                    <p>Copyright 2022 All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
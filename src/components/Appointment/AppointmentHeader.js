import React from 'react';
import welcomeBg from "../../assets/images/bg.png";
import chairBg from "../../assets/images/chair.png";
import Calendar from 'react-calendar';
import Navbar from '../Navbar/Navbar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleSelectedDate, date}) => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="relative welcome-warpper-area " style={{backgroundImage: `url(${welcomeBg})`}}>
                <div className="welcome-area container mx-auto">
                    <div className="py-20 lg:py-32 flex flex-col-reverse text-center lg:grid lg:grid-cols-2 lg:gap-20 lg:flex  items-center">
                        <div className='justify-items-end mt-10 lg:mt-0'>
                            <Calendar onChange={handleSelectedDate} value={date} className='rounded shadow-lg border-transparent' style={{borderColor: 'white'}} />
                        </div>
                        <div>
                            <img src={chairBg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentHeader;
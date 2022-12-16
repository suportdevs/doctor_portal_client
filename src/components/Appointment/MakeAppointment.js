import React from 'react';
import appointmentBg from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";
import Button from '../Button';

const MakeAppointment = () => {
    return (
        <div style={{backgroundImage: `url(${appointmentBg})`}}>
            <div className="container mx-auto lg:grid lg:grid-cols-2 items-center text-white">
                <div className='hidden lg:block'>
                    <img src={doctor} alt="" className='-mt-44' />
                </div>
                <div className='lg:gap-32 py-10'>
                    <h3 className="font-bold text_brand">Appointment</h3>
                    <h1 className="text-3xl my-5">Make an appointment Today</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;
import React from 'react';
import appointmentBg from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";

const MakeAppointment = () => {
    return (
        <div style={{backgroundImage: `url(${appointmentBg})`}}>
            <div className="container mx-auto grid grid-cols-2 gap-32 items-center text-white">
                <div>
                    <img src={doctor} alt="" className='-mt-44' />
                </div>
                <div>
                    <h3 className="font-bold text_color">Appointment</h3>
                    <h1 className="text-3xl my-5">Make an appointment Today</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className='p-3 rounded text-white bg_color mt-5'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;
import React, { useState } from 'react';
import AppointmentHeader from '../components/Appointment/AppointmentHeader';
import AvaiableAppointments from '../components/AvaiableAppointments/AvaiableAppointments';
import Footer from '../components/Footer/Footer';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleSelectedDate = date => {
        console.log(date);
        setSelectedDate(date);
    }
    return (
        <div>
            <AppointmentHeader handleSelectedDate={handleSelectedDate} date={selectedDate}></AppointmentHeader>
            <AvaiableAppointments date={selectedDate}></AvaiableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;
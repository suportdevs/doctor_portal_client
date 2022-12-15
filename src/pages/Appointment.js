import React, { useState } from 'react';
import AppointmentHeader from '../components/Appointment/AppointmentHeader';
import BookingAppointment from '../components/BookingAppointment/BookingAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleSelectedDate = date => {
        console.log(date);
        setSelectedDate(date);
    }
    return (
        <div>
            <AppointmentHeader handleSelectedDate={handleSelectedDate}></AppointmentHeader>
            <BookingAppointment date={selectedDate}></BookingAppointment>
        </div>
    );
};

export default Appointment;
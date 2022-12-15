import React from 'react';
import Button from '../Button';

const BookingAppointmentCard = ({name, time, space, date}) => {
    return (
        <div className='p-10 mb-5 shadow-lg'>
            <h2 className='text_color text-2xl font-bold'>{name}</h2>
            <p className='font-bold'>{time}</p>
            <p>{space} Avaiable Space</p>
            <Button>Book Appointment</Button>
        </div>
    );
};

export default BookingAppointmentCard;
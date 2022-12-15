import React from 'react';

const BookingAppointment = ({date}) => {
    return (
        <div className='container mx-auto text-center mt-10'>
            <h1 className='text-3xl text_color'>Available Services on {date.toDateString()}</h1>
            <p>Please select a service.</p>
        </div>
    );
};

export default BookingAppointment;
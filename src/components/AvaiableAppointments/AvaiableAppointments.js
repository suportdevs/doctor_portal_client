import React from 'react';
import BookingAppointmentCard from './BookingAppointmentCard';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: 20,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price: 15,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: 17,
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        price: 19,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        price: 25,
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        price: 35,
        space: 10,
    },
]

const AvaiableAppointments = ({date}) => {
    return (
        <div className='container mx-auto text-center mt-10'>
            <h1 className='text-3xl text_color font-bold'>Available Services on {date.toDateString()}</h1>
            <p>Please select a service.</p>
            <div className="lg:grid lg:grid-cols-3 lg:gap-10 mt-10">
                {
                    bookings.map(booking => <BookingAppointmentCard key={booking.id} name={booking.name}  time={booking.time} space={booking.space} date={date}></BookingAppointmentCard>)
                }        
            </div>
        </div>
    );
};

export default AvaiableAppointments;
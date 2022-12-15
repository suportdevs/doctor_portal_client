import React from 'react';
import { useState } from 'react';
import Button from '../Button';
import BookingForm from './BookingForm';

const BookingAppointmentCard = ({name, time, space, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
    return (
        <div className='p-10 mb-5 shadow-lg'>
            <h2 className='text_color text-2xl font-bold'>{name}</h2>
            <p className='font-bold'>{time}</p>
            <p>{space} Avaiable Space</p>
            <Button handleClick={openModal}>Book Appointment</Button>
            <BookingForm modalIsOpen={modalIsOpen} closeModal={closeModal} title={name}></BookingForm>
        </div>
    );
};

export default BookingAppointmentCard;
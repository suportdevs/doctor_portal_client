import React, { useEffect } from 'react';
import DateByAppointment from "../DateByAppointment"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useAppointmentsByDateMutation } from '../../../store/apiSlice';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [getAppointmentByDate, {data, isLoading, isError, isSuccess}] = useAppointmentsByDateMutation();
    const handleSelectedDate = date => {
        setSelectedDate(date);
    }
    useEffect(() => {
        getAppointmentByDate({date: selectedDate}).unwrap();
    }, [selectedDate]);

    return (
        <div className="container mx-auto ">
                    <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                        <div className="w-full bg-white rounded-lg shadow">
                        <Calendar onChange={handleSelectedDate} value={selectedDate} className='rounded shadow-lg border-transparent p-5' style={{borderColor: 'white'}} />
                        </div>
                        <div className="w-full col-span-2 bg-white rounded-lg shadow">
                            <DateByAppointment appointments={data} isLoading={isLoading} isError={isError} isSuccess={isSuccess}></DateByAppointment>
                        </div>
                    </div>
                </div>
    );
};

export default Appointment;
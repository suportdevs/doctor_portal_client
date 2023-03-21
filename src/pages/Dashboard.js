import React, { useEffect } from 'react';
import Navbar from "../components/Navbar/Navbar";
import Sidebar from '../components/Sidebar/Sidebar';
import DateByAppointment from '../components/Appointment/DateByAppointment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useAppointmentsByDateMutation } from '../store/apiSlice';

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [getAppointmentByDate, result, data] = useAppointmentsByDateMutation();
    const handleSelectedDate = date => {
        setSelectedDate(date);

    }
    useEffect(() => {
        getAppointmentByDate({date: selectedDate}).unwrap();
    }, [selectedDate]);
    
    console.log(result);
    console.log(result.data);

    return (
        <>
          <Navbar></Navbar>
          <div className="mt-16 grid grid-cols-12">
            <Sidebar></Sidebar>
            <div className="col-span-10 bg-slate-200 p-5">
                
                <div className="container mx-auto ">
                    <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                        <div className="w-full bg-white rounded-lg shadow">
                        <Calendar onChange={handleSelectedDate} value={selectedDate} className='rounded shadow-lg border-transparent p-5' style={{borderColor: 'white'}} />
                        </div>
                        <div className="w-full col-span-2 bg-white rounded-lg shadow">
                            <DateByAppointment></DateByAppointment>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    );
};

export default Dashboard;
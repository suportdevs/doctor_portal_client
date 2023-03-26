import React, { useEffect } from 'react';
import Navbar from "../components/Navbar/Navbar";
import Sidebar from '../components/Sidebar/Sidebar';
import Appointment from '../components/Dashboard/Appontment/Appointment';

const Dashboard = () => {
    

    return (
        <>
          <Navbar></Navbar>
          <div className="mt-16 grid grid-cols-12">
            <Sidebar></Sidebar>
            <div className="col-span-10 bg-slate-200 p-5">
                
                <Appointment></Appointment>
                
            </div>
          </div>
        </>
    );
};

export default Dashboard;
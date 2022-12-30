import React from 'react';
import Navbar from "../Navbar/Navbar";

const DashboardLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default DashboardLayout;
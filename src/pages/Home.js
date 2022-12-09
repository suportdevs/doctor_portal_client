import React from 'react';
import Header from '../components/Header/Header';
import Information from '../components/Information/Information';
import OurServices from '../components/OurServices/OurServices';
import ExceptionalCare from '../components/ExceptionalCare/ExceptionalCare';
import MakeAppointment from '../components/Appointment/MakeAppointment';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Information></Information>
            <OurServices></OurServices>
            <ExceptionalCare></ExceptionalCare>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;
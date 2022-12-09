import React from 'react';
import Header from '../components/Header/Header';
import Information from '../components/Information/Information';
import OurServices from '../components/OurServices/OurServices';
import ExceptionalCare from '../components/ExceptionalCare/ExceptionalCare';
import MakeAppointment from '../components/Appointment/MakeAppointment';
import PatientsReview from '../components/PatientsReview/PatientsReview';
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Information></Information>
            <OurServices></OurServices>
            <ExceptionalCare></ExceptionalCare>
            <MakeAppointment></MakeAppointment>
            <PatientsReview></PatientsReview>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;
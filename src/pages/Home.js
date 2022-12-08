import React from 'react';
import Header from '../components/Header/Header';
import Information from '../components/Information/Information';
import OurServices from '../components/OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Information></Information>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;
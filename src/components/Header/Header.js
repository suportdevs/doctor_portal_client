import React from 'react';
import Navbar from '../Navbar/Navbar';
import Welcome from '../Welcome/Welcome';

const Header = () => {
    return (
        <>
            <Navbar></Navbar>
            <Welcome></Welcome>
        </>
    );
};

export default Header;
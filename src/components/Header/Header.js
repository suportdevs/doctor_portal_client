import React from 'react';
import Navbar from '../Navbar/Navbar';
import Welcome from '../Welcome/Welcome';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Welcome></Welcome>
        </div>
    );
};

export default Header;
import React from 'react';
import appointmentBg from "../../assets/images/appointment.png";
import Input from '../Input';
import Textarea from '../Textarea';
import Button from '../Button';

const ContactUs = () => {
    return (
        <div style={{backgroundImage: `url(${appointmentBg})`}}>
            <div className="container mx-auto lg:w-96 py-20 text-center text-white">
                <div>
                    <h3 className="font-bold text_color">Contact Us</h3>
                    <h1 className="text-3xl mb-5">Stay connected with us</h1>
                    <Input type="email" placeholder="Email Address"></Input>
                    <Input type="text" placeholder="Subject" className='my-5'></Input>
                    <Textarea placeholder='Your message'></Textarea>
                    <Button>Submit</Button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import Button from '../Button';
import { useStoreAppointmentMutation } from '../../store/apiSlice';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const BookingForm = ({title, modalIsOpen, closeModal, date}) => {
    const [storeAppointment] = useStoreAppointmentMutation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = appointmentObj => {
        storeAppointment(appointmentObj).unwrap();
        closeModal();
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='w-96 text-center'>
                    <h2 className='text_brand text-2xl font-bold '>{title}</h2>
                    <p>{date.toDateString()}</p>
                    {/* <button onClick={closeModal}>close</button> */}
                    <form onSubmit={handleSubmit(onSubmit)} className='text-start'>
                        <input className='my-2 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' placeholder='Your Name' type='text' name='name' {...register("name", { required: true })}/>
                        {errors.name && <span className='text-red-500'>This field is required</span>}

                        <input className='my-2 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' placeholder='Phone Number' type='text' name='phone' {...register("phone", { required: true, min:11 })}/>
                        {errors.phone && <span className='text-red-500'>This field is required</span>}

                        <input className='my-2 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' placeholder='Email' type='text' name='email' {...register("email", { required: true })}/>
                        {errors.email && <span className='text-red-500'>This field is required</span>}

                        <select className='my-2 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' name='gender' {...register("gender", { required: true })}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {errors.gendar && <span className='text-red-500'>This field is required</span>}

                        <input className='my-2 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' placeholder='Age' type='number' name='age' {...register("age", { required: true })}/>
                        {errors.age && <span className='text-red-500'>This field is required</span>}

                        <input className='my-2 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' placeholder='Weight' type='number' name='weight' {...register("weight", { required: true })}/>
                        {errors.weight && <span className='text-red-500'>This field is required</span>}
                        
                        <div className='text-center'>
                            <Button >Send</Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default BookingForm;
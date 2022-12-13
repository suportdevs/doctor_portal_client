import React from 'react';
import PatientsReviewCard from './PatientsReviewCard';
import cavity from "../../assets/images/people1.png";
import fluoride from "../../assets/images/people2.png";
import whitening from "../../assets/images/people3.png";

const PatientsReview = () => {
    return (
            <div className="container mx-auto text-center my-20">
                <div className='my-10'>
                    <h3 className='font-bold text_color'>Testimonial</h3>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <div className='lg:grid lg:grid-cols-3 lg:gap-10'>
                    <PatientsReviewCard icon={fluoride} className='shadow-lg rounded p-5 text-start'>
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </PatientsReviewCard>
                    <PatientsReviewCard icon={cavity} className='shadow-lg rounded p-5 text-start'>
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </PatientsReviewCard>
                    <PatientsReviewCard icon={whitening} className='shadow-lg rounded p-5 text-start'>
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </PatientsReviewCard>
                </div>
            </div>
    );
};

export default PatientsReview;
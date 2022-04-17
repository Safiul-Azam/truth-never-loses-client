import React from 'react';
import './AboutMe.css'
import lawyer from '../../../images/lawyer.png'
import signature from '../../../images/signature.png'


const AboutMe = () => {
    return (
        <div className='about-me container'>
            <h2 className='text-center line mb-5'>About Me</h2>
            <div className='d-flex align-items-center row'>
                <div className=' col-lg-6 col-md-4 col-sm-12 mb-3'>
                    <img className='img-fluid' src={lawyer} alt="" />
                </div>
                <div className='col-lg-6 col-md-4 col-sm-12'>
                    <h3>I'm well-wisher for you</h3>
                    <p>This is <strong>Michael Cowen</strong>. With 25 years of experience in low and justice, i am focused on delivering quality and value to my clients. i achieve this through practical and innovative legal solutions that help my clients. Everyone deserves support on the way to justice.</p>
                    <img src={signature} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
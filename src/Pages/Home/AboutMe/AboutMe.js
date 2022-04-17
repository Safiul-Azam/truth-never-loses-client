import React from 'react';
import './AboutMe.css'
import lawyer from '../../../images/lawyer.png'
import signature from '../../../images/signature.png'


const AboutMe = () => {
    return (
        <div className='About-me container'>
            <h2 className='text-center'>About Me</h2>
            <div className='d-flex align-items-center'>
                <div className='w-50'>
                    <h3>I'm well-wisher for you</h3>
                    <p> With 25 years of experience in low and justice, i am focused on delivering quality and value to my clients. i achieve this through practical and innovative legal solutions that help my clients. Everyone deserves support on the way to justice.</p>
                    <img src={signature} alt="" />
                </div>
                <div className='w-50'>
                    <img src={lawyer} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
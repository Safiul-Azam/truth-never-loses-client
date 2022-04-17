import React from 'react';
import { Button } from 'react-bootstrap';
import AboutMe from '../AboutMe/AboutMe';
import './Home.css'


const Home = () => {
    return (
        <div>

            <div className='title-container'>
                <div className='container support-title'>
                    <h2 className='fs-1'>Led by the truth</h2>
                    <p className='fs-5'>Find the support you need when fighting for you right. with 25 years long tradition. i am here to offer you the best services </p>
                </div>
                <div className='title-btn'>
                    <Button variant="outline-secondary">CONTACT ME</Button>
                    <Button variant="outline-secondary">PURCHASE</Button>
                </div>
            </div>
        </div>
    );
};

export default Home;
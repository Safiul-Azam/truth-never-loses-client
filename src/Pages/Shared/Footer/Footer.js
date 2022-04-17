import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='footer'>
            <div className='container footer-container'>
                <div>
                    <h3>My Office</h3>
                    <address>phone: 1-677-123-45297</address>
                    <address>location: 184 Main Collins Street</address>
                    <address>Office Time: Mon - Sat 8.00 - 18.00</address>
                </div>
                <div>
                    <h3>Latest news</h3>
                    <p>Stop worrying about the market</p>
                    <span>may 9, 2022</span>
                    <p>Law school programs</p>
                    <span>may 22, 2022</span>
                    <p>How to deal with law school stress</p>
                    <span>june 12, 2022</span>
                </div>
            </div>
           <div className='copy-right'>
           <p className='text-center text-white'>Truth never loses &copy; {year} All rights reserved. </p>
           </div>
        </div>
    );
};

export default Footer;
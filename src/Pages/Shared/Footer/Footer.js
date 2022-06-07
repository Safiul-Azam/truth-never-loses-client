import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='footer'>
            <div className='container footer-container row'>
                <div className='col-lg-7 col-sm-12 mb-5'>
                    <h3 className='fs-1 fw-bold mb-4'>My Office</h3>
                    <p className='w-50'>i strongly believe that everyone deserves equal rights. thar's why i put my client first on my way to the justice and truth</p>
                    <address>phone: 1-677-123-45297</address>
                    <address>location: 184 Main Collins Street</address>
                    <address>Office Time: Mon - Sat 8.00 - 18.00</address>
                </div>
                <div className='col-lg-4 col-sm-12 mb-5'>
                    <h3 className='fs-1 fw-bold mb-4'>Latest news</h3>
                    <span>Stop worrying about the market</span>
                    <p>may 9, 2022</p>
                    <span>Law school programs</span>
                    <p>may 22, 2022</p>
                    <span>How to deal with law school stress</span>
                    <p>june 12, 2022</p>
                </div>
            </div>
           <div className='copy-right'>
           <p className='text-center text-white'>Truth never loses &copy; {year} All rights reserved. </p>
           </div>
        </div>
    );
    // const product_name = product.product_name;
    // const image = product.image;
    // const description = product.description;
    // const price = product.price;
    // const quantity = parseInt(product.quantity) - 1;
    // const email = product.email;
    // const supplyar_name = product.supplyar_name;
};

export default Footer;
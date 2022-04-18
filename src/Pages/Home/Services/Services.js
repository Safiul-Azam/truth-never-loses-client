import React from 'react';
import { CardGroup } from 'react-bootstrap';
import './Services.css'

import services1 from '../../../images/services/services1.png'
import services2 from '../../../images/services/services2.png'
import services3 from '../../../images/services/services3.png'
import Service from '../Home/Service/Service';

const services = [
    { id: 1, name: 'Personal and commercial', price: 960, description: 'I handle the tough charge negotiation with police and brings innovate thinking to defending My clients in Court. My record is outstanding. I will stand shoulder to shoulder with you from the beginning to the end of your matter.', img: services1 },
    { id: 2, name: 'Immigration', price: 750, description: 'An immigration lawyer helps you with all the gritty processes that come with immigration, making the entire experience more convenient and hassle-free.', img: services2 },
    { id: 3, name: 'Criminal', price: 570, description: 'Life as a criminal defense lawyer is tough; there are a lot of highs and lows, but it’s completely worth it in the end. Here is what it’s like to be a criminal defense lawyer.', img: services3 },
]

const Services = () => {
    return (
        <div className='services-section'>
            <h2 className='text-center line pt-5'>My Services</h2>
            <div className="services-container container">
                <CardGroup>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </CardGroup>
            </div>

        </div>
    );
};

export default Services;
import React from 'react';
import { CardGroup } from 'react-bootstrap';
import './Services.css'

import services1 from '../../../images/services/services1.png'
import services2 from '../../../images/services/services2.png'
import Service from '../Home/Service/Service';

const services = [
    { id: 1, name: 'Personal and commercial', price: 960, description: 'I handle the tough charge negotiation with police and brings innovate thinking to defending My clients in Court. My record is outstanding. I will stand shoulder to shoulder with you from the beginning to the end of your matter.', img: services1 },
    { id: 1, name: 'Immigration', price: 750, description: 'I handle the tough charge negotiation with police and brings innovate thinking to defending My clients in Court. My record is outstanding. I will stand shoulder to shoulder with you from the beginning to the end of your matter.', img: services2 },
    { id: 1, name: 'Criminal', price: 570, description: 'I handle the tough charge negotiation with police and brings innovate thinking to defending My clients in Court. My record is outstanding. I will stand shoulder to shoulder with you from the beginning to the end of your matter.', img: services1 },
]

const Services = () => {
    return (
        <div className='services-section'>
            <h2 className='text-center pt-5'>My Services</h2>
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
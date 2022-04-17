import React from 'react';
import { CardGroup } from 'react-bootstrap';

import services1 from '../../../images/services/services1.png'
import services2 from '../../../images/services/services2.png'
import Service from '../Home/Service/Service';

const services = [
    {id:1, name:'personal and commercial', price:960,img:services1},
    {id:1, name:'immigration', price:750,img:services2},
    {id:1, name:'criminal', price:570,img:services1},
]

const Services = () => {
    return (
        <div>
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
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price } = service
    return (
        <Card className='me-4 border rounded my-5'>
            <Card.Img variant="top" src={img} />
            <Card.Body className='text-center mt-3'>
                <Card.Title>{name}</Card.Title>
                <Card.Title className='fs-4 fw-bold'>${price}</Card.Title>
                
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card>
                <button className='services-btn btn'>GET SERVICE</button>
            </Card>
        </Card>
    );
};

export default Service;
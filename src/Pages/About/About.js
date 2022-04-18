import React from 'react';
import safi from '../../images/safi.jpg'

const About = () => {
    return (
        <div className='d-flex '>
            <div>
            I am safiul azam. i am 25 years old . I will became a full stack developer after 5 month. So it is my gools
            </div>
            <div>
                <img src={safi} alt="" />
            </div>
        </div>
    );
};

export default About;
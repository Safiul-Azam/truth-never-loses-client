import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='w-50 mx-auto'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Authorization vs Authentication </Accordion.Header>
                    <Accordion.Body>
                        Authorization
                        1.Authorization warks via settings that is implement  by the organization.
                        2.authorization is not visible.
                        3.authorization means what resource  a user can access
                        <br />
                        Authentication
                        1.Authentication works via password , one time pics,and other information provided by the user
                        2. Authentication is visible.
                        3.Authentication partially changeable by the user
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>why we are use firebase?</Accordion.Header>
                    <Accordion.Body>
                        because firebase Authentication Firebase provides us easy sign in system with email and password and google and git hub log in system. And provides deploy system  so we can deploy easily
                        <br />
                        Firebase alternative
                        1.parse
                        2.kuzzk
                        3.pxdb
                        4.AWS amplify
                    </Accordion.Body>
                    <Accordion.Body>
                        because firebase Authentication Firebase provides us easy sign in system with email and password and google and git hub log in system. And provides deploy system  so we can deploy easily
                        <br />
                        Firebase alternative
                        1.parse
                        2.kuzzk
                        3.pxdb
                        4.AWS amplify
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;